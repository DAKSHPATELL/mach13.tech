import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Speak with Mach13 about document-grounded assistants and custom ML pilots."
};

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-divider bg-white px-6 py-12 sm:px-12" aria-labelledby="contact-heading">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          <h1 id="contact-heading" className="text-4xl font-semibold text-foreground">
            Let’s plan your pilot
          </h1>
          <p className="text-base text-foreground/70">
            Share a little context and we&apos;ll set up a short discovery call to scope documents, lines, and success metrics.
          </p>
        </div>
      </section>
      <section className="grid gap-8 rounded-3xl border border-divider bg-white px-6 py-12 sm:grid-cols-[1fr_0.9fr] sm:px-12" aria-labelledby="contact-form">
        <ContactForm />
        <aside className="space-y-6 rounded-3xl border border-divider/80 bg-background px-6 py-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Book directly</h2>
            <p className="mt-2 text-sm text-foreground/70">
              Drop a Calendly embed into the placeholder below to make scheduling instant for your team.
            </p>
          </div>
          {/* Paste Calendly or Cal.com inline embed script targeting #calendly-embed below */}
          <div
            id="calendly-embed"
            aria-label="Booking"
            className="flex h-72 items-center justify-center rounded-2xl border border-dashed border-divider text-sm text-foreground/50"
          />
        </aside>
      </section>
    </div>
  );
}
