import { SITE } from "@/config/site";

export default function BeforeAfterSlider() {
  const before = SITE.beforeAfter?.before;
  const after = SITE.beforeAfter?.after;
  if (!before || !after) return null;

  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Before → After</h2>
          <p className="text-muted-foreground mt-2">Side-by-side comparison.</p>
        </div>

        <div className="mx-auto max-w-4xl rounded-xl overflow-hidden border border-border bg-background">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <figure className="relative aspect-[16/9] overflow-hidden">
              <img
                src={before}
                alt="Before haircut"
                loading="lazy"
                decoding="async"
                width={800}
                height={450}
                className="w-full h-full object-cover transition-transform duration-300"
                style={{ willChange: "transform" }}
              />
              <figcaption className="absolute left-4 bottom-4 bg-background/60 backdrop-blur-sm px-3 py-1 rounded text-sm font-medium">Before</figcaption>
            </figure>

            <figure className="relative aspect-[16/9] overflow-hidden">
              <img
                src={after}
                alt="After haircut"
                loading="lazy"
                decoding="async"
                width={800}
                height={450}
                className="w-full h-full object-cover transition-transform duration-300"
                style={{ willChange: "transform" }}
              />
              <figcaption className="absolute right-4 bottom-4 bg-background/60 backdrop-blur-sm px-3 py-1 rounded text-sm font-medium">After</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
