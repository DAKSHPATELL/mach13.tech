export default function Footer() {
  return (
    <footer className="border-t border-divider bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-foreground/70 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} Mach13 • Gujarat, India · Serving Aachen, Germany • mach13.tech</p>
        <nav className="flex gap-6" aria-label="Footer">
          <a className="hover:underline" href="/legal/impressum">Impressum</a>
          <a className="hover:underline" href="/legal/privacy-policy">Privacy Policy</a>
          <a className="hover:underline" href="/contact#book">Book</a>
        </nav>
      </div>
    </footer>
  );
}
