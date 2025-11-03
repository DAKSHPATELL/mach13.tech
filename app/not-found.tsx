export default function NotFound() {
  return (
    <main className="px-6 md:px-10 lg:px-16 py-20">
      <h1 className="text-3xl font-bold text-foreground">Page not found</h1>
      <p className="mt-3 text-foreground/70">Try the homepage or the Products page.</p>
      <div className="mt-6 flex gap-4">
        <a className="px-4 py-2 rounded bg-[#0A2540] text-white" href="/">Home</a>
        <a className="px-4 py-2 rounded border border-[#0A2540] text-[#0A2540]" href="/products">Products</a>
      </div>
    </main>
  );
}

