import type { Lang } from "./i18n";

type L = Record<Lang, string>;
const t = (fr: string, en: string): L => ({ fr, en });

export const site = {
  name: t("Shree", "Shree"),
  sub: t("Beauté Indienne", "Beauté Indienne"),
  fullName: t("Shree Beauté Indienne", "Shree Beauté Indienne"),
  tagline: t(
    "Institut de beauté dédié à votre bien-être et à votre beauté au quotidien.",
    "A beauty institute devoted to your everyday well-being and beauty."
  ),
  phone: "01 88 48 07 12",
  phoneHref: "+33188480712",
  email: "contact@shreebeaute.fr",
  address: "8 rue Raoul Berton, 93170 Bagnolet",
  mapsQuery: "8 rue Raoul Berton, 93170 Bagnolet"
};

export const nav = {
  home: { href: "/", label: t("Accueil", "Home") },
  about: { href: "/a-propos", label: t("À propos", "About") },
  services: { href: "/prestations", label: t("Prestations", "Services") },
  prices: { href: "/tarifs", label: t("Tarifs", "Prices") },
  gallery: { href: "/galerie", label: t("Galerie", "Gallery") },
  contact: { href: "/contact", label: t("Contact", "Contact") }
};

export const navOrder = [nav.home, nav.about, nav.services, nav.prices, nav.gallery, nav.contact];

export const cta = {
  book: t("Prendre RDV", "Book now"),
  bookLong: t("Prendre rendez-vous", "Book an appointment"),
  bookNow: t("Réserver maintenant", "Book now"),
  bookOnline: t("Réserver en ligne", "Book online"),
  seePrices: t("Voir les tarifs", "See prices"),
  call: t("Appeler le salon", "Call the salon")
};

export const hours = {
  title: t("Horaires", "Opening hours"),
  weekdays: t("Lundi – Samedi", "Monday – Saturday"),
  weekdaysTime: "10h00 – 19h00",
  sunday: t("Dimanche", "Sunday"),
  closed: t("Fermé", "Closed")
};

export type IconName = "flower" | "user" | "shield" | "sparkle" | "heart" | "hand" | "leaf" | "clock";

export const home = {
  eyebrow: t("Accueil", "Home"),
  heroTitle1: t("Révélez votre beauté,", "Reveal your beauty,"),
  heroTitle2: t("prenez soin de vous.", "take care of yourself."),
  heroText: t(
    "Un institut chaleureux dédié à votre bien-être. Des soins sur-mesure pour sublimer votre beauté au quotidien.",
    "A warm institute dedicated to your well-being. Bespoke treatments to enhance your everyday beauty."
  ),
  badges: [
    { icon: "flower" as IconName, label: t("Produits de qualité", "Quality products") },
    { icon: "user" as IconName, label: t("Équipe professionnelle", "Professional team") },
    { icon: "shield" as IconName, label: t("Hygiène garantie", "Guaranteed hygiene") }
  ],
  cardTitle: t("Soin signature", "Signature treatment"),
  cardText: t(
    "Un accueil doux et une ambiance soignée dès votre entrée.",
    "A gentle welcome and a refined atmosphere from the moment you arrive."
  ),
  servicesEyebrow: t("Nos prestations", "Our services"),
  servicesTitle: t("Des soins pour sublimer votre beauté", "Treatments to enhance your beauty"),
  aboutEyebrow: t("À propos de nous", "About us"),
  aboutTitle: t("Votre beauté, notre passion", "Your beauty, our passion"),
  aboutText1: t(
    "Chez Shree Beauté Indienne, nous mettons notre savoir-faire et notre passion à votre service dans un cadre chaleureux et professionnel.",
    "At Shree Beauté Indienne, we put our expertise and passion at your service in a warm, professional setting."
  ),
  aboutText2: t(
    "Notre équipe est à l'écoute de vos besoins pour vous offrir des prestations de qualité et vous faire vivre un moment unique.",
    "Our team listens to your needs to offer quality treatments and give you a truly unique moment."
  ),
  ctaTitle: t("Prenez soin de vous dès aujourd'hui", "Take care of yourself today"),
  ctaText: t(
    "Réservez votre créneau et laissez-nous révéler votre beauté.",
    "Book your slot and let us reveal your beauty."
  )
};

