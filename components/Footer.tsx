export default function Footer() {
  return (
    <footer className="border-t border-[#EDEDED] bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-10 text-sm text-[#0B0B0C]/70">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>© {new Date().getFullYear()} Mach13 • Gujarat, India · Serving Aachen, Germany • mach13.tech</div>
          <div className="flex gap-6">
            <a className="hover:underline" href="/legal/impressum">Impressum</a>
            <a className="hover:underline" href="/legal/privacy">Privacy</a>
            <a className="hover:underline" href="/contact#book">Book</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
