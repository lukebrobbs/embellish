export type NavLink = {
  href: string;
  label: string;
};

export type ServiceCategory = {
  name: string;
  description: string;
  items: string[];
};

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export type GalleryItem = {
  title: string;
  category: "colour" | "cut" | "styling" | "bridal";
  image: string;
  alt: string;
  note: string;
};

export const bookingUrl =
  "https://www.fresha.com/a/embellish-studio-chesterfield-338-chatsworth-road-s64qp0zj/booking";

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/weddings", label: "Weddings" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact / Book" },
];

export const business = {
  name: "Embellish Studio",
  strapline: "Elevated hair, strong detail, Chesterfield confidence.",
  description:
    "Embellish Studio is a Chesterfield salon blending polished cuts, lived-in colour, occasion styling, and bridal hair in a calm, editorial-feeling space.",
  addressLines: ["338 Chatsworth Road", "Chesterfield", "S40 2BY"],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=338+Chatsworth+Road+Chesterfield+S40+2BY",
  phone: "01246 111 111",
  email: "hello@embellishstudio.co.uk",
  instagram: "https://www.instagram.com/_embellishstudio_/",
  facebook: "https://www.facebook.com/",
  reviewsSummary: "4.9 rating from 1,884 reviews on Fresha",
  bookingLabel: "Book on Fresha",
  heroStats: [
    { value: "1.8k+", label: "Fresha reviews" },
    { value: "59", label: "bookable services" },
    { value: "4", label: "stylists" },
  ],
  hours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "9:00 - 17:00" },
    { day: "Wednesday", hours: "9:00 - 17:00" },
    { day: "Thursday", hours: "9:00 - 19:00" },
    { day: "Friday", hours: "9:00 - 19:00" },
    { day: "Saturday", hours: "8:00 - 16:00" },
    { day: "Sunday", hours: "Closed" },
  ],
  team: [
    { name: "Dan", role: "Director" },
    { name: "Torie", role: "Senior stylist" },
    { name: "Sarah", role: "Colour and styling" },
    { name: "Daisy", role: "Finishing and occasion hair" },
  ],
};

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Cut and finish",
    description:
      "Sharp silhouettes, wearable texture, and polished finishes that look right in the chair and in real life.",
    items: ["Restyle consultation", "Cut and blow dry", "Fringe refresh"],
  },
  {
    name: "Colour work",
    description:
      "Blondes, dimensional brunettes, glossing, and maintenance plans designed for longevity as much as impact.",
    items: ["Lived-in balayage", "Gloss and tone", "Face-frame refresh"],
  },
  {
    name: "Styling and occasions",
    description:
      "Soft movement, elevated updos, and event styling with a clean editorial finish.",
    items: ["Luxury blow dry", "Event styling", "Hair-up appointments"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "The salon feels premium without losing its warmth. Every appointment feels considered from the consultation to the finish.",
    name: "Chloe M.",
    context: "Regular cut and colour client",
  },
  {
    quote:
      "I booked after seeing their work online and it lived up to the photos. The result was polished, modern, and easy to maintain.",
    name: "Emily R.",
    context: "New Chesterfield client",
  },
  {
    quote:
      "My bridal hair felt effortless but still special. Calm, organised, and genuinely beautiful work on the day.",
    name: "Hannah S.",
    context: "Bridal booking",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    title: "Glossed brunette detail",
    category: "colour",
    image: "/media/gallery-brunette.svg",
    alt: "Editorial placeholder artwork for brunette colour work",
    note: "Built to be replaced with Instagram or shoot imagery later.",
  },
  {
    title: "Bright blonde dimension",
    category: "colour",
    image: "/media/gallery-blonde.svg",
    alt: "Editorial placeholder artwork for blonde dimension",
    note: "Designed for close-up colour results and reel stills.",
  },
  {
    title: "Soft movement blow dry",
    category: "styling",
    image: "/media/gallery-styling.svg",
    alt: "Editorial placeholder artwork for styling work",
    note: "Strong fit for bounce, finish, and mirror-shot content.",
  },
  {
    title: "Precision shape",
    category: "cut",
    image: "/media/gallery-cut.svg",
    alt: "Editorial placeholder artwork for cutting work",
    note: "Ideal for restyle and shape-focused imagery.",
  },
  {
    title: "Bridal morning textures",
    category: "bridal",
    image: "/media/gallery-bridal.svg",
    alt: "Editorial placeholder artwork for bridal styling",
    note: "Prepared for bridal party, veil, and detail photography.",
  },
  {
    title: "Salon atmosphere",
    category: "styling",
    image: "/media/gallery-salon.svg",
    alt: "Editorial placeholder artwork for salon interior imagery",
    note: "Use for space, team, and behind-the-chair reels.",
  },
];

export const bridalFaqs = [
  {
    question: "How far in advance should bridal bookings be made?",
    answer:
      "As early as possible for peak wedding dates. The website positions bridal as consultation-led, so the enquiry form is the best first step.",
  },
  {
    question: "Can the bridal team travel?",
    answer:
      "Yes. The enquiry form captures the getting-ready location so travel and timing can be planned around your day.",
  },
  {
    question: "What should the first enquiry include?",
    answer:
      "Date, venue or location, number of people, the services you think you need, and a little visual direction if you have it.",
  },
];

export const weddingProcess = [
  "Enquire with your date, location, party size, and inspiration.",
  "Receive a reply to confirm availability and start shaping your bridal plan.",
  "Book a trial to refine the look and final timings ahead of the day.",
];
