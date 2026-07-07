import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

export const Flower = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="2.4" />
    <path d="M12 9.6c.9-2.2.4-4.4-.5-5.6-.9 1.2-1.4 3.4-.5 5.6" />
    <path d="M14.4 12c2.2-.9 3.6-2.6 4.1-4.1-1.6.1-3.6 1-4.6 2.7" />
    <path d="M13.1 14.2c1.4 1.9 3.4 2.8 5 2.9-.6-1.5-2-3.1-4.1-3.9" />
    <path d="M10.9 14.2c-1.4 1.9-3.4 2.8-5 2.9.6-1.5 2-3.1 4.1-3.9" />
    <path d="M9.6 12C7.4 11.1 6 9.4 5.5 7.9c1.6.1 3.6 1 4.6 2.7" />
  </svg>
);

export const User = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="8" r="3.4" />
    <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
  </svg>
);

export const Shield = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3.2 5.5 6v5c0 4 2.8 7 6.5 8.2 3.7-1.2 6.5-4.2 6.5-8.2V6z" />
    <path d="m9.3 11.8 1.9 1.9 3.6-3.8" />
  </svg>
);

export const Sparkle = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3.5c.6 3.6 1.9 4.9 5.5 5.5-3.6.6-4.9 1.9-5.5 5.5-.6-3.6-1.9-4.9-5.5-5.5 3.6-.6 4.9-1.9 5.5-5.5Z" />
    <path d="M18 15.5c.3 1.6.9 2.2 2.5 2.5-1.6.3-2.2.9-2.5 2.5-.3-1.6-.9-2.2-2.5-2.5 1.6-.3 2.2-.9 2.5-2.5Z" />
  </svg>
);

export const Heart = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 19.5c-4.6-3-7.5-5.9-7.5-9.2A3.8 3.8 0 0 1 12 7.6a3.8 3.8 0 0 1 7.5 2.7c0 3.3-2.9 6.2-7.5 9.2Z" />
  </svg>
);

export const Hand = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M8 11V5.5a1.3 1.3 0 0 1 2.6 0V10" />
    <path d="M10.6 9.5V4.6a1.3 1.3 0 0 1 2.6 0V10" />
    <path d="M13.2 9.8V5.8a1.3 1.3 0 0 1 2.6 0V12" />
    <path d="M15.8 10.5c0-.9 2.2-1.5 2.2.5 0 3-1 4.5-1 6.2 0 2.3-1.9 4.3-4.7 4.3-2.4 0-3.7-.8-5-2.6L5 15.4c-.8-1.2.8-2.6 1.9-1.6L8 15V9" />
  </svg>
);

export const Leaf = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 19c0-7 4.5-12 14-12 0 8-4.5 12-11 12" />
    <path d="M5 19c2-4.5 5-7 9-8.5" />
  </svg>
);

export const Clock = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </svg>
);

export const Phone = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6.5 4h3l1.4 3.6-2 1.4a11 11 0 0 0 5.1 5.1l1.4-2 3.6 1.4v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
    <path d="m4.5 7 7.5 5.5L19.5 7" />
  </svg>
);

export const MapPin = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21c4.5-4.3 6.8-7.6 6.8-10.6A6.8 6.8 0 0 0 5.2 10.4C5.2 13.4 7.5 16.7 12 21Z" />
    <circle cx="12" cy="10.3" r="2.4" />
  </svg>
);

export const Calendar = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="5.5" width="16" height="15" rx="2.4" />
    <path d="M4 9.5h16M8.5 3.5v4M15.5 3.5v4" />
  </svg>
);

export const Globe = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.5 2.4 2.5 14.6 0 17M12 3.5c-2.5 2.4-2.5 14.6 0 17" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const Close = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </svg>
);

export const Plus = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Minus = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
  </svg>
);

const registry = {
  flower: Flower,
  user: User,
  shield: Shield,
  sparkle: Sparkle,
  heart: Heart,
  hand: Hand,
  leaf: Leaf,
  clock: Clock
} as const;

export type RegistryIcon = keyof typeof registry;

export function Icon({ name, ...rest }: { name: RegistryIcon } & IconProps) {
  const Cmp = registry[name];
  return <Cmp {...rest} />;
}
