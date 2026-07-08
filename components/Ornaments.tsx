import type { SVGProps, ReactNode } from "react";

/* Shared gold gradient defs — reference via stroke="url(#gold-grad)" / fill="url(#gold-grad)". */
export function GoldDefs() {
  return (
    <svg width="0" height="0" aria-hidden focusable="false" style={{ position: "absolute" }}>
      <defs>
        <linearGradient id="gold-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9a7526" />
          <stop offset="35%" stopColor="#c9a24b" />
          <stop offset="60%" stopColor="#f6e5b4" />
          <stop offset="100%" stopColor="#9a7526" />
        </linearGradient>
      </defs>
    </svg>
  );
}

type OProps = SVGProps<SVGSVGElement> & { gold?: boolean };

const strokeProps = (gold?: boolean) => ({
  fill: "none",
  stroke: gold ? "url(#gold-grad)" : "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
});

/* A small paisley (buta) glyph — the recurring flourish. */
export function Paisley({ gold, ...p }: OProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      <path
        {...strokeProps(gold)}
        d="M8 20c-4-1-5-6-2-9 2.6-2.6 8-3 9-8 .6-3 4-3.4 5.4-1 1.8 3 .2 8.4-4.4 11.4C12 16 10.5 20.6 8 20Z"
      />
      <path {...strokeProps(gold)} d="M10.5 15.5c1.6-1 2.4-2.6 2.6-4.4" />
      <circle cx="14.6" cy="6.6" r="0.7" fill={gold ? "url(#gold-grad)" : "currentColor"} stroke="none" />
    </svg>
  );
}

/* Lotus — small mark used on hairlines and seals. */
export function Lotus({ gold, ...p }: OProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      <path {...strokeProps(gold)} d="M12 18c0-3 0-6 0-9" />
      <path {...strokeProps(gold)} d="M12 18c-3.2 0-5.6-1.8-6.4-4.6C8 12.6 10.4 13.8 12 18Z" />
      <path {...strokeProps(gold)} d="M12 18c3.2 0 5.6-1.8 6.4-4.6C16 12.6 13.6 13.8 12 18Z" />
      <path {...strokeProps(gold)} d="M12 18c-1.6-3-1.6-6.4 0-9.4C13.6 11.6 13.6 15 12 18Z" />
      <path {...strokeProps(gold)} d="M6 18h12" opacity="0.6" />
    </svg>
  );
}

