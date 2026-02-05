import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Award, Heart, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";

const team = [
  {
    name: "Master Barber",
    role: "Owner & Lead Barber",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    experience: "15+ years",
  },
  {
    name: "Senior Barber",
    role: "Senior Stylist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    experience: "10+ years",
  },
  {
    name: "Junior Barber",
    role: "Barber",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    experience: "5+ years",
  },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for perfection in every cut, ensuring you leave looking and feeling your best.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "As a local Asian-owned business, we're proud to serve and be part of the Lombard community.",
  },
  {
    icon: Users,
    title: "Respect",
    description: "Every customer is treated with genuine care and respect, like family.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Proudly serving the Lombard community with traditional barbering excellence.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <picture>
                  <source type="image/avif" srcSet={`https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80&fm=avif`} />
                  <source type="image/webp" srcSet={`https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80&fm=webp`} />
                  <img
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80"
                    alt="Barbershop"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    style={{ willChange: "transform" }}
                  />
                </picture>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium">Asian-Owned Business</p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4">
                Lombard Barbershop for Men was founded with a simple vision: to bring the authentic 
                traditional barbershop experience to our community. As a proud Asian-owned business, 
                we blend cultural values of hard work, respect, and excellence with the timeless art 
                of barbering.
              </p>
              <p className="text-muted-foreground mb-4">
                Located in the heart of Lombard, Illinois, our shop has become a gathering place 
                where men come not just for a haircut, but for an experience. We believe that 
                every man deserves to look his best, and we take pride in making that happen.
              </p>
              <p className="text-muted-foreground">
                From classic cuts to hot towel shaves, our skilled barbers combine traditional 
                techniques with modern styles. Walk in as a customer, leave as part of our family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl font-bold text-center mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our experienced barbers are dedicated to delivering the perfect cut every time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <picture>
                    <source type="image/avif" srcSet={`${member.image}&fm=avif`} />
                    <source type="image/webp" srcSet={`${member.image}&fm=webp`} />
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      style={{ willChange: "transform" }}
                    />
                  </picture>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-serif text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.experience} experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Highlight */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-8 w-8 ${i < 4 ? "fill-accent text-accent" : i < 5 ? "fill-accent/50 text-accent/50" : ""}`}
              />
            ))}
          </div>
          <p className="text-4xl font-serif font-bold mb-2">4.5</p>
          <p className="text-primary-foreground/80 mb-8">from 455 reviews on Google</p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/book">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
