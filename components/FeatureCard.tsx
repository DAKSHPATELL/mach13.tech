import Image from "next/image";
import { ReactNode } from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
};

export function FeatureCard({ title, description, icon, image }: FeatureCardProps) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-divider bg-white p-6 transition hover:border-steel/60 focus-within:border-steel/60">
      <div className="flex items-center gap-3">
        {icon ? (
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-steel/10 text-steel">
            {icon}
          </span>
        ) : image ? (
          <Image src={image} alt="" width={48} height={48} className="h-12 w-12 rounded-lg" />
        ) : null}
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-foreground/70">{description}</p>
    </div>
  );
}
