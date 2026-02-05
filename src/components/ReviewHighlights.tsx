import { useEffect, useMemo, useState } from "react";
import { SITE } from "@/config/site";
import { Star } from "lucide-react";

export default function ReviewHighlights() {
  const items = useMemo(() => SITE.reviewHighlights ?? [], []);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!items.length) return;
    const t = setInterval(() => setI((x) => (x + 1) % items.length), 3800);
    return () => clearInterval(t);
  }, [items.length]);

  if (!items.length) return null;

  const item = items[i];

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="rounded-xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {SITE.googleReviewsRating} • {SITE.googleReviewsCount}+ reviews
              </span>
            </div>

            <p className="text-lg md:text-xl font-medium">
              “{item.quote}”
            </p>
            <p className="text-sm text-muted-foreground mt-2">— {item.name}</p>
          </div>

          <div className="flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-2.5 w-2.5 rounded-full ${
                  idx === i ? "bg-accent" : "bg-border"
                }`}
                aria-label={`Review ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