/* Concentric mandala — the signature ornament (watermark + seals). */
export function Mandala({ gold, petals = 16, ...p }: OProps & { petals?: number }) {
  const R = 46;
  const cx = 50;
  const cy = 50;
  const outer = Array.from({ length: petals }, (_, i) => {
    const a = (i / petals) * Math.PI * 2;
    const x = cx + Math.cos(a) * R;
    const y = cy + Math.sin(a) * R;
    const x2 = cx + Math.cos(a) * (R - 9);
    const y2 = cy + Math.sin(a) * (R - 9);
    const a1 = a - Math.PI / petals;
    const cxp = cx + Math.cos(a1) * (R + 4);
    const cyp = cy + Math.sin(a1) * (R + 4);
    return `M${x2.toFixed(1)} ${y2.toFixed(1)} Q${cxp.toFixed(1)} ${cyp.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");
  const spokes = Array.from({ length: petals / 2 }, (_, i) => {
    const a = (i / (petals / 2)) * Math.PI;
    return `M${(cx + Math.cos(a) * 18).toFixed(1)} ${(cy + Math.sin(a) * 18).toFixed(1)} L${(
      cx -
      Math.cos(a) * 18
    ).toFixed(1)} ${(cy - Math.sin(a) * 18).toFixed(1)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 100 100" aria-hidden {...p}>
      <g {...strokeProps(gold)}>
        <circle cx={cx} cy={cy} r={R} />
        <circle cx={cx} cy={cy} r={R - 9} opacity="0.8" />
        <circle cx={cx} cy={cy} r={28} opacity="0.7" />
        <circle cx={cx} cy={cy} r={18} opacity="0.7" />
        <circle cx={cx} cy={cy} r={7} />
        <path d={outer} />
        <path d={spokes} opacity="0.55" />
      </g>
    </svg>
  );
}

/* A trailing mehndi vine — animates via .draw-path (pathLength="1"). */
export function MehndiVine({ gold, className, ...p }: OProps) {
  return (
    <svg viewBox="0 0 240 40" aria-hidden className={className} {...p}>
      <g {...strokeProps(gold)}>
        <path
          className="draw-path"
          pathLength={1}
          d="M4 20 C 40 4, 60 36, 96 20 S 152 4, 188 20 S 226 30, 236 18"
        />
        <path className="draw-path" pathLength={1} style={{ ["--draw-delay" as string]: "0.3s" }} d="M40 20c-3-6-9-7-12-4" />
        <path className="draw-path" pathLength={1} style={{ ["--draw-delay" as string]: "0.5s" }} d="M96 20c2 7 8 8 12 5" />
        <path className="draw-path" pathLength={1} style={{ ["--draw-delay" as string]: "0.7s" }} d="M150 20c-3-6-9-7-12-4" />
        <path className="draw-path" pathLength={1} style={{ ["--draw-delay" as string]: "0.9s" }} d="M188 20c2 7 9 8 13 5" />
      </g>
    </svg>
  );
}

/* Thin gold hairline with a centered lotus — a "rule" divider. */
export function GoldRule({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`} aria-hidden>
      <span className="h-px w-14 bg-gradient-to-r from-transparent to-gold" />
      <Lotus gold className="h-4 w-4" />
      <span className="h-px w-14 bg-gradient-to-l from-transparent to-gold" />
    </span>
  );
}

/*
 * ArchFrame — clips children (typically an image) inside a cusped multifoil
 * (jharokha) arch, with a double gold keyline. `id` must be unique per instance.
 */
export function ArchFrame({
  id,
  children,
  className = "",
  drawBorder = false
}: {
  id: string;
  children: ReactNode;
  className?: string;
  drawBorder?: boolean;
}) {
  // Multifoil arch path in a 100x120 box (top arch, straight sides, flat base).
  const d =
    "M6 116 V54 C6 30 22 6 50 6 C78 6 94 30 94 54 V116 Z";
  return (
    <div className={`relative ${className}`}>
      <svg width="0" height="0" aria-hidden style={{ position: "absolute" }}>
        <defs>
          <clipPath id={id} clipPathUnits="objectBoundingBox">
            {/* normalized version of the arch path */}
            <path d="M0.06 0.966 V0.45 C0.06 0.25 0.22 0.05 0.5 0.05 C0.78 0.05 0.94 0.25 0.94 0.45 V0.966 Z" />
          </clipPath>
        </defs>
      </svg>
      <div
        className="relative h-full w-full overflow-hidden"
        style={{ clipPath: `url(#${id})`, WebkitClipPath: `url(#${id})` }}
      >
        {children}
      </div>
      {/* Double gold keyline tracing the same arch */}
      <svg
        viewBox="0 0 100 120"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        <path d={d} fill="none" stroke="url(#gold-grad)" strokeWidth={1.4} className={drawBorder ? "draw-path" : ""} pathLength={drawBorder ? 1 : undefined} />
        <path d={d} fill="none" stroke="url(#gold-grad)" strokeWidth={0.5} opacity={0.6} transform="scale(0.94) translate(3.2 3.6)" />
      </svg>
    </div>
  );
}

/* Faint rotating mandala watermark for section backgrounds. */
export function MandalaWatermark({
  className = "",
  gold = false,
  spin = true
}: {
  className?: string;
  gold?: boolean;
  spin?: boolean;
}) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden>
      <Mandala
        gold={gold}
        petals={24}
        className={`h-full w-full ${spin ? "animate-rotate-slow" : ""}`}
      />
    </div>
  );
}

/* Drifting gold-dust motes (ambient). Count capped for perf. */
export function GoldDust({ count = 10 }: { count?: number }) {
  const motes = Array.from({ length: count }, (_, i) => {
    const left = (i * 97) % 100;
    const delay = (i * 1.3) % 8;
    const dur = 7 + ((i * 1.7) % 6);
    const size = 2 + (i % 3);
    return (
      <span
        key={i}
        className="absolute rounded-full bg-gold-champagne"
        style={{
          left: `${left}%`,
          bottom: `-10px`,
          width: `${size}px`,
          height: `${size}px`,
          boxShadow: "0 0 6px 1px rgba(246,229,180,0.8)",
          animation: `float-dust ${dur}s linear ${delay}s infinite`
        }}
      />
    );
  });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {motes}
    </div>
  );
}

/* Gold wax-seal trust badge with a mandala emboss and an icon slot. */
export function WaxSeal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`relative flex h-12 w-12 flex-none items-center justify-center rounded-full ${className}`}
      style={{
        background: "radial-gradient(circle at 35% 30%, #fff8f0, #f3ddec 70%)",
        boxShadow: "inset 0 0 0 1px rgba(201,162,75,0.7), 0 6px 16px -8px rgba(122,91,30,0.6)"
      }}
      aria-hidden
    >
      <Mandala gold petals={12} className="absolute inset-1 h-[calc(100%-8px)] w-[calc(100%-8px)] opacity-40" />
      <span className="relative text-plum-700">{children}</span>
    </span>
  );
}
