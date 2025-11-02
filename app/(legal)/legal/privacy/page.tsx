import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy placeholder for Mach13 at mach13.tech."
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-16 sm:px-0">
      <h1 className="text-3xl font-semibold text-foreground">Datenschutzerklärung</h1>
      <section className="space-y-4 text-sm text-foreground/80">
        <p>
          Mach13 nimmt Datenschutz ernst. Diese Seite dient als Platzhalter für eine vollständige Datenschutzerklärung gemäß DSGVO. Die endgültige Fassung beschreibt Datenkategorien, Zwecke der Verarbeitung, Rechtsgrundlagen, Speicherfristen und Betroffenenrechte.
        </p>
        <dl className="space-y-2">
          <div>
            <dt className="font-semibold text-foreground">Verantwortlicher</dt>
            <dd>Mach13, Daksh Patel, Bremen, Deutschland</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Kontakt Datenschutz</dt>
            <dd>
              <a className="text-steel underline" href="mailto:info@mach13.tech">
                info@mach13.tech
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Datenschutzbeauftragter</dt>
            <dd>TODO: Name und Kontakt, falls benannt</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Zwecke der Verarbeitung</dt>
            <dd>TODO: Produktionssupport, Support-Kommunikation, Analytics (Plausible)</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Auftragsverarbeiter</dt>
            <dd>TODO: Hosting-Provider, Plausible, Kollaborationstools</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Datentransfers</dt>
            <dd>TODO: Drittländer + Garantien (z. B. EU-Standardvertragsklauseln)</dd>
          </div>
        </dl>
      </section>
      <section className="space-y-2 text-xs text-foreground/60">
        <p>
          Hinweis: Ergänzen Sie Links zu Verträgen zur Auftragsverarbeitung (DPA), Informationen zu Betroffenenrechten (Auskunft, Berichtigung, Löschung, Widerruf) und Speicherfristen.
        </p>
      </section>
    </div>
  );
}
