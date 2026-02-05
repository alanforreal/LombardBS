import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Phone } from "lucide-react";
import { SITE } from "@/config/site";
import CalendlyEmbed from "@/components/CalendlyEmbed";

type ServiceOption = {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
};

const SERVICES: ServiceOption[] = [
  {
    id: "classic-cut",
    title: "Classic Cut",
    duration: "30–45 min",
    price: "$35",
    description: "Clean, classic haircut tailored to your style.",
  },
  {
    id: "fade-lineup",
    title: "Fade + Lineup",
    duration: "45 min",
    price: "$45",
    description: "Sharp fade with crisp lineup (most popular).",
  },
  {
    id: "cut-beard",
    title: "Cut + Beard",
    duration: "60 min",
    price: "$65",
    description: "Haircut plus beard trim and shape.",
  },
  {
    id: "vip",
    title: "VIP Experience",
    duration: "75 min",
    price: "$85",
    description: "Cut + beard + hot towel detail for a full reset.",
  },
];

export default function Book() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[1].id);
  const [submitted, setSubmitted] = useState(false);

  const selectedService = useMemo(
    () => SERVICES.find((s) => s.id === selectedServiceId),
    [selectedServiceId]
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Book an Appointment
              </h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Choose your service, then lock in a time. Prefer to call? We can book you over the phone.
              </p>
            </div>

            <div className="flex gap-3">
              <Button asChild variant="outline">
                <Link to="/">Back to Home</Link>
              </Button>

              <Button asChild className="gap-2">
                <a href={`tel:${SITE.phoneTel}`}>
                  <Phone className="h-4 w-4" />
                  Call {SITE.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service selection */}
      <section className="pb-8 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold mb-4">1) Select a service</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.map((service) => {
              const active = selectedServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`text-left rounded-lg border transition p-4 hover:shadow-sm ${
                    active ? "border-accent ring-1 ring-accent" : "border-border"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-foreground">{service.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{service.description}</div>
                      <div className="text-sm text-muted-foreground mt-2">
                        {service.duration} • {service.price}
                      </div>
                    </div>
                    {active ? <CheckCircle2 className="h-5 w-5 text-accent" /> : null}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick form + calendar */}
      <section className="py-10 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-serif text-2xl font-bold mb-2">2) Quick details</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  This helps the shop confirm your appointment. (Demo form)
                </p>

                <div className="mb-4 text-sm">
                  <span className="font-semibold">Selected service: </span>
                  <span className="text-muted-foreground">
                    {selectedService?.title} ({selectedService?.duration}, {selectedService?.price})
                  </span>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="(555) 555-5555" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Notes (optional)</Label>
                      <Input id="notes" placeholder="Any preferences? (ex: mid fade, beard trim)" />
                    </div>

                    <Button type="submit" className="w-full">
                      Confirm & Continue to Booking
                    </Button>
                  </form>
                ) : (
                  <div className="rounded-lg border border-border p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent mt-0.5" />
                      <div>
                        <div className="font-semibold text-foreground">Confirmed!</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Next step: choose your time in the calendar. Or call{" "}
                          <a className="text-accent hover:underline" href={`tel:${SITE.phoneTel}`}>
                            {SITE.phoneDisplay}
                          </a>
                          .
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="font-serif text-2xl font-bold mb-2">3) Pick a time</h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Use the calendar below to select an available slot.
                </p>

                <CalendlyEmbed />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
