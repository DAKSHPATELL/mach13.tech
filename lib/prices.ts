import type { Lang } from "./i18n";

export type PriceItem = {
  label: Record<Lang, string>;
  price: number | null; // EUR; null = "sur devis"
  from?: boolean; // "à partir de"
  detail?: Record<Lang, string>;
  duration?: number; // minutes, used for the reservation estimate
};

export type PriceCategory = {
  id: string;
  title: Record<Lang, string>;
  group: Record<Lang, string>; // universe: Épilation, Onglerie, Soins visage, Modelage, Henné
  items: PriceItem[];
};

const t = (fr: string, en: string): Record<Lang, string> => ({ fr, en });

export const priceCategories: PriceCategory[] = [
  {
    id: "epilation-fil",
    group: t("Épilation", "Waxing & threading"),
    title: t("Épilation au fil", "Threading"),
    items: [
      { label: t("Sourcils", "Eyebrows"), price: 6, duration: 15 },
      { label: t("Lèvres", "Upper lip"), price: 5, duration: 10 },
      { label: t("Menton", "Chin"), price: 5, duration: 10 },
      { label: t("Joues", "Cheeks"), price: 5, duration: 10 },
      { label: t("Front", "Forehead"), price: 5, duration: 10 },
      { label: t("Cou", "Neck"), price: 8, duration: 15 }
    ]
  },
  {
    id: "forfaits-visage",
    group: t("Épilation", "Waxing & threading"),
    title: t("Forfaits épilation visage", "Face threading packages"),
    items: [
      { label: t("Sourcils + Lèvres + Menton + Front", "Eyebrows + Lip + Chin + Forehead"), price: 17, duration: 30 },
      { label: t("Sourcils + Lèvres + Menton + Joues + Cou + Front", "Eyebrows + Lip + Chin + Cheeks + Neck + Forehead"), price: 19, duration: 40 },
      { label: t("Teinture de sourcils", "Eyebrow tint"), price: 8, duration: 15 }
    ]
  },
  {
    id: "epilation-cire",
    group: t("Épilation", "Waxing & threading"),
    title: t("Épilation à la cire", "Waxing"),
    items: [
      { label: t("Sourcils", "Eyebrows"), price: 7, duration: 15 },
      { label: t("Lèvres", "Upper lip"), price: 6, duration: 10 },
      { label: t("Inter-nez", "Between brows"), price: 5, duration: 10 },
      { label: t("Visage complet", "Full face"), price: 20, duration: 30 },
      { label: t("Aisselles", "Underarms"), price: 10, duration: 15 },
      { label: t("Demi-bras", "Half arms"), price: 12, duration: 20 },
      { label: t("Bras entiers", "Full arms"), price: 15, duration: 30 },
      { label: t("Demi-jambes", "Half legs"), price: 15, duration: 25 },
      { label: t("Jambes entières", "Full legs"), price: 23, duration: 40 },
      { label: t("Ventre", "Stomach"), price: 9, duration: 15 },
      { label: t("Dos", "Back"), price: 15, duration: 25 },
      { label: t("Maillot simple", "Basic bikini"), price: 10, duration: 15 },
      { label: t("Maillot brésilien", "Brazilian bikini"), price: 15, duration: 25 },
      { label: t("Maillot intégral", "Full bikini"), price: 25, duration: 35 },
      { label: t("Cuisses", "Thighs"), price: 17, duration: 25 }
    ]
  },
  {
    id: "forfaits-epilation",
    group: t("Épilation", "Waxing & threading"),
    title: t("Forfaits épilation", "Waxing packages"),
    items: [
      { label: t("Aisselle + Maillot simple + Jambes complètes", "Underarms + Basic bikini + Full legs"), price: 33, duration: 60 },
      { label: t("Aisselle + Maillot intégral + Demi-jambes", "Underarms + Full bikini + Half legs"), price: 42, duration: 60 },
      { label: t("Aisselle + Maillot intégral + Jambes entières", "Underarms + Full bikini + Full legs"), price: 49, duration: 75 },
      { label: t("Aisselle + Bras entiers + Maillot intégral + Jambes entières", "Underarms + Full arms + Full bikini + Full legs"), price: 67, duration: 90 }
    ]
  },
  {
    id: "soins-visage",
    group: t("Soins visage", "Facials"),
    title: t("Soins du visage", "Facial treatments"),
    items: [
      {
        label: t("Soin visage simple", "Express facial"),
        price: 22,
        duration: 30,
        detail: t("Nettoyage, Gommage, Masque", "Cleansing, Exfoliation, Mask")
      },
      {
        label: t("Soin visage complet", "Complete facial"),
        price: 35,
        duration: 60,
        detail: t(
          "Nettoyage, Gommage, Vaporisation, Massage, Masque",
          "Cleansing, Exfoliation, Steaming, Massage, Mask"
        )
      }
    ]
  },
  {
    id: "manucure",
    group: t("Onglerie", "Nails"),
    title: t("Manucure", "Manicure"),
    items: [
      { label: t("Pose de vernis avec limage", "Polish with filing"), price: 10, duration: 20 },
      { label: t("Manucure simple sans vernis", "Basic manicure, no polish"), price: 15, duration: 30 },
      {
        label: t("Manucure complète avec vernis", "Complete manicure with polish"),
        price: 18,
        duration: 40,
        detail: t("Cuticules, limage, modelage, gommage", "Cuticles, filing, massage, exfoliation")
      }
    ]
  },
  {
    id: "beaute-pieds",
    group: t("Onglerie", "Nails"),
    title: t("Beauté des pieds", "Pedicure"),
    items: [
      { label: t("Beauté des pieds sans vernis", "Pedicure, no polish"), price: 25, duration: 40 },
      { label: t("Beauté des pieds avec vernis classique", "Pedicure with classic polish"), price: 30, duration: 45 },
      { label: t("Beauté des pieds avec semi-permanent", "Pedicure with gel polish"), price: 45, duration: 60 }
    ]
  },
  {
    id: "semi-permanent",
    group: t("Onglerie", "Nails"),
    title: t("Semi-permanent", "Gel polish"),
    items: [
      { label: t("Dépose", "Removal"), price: 10, duration: 20 },
      { label: t("Vernis couleur", "Colour gel"), price: 22, duration: 40 },
      { label: t("Vernis French", "French gel"), price: 25, duration: 45 }
    ]
  },
  {
    id: "faux-ongles",
    group: t("Onglerie", "Nails"),
    title: t("Faux ongles", "Nail extensions"),
    items: [
      { label: t("Pose de capsule (French / Naturelle)", "Tips (French / Natural)"), price: 25, duration: 60 },
      { label: t("Faux ongles avec vernis", "Extensions with polish"), price: 32, duration: 60 },
      { label: t("Faux ongles avec semi-permanent", "Extensions with gel polish"), price: 45, duration: 75 },
      { label: t("Faux ongles avec French", "Extensions with French"), price: 49, duration: 75 },
      { label: t("Remplissage + Vernis simple", "Refill + Basic polish"), price: 25, duration: 60 },
      { label: t("Remplissage + Semi-permanent", "Refill + Gel polish"), price: 40, duration: 75 }
    ]
  },
  {
    id: "modelage",
    group: t("Modelage", "Massage"),
    title: t("Modelage corporel", "Body massage"),
    items: [
      { label: t("Modelage du dos", "Back massage"), price: 25, duration: 30 },
      { label: t("Modelage du corps", "Full-body massage"), price: 49, duration: 60 },
      { label: t("Modelage de la tête", "Head massage"), price: 25, duration: 30 }
    ]
  },
  {
    id: "henne",
    group: t("Henné", "Henna"),
    title: t("Henné", "Henna"),
    items: [
      {
        label: t("Henné", "Henna"),
        price: 8,
        from: true,
        duration: 30,
        detail: t("Motifs traditionnels et raffinés", "Traditional, refined designs")
      }
    ]
  }
];

export function formatPrice(item: PriceItem, lang: Lang): string {
  if (item.price === null) return lang === "fr" ? "Sur devis" : "On quote";
  const from = item.from ? (lang === "fr" ? "à partir de " : "from ") : "";
  return `${from}${item.price} €`;
}
