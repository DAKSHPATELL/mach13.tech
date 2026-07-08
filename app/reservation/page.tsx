"use client";

import { useMemo, useState } from "react";
import { Plus, Check, Close, Calendar, Clock } from "@/components/Icons";
import { useLang } from "@/lib/i18n";
import { reservationPage as R, site, timeSlots } from "@/lib/content";
import { priceCategories, type PriceItem } from "@/lib/prices";

type FlatItem = {
  key: string;
  categoryTitle: string;
  item: PriceItem;
};

export default function ReservationPage() {
  const { lang } = useLang();
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const flat: FlatItem[] = useMemo(
    () =>
      priceCategories.flatMap((cat) =>
        cat.items.map((item, idx) => ({
          key: `${cat.id}:${idx}`,
          categoryTitle: cat.title[lang],
          item
        }))
      ),
    [lang]
  );

  const byKey = useMemo(() => new Map(flat.map((f) => [f.key, f])), [flat]);
  const selectedItems = selected.map((k) => byKey.get(k)).filter(Boolean) as FlatItem[];

  const toggle = (key: string) =>
    setSelected((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));

  const totalDuration = selectedItems.reduce((sum, f) => sum + (f.item.duration ?? 0), 0);
  const hasQuoteOnly = selectedItems.some((f) => f.item.price === null);
  const totalPrice = selectedItems.reduce((sum, f) => sum + (f.item.price ?? 0), 0);

  const durationLabel = (() => {
    if (totalDuration === 0) return `0 ${R.minLabel[lang]}`;
    const h = Math.floor(totalDuration / 60);
    const m = totalDuration % 60;
    if (h && m) return `${h}h${m.toString().padStart(2, "0")}`;
    if (h) return `${h}h`;
    return `${m} ${R.minLabel[lang]}`;
  })();

  const totalLabel =
    selectedItems.length === 0
      ? R.onQuote[lang]
      : `${totalPrice} €${hasQuoteOnly ? " +" : ""}`;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      address: fd.get("address"),
      date: fd.get("date"),
      time: fd.get("time"),
      notes: fd.get("notes"),
      lang,
      items: selectedItems.map((f) => ({
        label: f.item.label[lang],
        category: f.categoryTitle,
        price: f.item.price
      })),
      totalPrice,
      durationLabel
    };
    setStatus("sending");
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error("failed");
      setStatus("idle");
      setSubmitted(true);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setSubmitted(false);
    setSelected([]);
    setStatus("idle");
  };

  return (
    <section className="bg-cream-radial">
      <div className="container-x py-14 sm:py-16">
        <span className="eyebrow">{R.eyebrow[lang]}</span>
        <h1 className="display mt-4 text-4xl sm:text-5xl md:text-6xl">{R.title[lang]}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{R.intro[lang]}</p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Catalog */}
          <div className="space-y-8">
            {priceCategories.map((cat) => (
              <div key={cat.id} className="card p-6">
                <h2 className="font-display text-xl font-semibold text-plum-800">
                  {cat.title[lang]}
                </h2>
                <ul className="mt-4 divide-y divide-line/70">
                  {cat.items.map((item, idx) => {
                    const key = `${cat.id}:${idx}`;
                    const active = selected.includes(key);
                    return (
                      <li key={key} className="flex items-center justify-between gap-4 py-3">
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-ink">{item.label[lang]}</p>
                          {item.detail && (
                            <p className="mt-0.5 text-xs text-muted">{item.detail[lang]}</p>
                          )}
                        </div>
                        <div className="flex flex-none items-center gap-3">
                          <span className="font-display text-lg font-semibold text-gold-ink">
                            {item.price === null ? R.onQuote[lang] : `${item.from ? "" : ""}${item.price} €`}
                          </span>
                          <button
                            type="button"
                            onClick={() => toggle(key)}
                            aria-pressed={active}
                            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                              active
                                ? "bg-plum-800 text-white"
                                : "border border-plum-200 text-plum-700 hover:border-plum-400 hover:bg-plum-50"
                            }`}
                          >
                            {active ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                            {active ? R.added[lang] : R.add[lang]}
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Cart / form */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="card overflow-hidden">
              <div className="bg-plum-gradient px-6 py-5 text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
                  {R.cartEyebrow[lang]}
                </span>
                <h2 className="mt-1 font-display text-2xl font-semibold">{R.cartTitle[lang]}</h2>
              </div>

              {submitted ? (
                <div className="p-6 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-plum-50 text-plum-600">
                    <Check className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-plum-900">
                    {R.successTitle[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{R.successText[lang]}</p>
                  <button type="button" onClick={reset} className="btn-primary mt-6">
                    {R.successAgain[lang]}
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="p-6">
                  {/* Selection */}
                  {selectedItems.length === 0 ? (
                    <p className="rounded-2xl bg-plum-50/60 px-4 py-4 text-center text-sm text-muted">
                      {R.empty[lang]}
                    </p>
                  ) : (
                    <ul className="space-y-2">
                      {selectedItems.map((f) => (
                        <li
                          key={f.key}
                          className="flex items-center justify-between gap-3 rounded-xl bg-plum-50/50 px-3 py-2"
                        >
                          <span className="min-w-0 text-sm">
                            <span className="block truncate text-ink">{f.item.label[lang]}</span>
                            <span className="text-xs text-muted">{f.categoryTitle}</span>
                          </span>
                          <span className="flex flex-none items-center gap-2">
                            <span className="text-sm font-semibold text-gold-ink">
                              {f.item.price === null ? R.onQuote[lang] : `${f.item.price} €`}
                            </span>
                            <button
                              type="button"
                              onClick={() => toggle(f.key)}
                              aria-label={R.remove[lang]}
                              className="text-plum-400 hover:text-gold-ink"
                            >
                              <Close className="h-4 w-4" />
                            </button>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Totals */}
                  <div className="mt-4 space-y-2 border-y border-line py-4 text-sm">
                    <div className="flex items-center justify-between text-muted">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" /> {R.durationLabel[lang]}
                      </span>
                      <span className="font-medium text-ink">{durationLabel}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted">{R.totalLabel[lang]}</span>
                      <span className="font-display text-2xl font-semibold text-plum-900">
                        {totalLabel}
                      </span>
                    </div>
                  </div>

                  {/* Form fields */}
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <Field label={R.form.firstName[lang]} name="firstName" required autoComplete="given-name" />
                    <Field label={R.form.lastName[lang]} name="lastName" required autoComplete="family-name" />
                    <Field label={R.form.phone[lang]} name="phone" type="tel" required autoComplete="tel" className="col-span-2" />
                    <Field label={R.form.email[lang]} name="email" type="email" autoComplete="email" className="col-span-2" />
                    <Field label={R.form.address[lang]} name="address" autoComplete="street-address" className="col-span-2" />
                    <Field label={R.form.date[lang]} name="date" type="date" required />
                    <div>
                      <label className="mb-1 block text-xs font-medium text-plum-700" htmlFor="time">
                        {R.form.time[lang]}
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        defaultValue=""
                        className="w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-plum-400 focus:ring-2 focus:ring-plum-200"
                      >
                        <option value="" disabled>
                          {R.form.timePlaceholder[lang]}
                        </option>
                        {timeSlots.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-2">
                      <label className="mb-1 block text-xs font-medium text-plum-700" htmlFor="notes">
                        {R.form.notes[lang]}
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        className="w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-plum-400 focus:ring-2 focus:ring-plum-200"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <Calendar className="h-4 w-4" />
                    {status === "sending" ? R.form.sending[lang] : R.form.submit[lang]}
                  </button>

                  {status === "error" && (
                    <p className="mt-3 rounded-xl bg-red-50 px-3 py-2 text-center text-xs text-red-700">
                      {R.form.errorMsg[lang]}{" "}
                      <a href={`tel:${site.phoneHref}`} className="font-semibold underline">
                        {site.phone}
                      </a>
                    </p>
                  )}

                  <ul className="mt-4 space-y-1.5 text-xs text-muted">
                    {R.notes.map((n, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-gold">•</span>
                        {n[lang]}
                      </li>
                    ))}
                  </ul>
                </form>
              )}
            </div>

            {/* Salon quick info */}
            <div className="mt-4 rounded-3xl border border-line bg-white/70 p-5 text-sm text-muted">
              <p className="font-medium text-ink">{site.address}</p>
              <p className="mt-1">
                <a href={`tel:${site.phoneHref}`} className="link-quiet">
                  {site.phone}
                </a>
                {" · "}
                <a href={`mailto:${site.email}`} className="link-quiet">
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  className = ""
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1 block text-xs font-medium text-plum-700" htmlFor={name}>
        {label}
        {required && <span className="text-gold-ink"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-xl border border-line bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-plum-400 focus:ring-2 focus:ring-plum-200"
      />
    </div>
  );
}
