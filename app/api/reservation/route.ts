import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Item = { label: string; category: string; price: number | null };
type Payload = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  address?: string;
  date?: string;
  time?: string;
  notes?: string;
  lang?: string;
  items?: Item[];
  totalPrice?: number;
  durationLabel?: string;
};

const SALON_EMAIL = process.env.RESERVATION_TO || "contact@shreebeaute.fr";
// Resend requires a verified sending domain; onboarding@resend.dev works for testing to your own inbox.
const FROM = process.env.RESERVATION_FROM || "Shree Beauté <onboarding@resend.dev>";

function esc(s: unknown): string {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Minimal validation
  if (!body.firstName || !body.lastName || !body.phone) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
  }

  const items = Array.isArray(body.items) ? body.items : [];
  const itemsRows = items
    .map(
      (i) =>
        `<tr><td style="padding:4px 12px 4px 0">${esc(i.label)}</td><td style="padding:4px 0;color:#6b5262">${esc(
          i.category
        )}</td><td style="padding:4px 0;text-align:right;font-weight:600">${
          i.price == null ? "—" : `${i.price} €`
        }</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;color:#2b1b28;max-width:560px">
      <h2 style="color:#571b45;margin:0 0 4px">Nouvelle demande de réservation</h2>
      <p style="color:#6b5262;margin:0 0 16px">Shree Beauté Indienne — via salon.mach13.tech</p>
      <table style="border-collapse:collapse;font-size:14px;margin-bottom:16px">
        <tr><td style="padding:3px 16px 3px 0;color:#6b5262">Client·e</td><td><strong>${esc(body.firstName)} ${esc(
          body.lastName
        )}</strong></td></tr>
        <tr><td style="padding:3px 16px 3px 0;color:#6b5262">Téléphone</td><td>${esc(body.phone)}</td></tr>
        <tr><td style="padding:3px 16px 3px 0;color:#6b5262">Email</td><td>${esc(body.email) || "—"}</td></tr>
        <tr><td style="padding:3px 16px 3px 0;color:#6b5262">Adresse</td><td>${esc(body.address) || "—"}</td></tr>
        <tr><td style="padding:3px 16px 3px 0;color:#6b5262">Date / heure</td><td>${esc(body.date) || "—"} · ${esc(
          body.time
        ) || "—"}</td></tr>
        <tr><td style="padding:3px 16px 3px 0;color:#6b5262">Durée estimée</td><td>${esc(body.durationLabel) || "—"}</td></tr>
      </table>
      ${
        itemsRows
          ? `<table style="border-collapse:collapse;font-size:14px;width:100%;border-top:1px solid #efe0ea;border-bottom:1px solid #efe0ea">
              <thead><tr><th style="text-align:left;padding:8px 0;color:#7a5b1e;font-size:12px;letter-spacing:.08em;text-transform:uppercase">Prestations</th><th></th><th></th></tr></thead>
              <tbody>${itemsRows}</tbody>
            </table>
            <p style="text-align:right;font-size:16px;margin:10px 0 0">Total estimé : <strong>${
              body.totalPrice ?? 0
            } €</strong></p>`
          : "<p style='color:#6b5262'>Aucune prestation sélectionnée.</p>"
      }
      ${body.notes ? `<p style="margin-top:16px"><em>Note :</em> ${esc(body.notes)}</p>` : ""}
    </div>`;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Not configured yet: don't fail the UX — accept the request but flag non-delivery.
    console.warn("[reservation] RESEND_API_KEY not set — booking not emailed:", {
      name: `${body.firstName} ${body.lastName}`,
      phone: body.phone,
      date: body.date,
      time: body.time
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: SALON_EMAIL,
      replyTo: body.email || undefined,
      subject: `Réservation — ${body.firstName} ${body.lastName} (${body.date || "?"} ${body.time || ""})`,
      html
    });
    if (error) {
      console.error("[reservation] resend error", error);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[reservation] exception", err);
    return NextResponse.json({ ok: false, error: "exception" }, { status: 500 });
  }
}