export const engagements = [
  {
    icon: "shield" as IconName,
    title: t("Hygiène et sécurité", "Hygiene & safety"),
    text: t(
      "Postes propres, matériel désinfecté et protocole rigoureux à chaque visite.",
      "Clean stations, disinfected equipment and a rigorous protocol at every visit."
    )
  },
  {
    icon: "user" as IconName,
    title: t("Équipe qualifiée", "Qualified team"),
    text: t(
      "Des professionnelles à l'écoute pour des conseils adaptés à chaque cliente.",
      "Attentive professionals offering advice tailored to every client."
    )
  },
  {
    icon: "flower" as IconName,
    title: t("Produits de qualité", "Quality products"),
    text: t(
      "Textures, finitions et soins choisis pour la beauté et le confort.",
      "Textures, finishes and treatments chosen for beauty and comfort."
    )
  }
];

export type Service = {
  id: string;
  image: string;
  icon: IconName;
  title: L;
  text: L;
  priceHref: string;
};

export const services: Service[] = [
  {
    id: "epilation",
    image: "/epilation.png",
    icon: "leaf",
    title: t("Épilation", "Waxing & threading"),
    text: t(
      "Au fil ou à la cire pour un résultat net, doux et soigné.",
      "Threading or waxing for a clean, smooth and neat result."
    ),
    priceHref: "/tarifs#epilation-fil"
  },
  {
    id: "onglerie",
    image: "/onglerie.png",
    icon: "hand",
    title: t("Onglerie", "Nail care"),
    text: t(
      "Beauté des mains et des pieds avec une finition élégante.",
      "Hand and foot care with an elegant finish."
    ),
    priceHref: "/tarifs#manucure"
  },
  {
    id: "soin-visage",
    image: "/soin-visage.png",
    icon: "sparkle",
    title: t("Soins visage", "Facials"),
    text: t(
      "Nettoyage, hydratation, éclat et protocoles adaptés à votre peau.",
      "Cleansing, hydration, radiance and protocols adapted to your skin."
    ),
    priceHref: "/tarifs#soins-visage"
  },
  {
    id: "modelage",
    image: "/modelage.png",
    icon: "heart",
    title: t("Modelage", "Massage"),
    text: t(
      "Détente, relâchement musculaire et bien-être du corps.",
      "Relaxation, muscle release and full-body well-being."
    ),
    priceHref: "/tarifs#modelage"
  },
  {
    id: "henne",
    image: "/henne.png",
    icon: "flower",
    title: t("Henné", "Henna"),
    text: t(
      "Motifs traditionnels et détails raffinés pour vos événements.",
      "Traditional patterns and refined details for your events."
    ),
    priceHref: "/tarifs#henne"
  }
];

export const aboutPage = {
  eyebrow: t("À propos", "About"),
  title: t("Qui sommes-nous", "Who we are"),
  intro: t(
    "Shree Beauté Indienne accueille ses clientes dans une ambiance douce, féminine et rassurante, avec des prestations réalisées avec soin.",
    "Shree Beauté Indienne welcomes its clients in a soft, feminine and reassuring atmosphere, with treatments carried out with care."
  ),
  passionTitle: t("Votre beauté, notre passion", "Your beauty, our passion"),
  passionText: t(
    "Un institut pensé pour le bien-être, l'écoute et la qualité des gestes dans un cadre raffiné.",
    "An institute designed for well-being, attentiveness and refined, quality care."
  ),
  historyEyebrow: t("Notre histoire", "Our story"),
  historyTitle: t(
    "Une expérience simple, chaleureuse et professionnelle",
    "A simple, warm and professional experience"
  ),
  historyText1: t(
    "Chez Shree Beauté Indienne, nous mettons notre savoir-faire à votre service pour vous offrir un vrai moment de détente et de mise en valeur.",
    "At Shree Beauté Indienne, we put our expertise at your service to offer you a real moment of relaxation and enhancement."
  ),
  historyText2: t(
    "Notre approche repose sur l'écoute, l'hygiène, la douceur et des prestations adaptées à chaque besoin, que ce soit pour un soin rapide ou un rituel plus complet.",
    "Our approach is built on listening, hygiene, gentleness and treatments tailored to every need — whether a quick touch-up or a fuller ritual."
  ),
  historyText3: t(
    "L'objectif est simple : vous accueillir dans de bonnes conditions et vous proposer un service féminin, rassurant et soigné du début à la fin.",
    "The goal is simple: to welcome you in the best conditions and offer a feminine, reassuring and polished service from start to finish."
  ),
  engagementsEyebrow: t("Nos engagements", "Our commitments"),
  engagementsTitle: t("Ce qui fait la différence au salon", "What makes the difference at the salon")
};

