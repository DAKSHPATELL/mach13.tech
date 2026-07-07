import Link from "next/link";

export const metadata = { title: "Page introuvable · 404" };

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">Erreur 404</span>
      <h1 className="display mt-4 text-5xl sm:text-6xl">Page introuvable</h1>
      <p className="mt-4 max-w-md text-muted">
        La page que vous recherchez n&apos;existe pas ou a été déplacée. / The page you are looking for
        could not be found.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Retour à l&apos;accueil / Back home
      </Link>
    </section>
  );
}
