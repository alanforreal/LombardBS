import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";

const services = [
  {
    id: "haircut",
    title: "Haircut",
    description: "Classic men's haircut tailored to your personal style. Our skilled barbers will consult with you to achieve the perfect look, whether you prefer a traditional cut or something more modern.",
    duration: "30 min",
    price: "$25",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "beard-trim",
    title: "Beard Trim",
    description: "Expert beard shaping and trimming to keep your facial hair looking sharp and well-groomed. Includes hot towel treatment and beard oil finish.",
    duration: "20 min",
    price: "$15",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "hot-towel-shave",
    title: "Hot Towel Shave",
    description: "The ultimate traditional shaving experience. Relax with hot towels, premium shaving cream, and a precise straight razor shave for the smoothest finish.",
    duration: "45 min",
    price: "$35",
    image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "full-service",
    title: "Full Service Package",
    description: "The complete experience combining our classic haircut with a hot towel shave. Perfect for those who want the full traditional barbershop treatment.",
    duration: "75 min",
    price: "$55",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            From classic cuts to luxurious hot towel shaves, experience traditional barbering at its finest.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden group">
                <div className="aspect-[16/9] overflow-hidden">
                  <picture>
                    <source type="image/avif" srcSet={`${service.image}&fm=avif`} />
                    <source type="image/webp" srcSet={`${service.image}&fm=webp`} />
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={338}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      style={{ willChange: "transform" }}
                    />
                  </picture>
                </div> 
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-serif text-2xl">{service.title}</CardTitle>
                    <span className="text-2xl font-bold text-accent">{service.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link to={`/book?service=${service.id}`}>Book This Service</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Neck Cleanup", price: "$10" },
              { title: "Eyebrow Trim", price: "$8" },
              { title: "Nose/Ear Wax", price: "$12" },
              { title: "Gray Blending", price: "$20" },
            ].map((addon, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg text-center border border-border"
              >
                <Scissors className="h-8 w-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{addon.title}</h3>
                <p className="text-accent font-bold">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">Ready to Look Your Best?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Book your appointment today and experience the Lombard Barbershop difference.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/book">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