export const servicesPage = {
  eyebrow: t("Prestations", "Services"),
  title: t("Nos univers de beauté", "Our worlds of beauty"),
  intro: t(
    "Chaque univers a son propre espace, avec image, description et extraits de tarifs pour une vision claire et sereine.",
    "Each world has its own space, with an image, a description and price highlights for a clear, calm overview."
  ),
  chooseEyebrow: t("Nos univers", "Our worlds"),
  chooseTitle: t("Choisissez votre prestation", "Choose your treatment"),
  fromLabel: t("À partir de", "From")
};

export const pricesPage = {
  eyebrow: t("Tarifs", "Prices"),
  title: t("Tous nos tarifs", "All our prices"),
  intro: t(
    "Retrouvez toutes les prestations et leurs prix dans une présentation simple et directe. Paiement au salon.",
    "Find all treatments and their prices in a simple, direct layout. Payment at the salon."
  ),
  note: t("Tarifs indicatifs — paiement au salon.", "Indicative prices — payment at the salon.")
};

export const galleryPage = {
  eyebrow: t("Galerie", "Gallery"),
  title: t("Espaces et instants beauté", "Spaces and beauty moments"),
  intro: t(
    "Un aperçu de l'ambiance du salon, des soins et des finitions. De vraies photos viendront enrichir cette galerie.",
    "A glimpse of the salon's atmosphere, treatments and finishes. Real photos will enrich this gallery soon."
  ),
  items: [
    {
      image: "/soin-visage.png",
      title: t("Soin lumineux", "Radiant care"),
      text: t("Ambiance douce, détails floraux et finitions soyeuses.", "Soft mood, floral details and silky finishes.")
    },
    {
      image: "/onglerie.png",
      title: t("Rituel mains", "Hand ritual"),
      text: t("Des gestes précis pour une manucure nette et féminine.", "Precise gestures for a clean, feminine manicure.")
    },
    {
      image: "/modelage.png",
      title: t("Moment détente", "Relaxing moment"),
      text: t("Un espace calme pour vous recentrer et prendre soin de vous.", "A calm space to recentre and care for yourself.")
    },
    {
      image: "/henne.png",
      title: t("Henné élégance", "Henna elegance"),
      text: t("Motifs fins et traditionnels pour sublimer vos occasions.", "Fine, traditional patterns to elevate your occasions.")
    },
    {
      image: "/epilation.png",
      title: t("Peau nette", "Smooth skin"),
      text: t("Épilation soignée pour une peau douce et impeccable.", "Careful waxing for soft, flawless skin.")
    },
    {
      image: "/banner.png",
      title: t("Accueil signature", "Signature welcome"),
      text: t("Une entrée soignée et une atmosphère apaisante.", "A refined entrance and a soothing atmosphere.")
    }
  ]
};

export const contactPage = {
  eyebrow: t("Contact", "Contact"),
  title: t("Venir ou nous joindre facilement", "Visit us or reach us easily"),
  intro: t(
    "Adresse, téléphone, horaires et réservation regroupés sur une seule page.",
    "Address, phone, opening hours and booking gathered on a single page."
  ),
  coordsEyebrow: t("Coordonnées", "Details"),
  addressLabel: t("Adresse", "Address"),
  phoneLabel: t("Téléphone", "Phone"),
  hoursLabel: t("Horaires", "Hours"),
  sundayLabel: t("Dimanche", "Sunday"),
  actionEyebrow: t("Réservation", "Booking"),
  actionTitle: t("Passez à l'action", "Take the next step"),
  callCardTitle: t("Appeler le salon", "Call the salon"),
  callCardText: t(
    "Pour prendre rendez-vous rapidement ou demander un tarif.",
    "To book quickly or ask about a price."
  ),
  bookCardTitle: t("Réserver en ligne", "Book online"),
  bookCardText: t(
    "Choisissez vos prestations, la date et l'heure.",
    "Choose your treatments, date and time."
  )
};

