import { SITE } from "@/config/site";

export default function FAQ() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-serif text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {SITE.faqs.map((item, i) => (
            <details key={i} className="border border-border rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">{item.q}</summary>
              <p className="text-muted-foreground mt-2">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
