"use client";

import { FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitted" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.company || !form.message) {
      setStatus("error");
      setError("Please complete all fields before submitting.");
      return;
    }

    const emailPattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (!emailPattern.test(form.email)) {
      setStatus("error");
      setError("Enter a valid email address.");
      return;
    }

    setStatus("submitted");
    setError(null);
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <form className="space-y-6" aria-labelledby="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="rounded-lg border border-divider bg-background px-4 py-3 text-sm text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="rounded-lg border border-divider bg-background px-4 py-3 text-sm text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-foreground" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            type="text"
            required
            value={form.company}
            onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
            className="rounded-lg border border-divider bg-background px-4 py-3 text-sm text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
            autoComplete="organization"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-foreground" htmlFor="message">
          How can we help?
        </label>
        <textarea
          id="message"
          required
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="min-h-[140px] rounded-lg border border-divider bg-background px-4 py-3 text-sm text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
          placeholder="Share lines, documents, or KPIs you care about"
        />
      </div>
      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-steel px-6 py-3 text-sm font-semibold text-white transition hover:bg-steel/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel"
        >
          Send message
        </button>
        <p className="text-sm text-foreground/60">info@mach13.tech · Bremen, Germany</p>
      </div>
      <p role="status" aria-live="polite" className="text-sm font-medium text-steel">
        {status === "submitted" ? "Thanks! We’ll reply within one business day." : ""}
      </p>
      {status === "error" && error ? (
        <p className="text-sm font-medium text-signal" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