export const reservationPage = {
  eyebrow: t("Nos prestations", "Our services"),
  title: t("Réservez en ligne", "Book online"),
  intro: t(
    "Ajoutez vos prestations au panier puis réservez en un clic. Tarifs fermes, paiement au salon.",
    "Add your treatments to the cart, then book in one click. Fixed prices, payment at the salon."
  ),
  add: t("Ajouter", "Add"),
  added: t("Ajouté", "Added"),
  remove: t("Retirer", "Remove"),
  cartEyebrow: t("Panier réservation", "Booking cart"),
  cartTitle: t("Votre sélection", "Your selection"),
  empty: t("Aucune prestation sélectionnée pour le moment.", "No treatment selected yet."),
  durationLabel: t("Durée estimée", "Estimated duration"),
  totalLabel: t("Total estimé", "Estimated total"),
  onQuote: t("Sur devis", "On quote"),
  form: {
    firstName: t("Prénom", "First name"),
    lastName: t("Nom", "Last name"),
    phone: t("Numéro de téléphone", "Phone number"),
    email: t("Adresse mail", "Email address"),
    address: t("Adresse", "Address"),
    date: t("Date", "Date"),
    time: t("Heure", "Time"),
    timePlaceholder: t("Choisir une heure", "Choose a time"),
    notes: t("Informations complémentaires", "Additional information"),
    submit: t("Confirmer la demande de réservation", "Confirm booking request"),
    sending: t("Envoi en cours…", "Sending…"),
    errorMsg: t(
      "Une erreur est survenue. Merci de réessayer ou de nous appeler.",
      "Something went wrong. Please try again or call us."
    )
  },
  notes: [
    t("Merci de vérifier vos coordonnées avant validation.", "Please check your details before confirming."),
    t("Créneaux proposés du lundi au samedi.", "Slots available Monday to Saturday."),
    t("Confirmation manuelle par le salon après réception.", "Manual confirmation by the salon after receipt.")
  ],
  successTitle: t("Demande envoyée", "Request sent"),
  successText: t(
    "Merci ! Votre demande de réservation a bien été enregistrée. Le salon vous recontactera pour confirmer votre créneau.",
    "Thank you! Your booking request has been recorded. The salon will contact you to confirm your slot."
  ),
  successAgain: t("Nouvelle réservation", "New booking"),
  minLabel: t("min", "min")
};

export const timeSlots = [
  "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30"
];

export const henneChapter = {
  eyebrow: t("Notre signature", "Our signature"),
  title: t("L'art du henné", "The art of henna"),
  quote: t(
    "Un art transmis, tracé à la main.",
    "An art passed down, drawn by hand."
  ),
  text1: t(
    "Le henné est le cœur indien de la maison. Chaque motif est dessiné à la main, au fil d'un geste patient et précis.",
    "Henna is the Indian heart of the house. Every pattern is drawn by hand, through a patient and precise gesture."
  ),
  text2: t(
    "Mariages, fêtes ou simple envie de beauté : nous traçons pour vous des motifs traditionnels et raffinés.",
    "Weddings, celebrations or simply a wish for beauty: we draw traditional, refined patterns just for you."
  ),
  cta: t("Réserver un henné", "Book a henna")
};

export const marqueeWords = {
  fr: ["Épilation au fil", "Onglerie", "Soins du visage", "Modelage", "Henné", "Beauté Indienne"],
  en: ["Threading", "Nail care", "Facials", "Massage", "Henna", "Indian beauty"]
};

export type Testimonial = { name: string; text: L; city: L };

export const testimonials: Testimonial[] = [
  {
    name: "Amélie R.",
    city: t("Bagnolet", "Bagnolet"),
    text: t(
      "Un accueil chaleureux et un henné magnifique pour mon mariage. Un vrai moment d'exception.",
      "A warm welcome and gorgeous henna for my wedding. A truly exceptional moment."
    )
  },
  {
    name: "Sarah K.",
    city: t("Paris", "Paris"),
    text: t(
      "L'épilation au fil est d'une précision incroyable. Je ne vais plus ailleurs.",
      "The threading is incredibly precise. I won't go anywhere else now."
    )
  },
  {
    name: "Léa M.",
    city: t("Montreuil", "Montreuil"),
    text: t(
      "Institut raffiné, équipe à l'écoute, résultat parfait. Le soin visage est un pur moment de détente.",
      "A refined institute, an attentive team, a perfect result. The facial is pure relaxation."
    )
  }
];

