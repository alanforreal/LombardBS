/**
 * SITE configuration utilities
 *
 * To create a new site, edit the minimal `SITE_OVERRIDES` object below. The
 * `createSite` helper merges your overrides with sensible defaults and keeps the
 * exported `SITE` object stable for the rest of the app.
 */

export type SiteConfig = {
  name: string;
  city?: string;
  phoneDisplay?: string;
  phoneTel?: string;
  addressLine1?: string;
  addressLine2?: string;
  hoursLine1?: string;
  hoursLine2?: string;
  googleMapsEmbedUrl?: string;
  googleReviewsRating?: string;
  googleReviewsCount?: string;
  availabilityBadge?: string;
  services?: Array<{ title: string; description: string }>
  reviewHighlights?: Array<{ quote: string; name: string }>;
  beforeAfter?: { before: string; after: string };
  testimonials?: Array<{ name: string; text: string }>;
  faqs?: Array<{ q: string; a: string }>;
  aboutImage?: string;
};

// Minimal sensible defaults; keep this small and easy to edit.
export const SITE: SiteConfig = {
  name: "Ironclad Barbers",
  city: "Lombard, IL",
  phoneDisplay: "(630) 555-0123",
  phoneTel: "+16305550123",
  addressLine1: "123 Main St",
  addressLine2: "Lombard, IL 60148",
  hoursLine1: "Mon–Fri: 9 AM – 7 PM",
  hoursLine2: "Sat–Sun: 10 AM – 5 PM",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=123+Main+St+Lombard+IL+60148&output=embed",
  googleReviewsRating: "4.8",
  googleReviewsCount: "455",
  availabilityBadge: "⏱ Same-day spots often available — call to confirm",
  reviewHighlights: [
    { quote: "Best fade in Lombard. Clean every time.", name: "Mike R." },
    { quote: "Booked online and was in/out fast.", name: "Jason T." },
  ],
  services: [
    { title: "Signature Haircut", description: "Classic men's haircut" },
    { title: "Fade / Taper", description: "Clean fades and sharp lineups" },
  ],
  beforeAfter: {
    before: "",
    after: "",
  },
  testimonials: [],
  faqs: [],
};
