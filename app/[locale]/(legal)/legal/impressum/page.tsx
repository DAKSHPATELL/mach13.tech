import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum for Mach13 at mach13.tech."
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-16 sm:px-0">
      <h1 className="text-3xl font-semibold text-foreground">Impressum</h1>
      <section className="space-y-4 text-sm text-foreground/80">
        <p>
          <strong>Mach13</strong>
          <br />
          Daksh Patel
          <br />
          Hauptsitz: Gujarat, Indien
          <br />
          Betreuung für Deutschland: Aachen (Remote Office)
        </p>
        <p>
          Kontakt: <a className="text-steel underline" href="mailto:info@mach13.tech">info@mach13.tech</a>
        </p>
        <dl className="space-y-2">
          <div>
            <dt className="font-semibold text-foreground">Verantwortlich gemäß § 18 Abs. 2 MStV</dt>
            <dd>Daksh Patel</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Umsatzsteuer-ID</dt>
            <dd>TODO: Ergänzen</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground">Registereintrag</dt>
            <dd>TODO: Handelsregister, Registernummer, Registergericht</dd>
          </div>
        </dl>
      </section>
      <section className="space-y-2 text-xs text-foreground/60">
        <p>Hinweis: Ergänzen Sie hier Pflichtangaben zu Haftungsausschluss, Berufshaftpflicht und Streitbeilegung.</p>
      </section>
    </div>
  );
}
