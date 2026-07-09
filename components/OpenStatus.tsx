"use client";

import { useEffect, useState } from "react";
import { openStatus } from "@/lib/content";
import { useLang } from "@/lib/i18n";

export default function OpenStatus({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  const [state, setState] = useState<{ open: boolean } | null>(null);

  useEffect(() => {
    const compute = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours() + now.getMinutes() / 60;
      const [from, to] = openStatus.hoursByDay[day];
      const open = hour >= from && hour < to;
      setState({ open });
    };
    compute();
    const id = setInterval(compute, 60_000);
    return () => clearInterval(id);
  }, []);

  // Avoid hydration mismatch: nothing until we know the client time.
  if (!state) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${
        state.open
          ? "border-emerald/30 bg-emerald/10 text-emerald"
          : "border-line bg-white/70 text-muted"
      } ${className}`}
    >
      <span className={`relative flex h-2 w-2`}>
        {state.open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${state.open ? "bg-emerald" : "bg-muted"}`} />
      </span>
      {state.open ? openStatus.open[lang] : openStatus.closed[lang]}
    </span>
  );
}
