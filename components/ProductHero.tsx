import { ReactNode } from "react";

interface ProductHeroProps {
  title: string;
  description: string;
  items: string[];
  kicker?: string;
  footer?: ReactNode;
}

export function ProductHero({ title, description, items, kicker, footer }: ProductHeroProps) {
  return (
    <section className="rounded-3xl border border-divider bg-white px-6 py-16 sm:px-12" aria-labelledby="product-title">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        {kicker ? (
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-divider/80 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-steel">
            {kicker}
          </span>
        ) : null}
        <div className="space-y-4">
          <h1 id="product-title" className="text-4xl font-semibold text-foreground">
            {title}
          </h1>
          <p className="text-base leading-relaxed text-foreground/80">{description}</p>
        </div>
        <ul className="grid gap-4 text-sm text-foreground/80 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex gap-3 rounded-2xl border border-divider/80 bg-background px-4 py-4">
              <span aria-hidden className="mt-1 inline-flex h-2 w-2 rounded-full bg-signal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {footer ? <div className="text-sm text-foreground/70">{footer}</div> : null}
      </div>
    </section>
  );
}