export const openStatus = {
  open: t("Ouvert maintenant", "Open now"),
  closed: t("Fermé", "Closed"),
  opensMon: t("Ouvre lundi à 10h", "Opens Monday at 10am"),
  opensSoon: t("Ouvre à 10h", "Opens at 10am"),
  // opening hours: Mon–Sat 10:00–19:00 (day 0 = Sunday)
  openDays: [1, 2, 3, 4, 5, 6],
  openFrom: 10,
  openTo: 19
};

export const instagram = {
  eyebrow: t("Instagram", "Instagram"),
  title: t("Suivez-nous", "Follow us"),
  handle: "@shree.beaute.indienne",
  url: "https://www.instagram.com/",
  cta: t("Voir le profil", "View profile"),
  images: ["/henne.png", "/onglerie.png", "/soin-visage.png", "/epilation.png", "/banner.png", "/modelage.png"]
};

export const team = {
  eyebrow: t("L'équipe", "The team"),
  title: t("Des mains expertes", "Expert hands"),
  intro: t(
    "Une équipe de praticiennes passionnées, formées à chaque geste et à l'écoute de vos envies.",
    "A team of passionate practitioners, trained in every gesture and attentive to your wishes."
  ),
  members: [
    { icon: "flower" as IconName, role: t("Fondatrice & experte henné", "Founder & henna expert") },
    { icon: "leaf" as IconName, role: t("Spécialiste épilation au fil", "Threading specialist") },
    { icon: "hand" as IconName, role: t("Praticienne onglerie", "Nail technician") },
    { icon: "sparkle" as IconName, role: t("Esthéticienne soins visage", "Facial esthetician") }
  ]
};

export const faq = {
  eyebrow: t("Questions fréquentes", "FAQ"),
  title: t("Bon à savoir", "Good to know"),
  items: [
    {
      q: t("Faut-il prendre rendez-vous ?", "Do I need an appointment?"),
      a: t(
        "C'est conseillé pour garantir votre créneau, mais nous accueillons aussi sans rendez-vous selon les disponibilités.",
        "It's recommended to secure your slot, but we also welcome walk-ins subject to availability."
      )
    },
    {
      q: t("Comment régler ma prestation ?", "How do I pay?"),
      a: t(
        "Le paiement se fait directement au salon, en espèces ou par carte. La réservation en ligne ne demande aucun prépaiement.",
        "Payment is made at the salon, by cash or card. Online booking requires no prepayment."
      )
    },
    {
      q: t("Proposez-vous le henné pour les mariages ?", "Do you offer henna for weddings?"),
      a: t(
        "Oui. Nous réalisons des motifs traditionnels et sur-mesure pour les mariages et événements. Réservez à l'avance pour les grandes occasions.",
        "Yes. We create traditional and bespoke designs for weddings and events. Book ahead for special occasions."
      )
    },
    {
      q: t("Vos protocoles d'hygiène ?", "What about hygiene?"),
      a: t(
        "Postes nettoyés entre chaque cliente, matériel désinfecté et usage unique lorsque nécessaire. Votre sécurité est notre priorité.",
        "Stations cleaned between clients, disinfected tools and single-use items where needed. Your safety comes first."
      )
    },
    {
      q: t("Où êtes-vous situées ?", "Where are you located?"),
      a: t(
        "Au 8 rue Raoul Berton, 93170 Bagnolet — aux portes de Paris, facilement accessible en métro et en bus.",
        "At 8 rue Raoul Berton, 93170 Bagnolet — right at the gates of Paris, easily reached by metro and bus."
      )
    }
  ]
};

export const footer = {
  quickLinks: t("Liens rapides", "Quick links"),
  rights: t(
    "© 2026 Shree Beauté Indienne — Tous droits réservés.",
    "© 2026 Shree Beauté Indienne — All rights reserved."
  )
};
