import { Star } from "lucide-react";
import { SITE } from "@/config/site";

export default function Testimonials() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl font-bold mb-4">What Clients Say</h2>

        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-accent text-accent" />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SITE.testimonials.map((t, i) => (
            <div key={i} className="rounded-lg border border-border p-6 bg-background">
              <p className="text-muted-foreground mb-4">“{t.text}”</p>
              <p className="font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
