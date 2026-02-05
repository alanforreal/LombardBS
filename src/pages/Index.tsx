import Layout from "@/components/layout/Layout";
import Reveal from "@/components/Reveal";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import ReviewHighlights from "@/components/ReviewHighlights";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import StickyCTA from "@/components/StickyCTA";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Star, MapPin, Clock, Phone } from "lucide-react";
import { SITE } from "@/config/site";

const Index = () => {
  return (
    <Layout>
      <div className="pb-20 md:pb-0">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/55 to-primary/25" />
          <div className="container mx-auto px-4 relative">
            <Reveal y={10}>
              <div className="max-w-2xl">
                <p className="text-accent font-medium mb-4 tracking-widest uppercase text-sm">
                  Premium Barbershop • {SITE.city}
                </p>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Clean Cuts. <br />
                  <span className="text-accent">Sharp Fades.</span>
                </h1>

                <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
                  Welcome to {SITE.name}. Book in 30 seconds — or call now for same-day availability.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8"
                  >
                    <Link to="/book">Book Appointment</Link>
                  </Button>
                  <AvailabilityBadge />

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
                  >
                    <a href={`tel:${SITE.phoneTel}`}>Call Now</a>
                  </Button>
                </div>

                            <div className="mt-6 text-sm text-primary-foreground/70">
                              ⭐ {SITE.googleReviewsRating} rating • {SITE.googleReviewsCount}+ reviews • Walk-ins when available
                            </div>
                          </div>
                        </Reveal>
                        <AvailabilityBadge />
                      </div>
                    </section>
            
                    <ReviewHighlights />
            
                    {/* Rating Banner */}
                    <section className="bg-accent py-6">
                      <div className="container mx-auto px-4">
                        <Reveal y={10}>
                          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-accent-foreground">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                              ))}
                              <span className="ml-2 font-bold text-lg">{SITE.googleReviewsRating}</span>
                            </div>
                            <span className="text-sm font-medium">
                              from {SITE.googleReviewsCount} reviews on Google
                            </span>
                          </div>
                        </Reveal>
                      </div>
                    </section>
            
                    {/* Services Preview */}
                    <Reveal>
                      <section className="py-16 lg:py-24 bg-background">
                        <div className="container mx-auto px-4">
                          <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                              Our Services
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                              From classic cuts to clean fades and beard work — we'll get you looking right.
                            </p>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {SITE.services.map((service, index) => (
                              <Reveal key={index} delay={index * 0.06} y={14}>
                                <Card className="group hover:shadow-lg transition-shadow border-border">
                                  <CardContent className="p-6 text-center">
                                    <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                                      <Scissors className="h-8 w-8 text-accent" />
                                    </div>
                                    <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                                      {service.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">{service.description}</p>
                                  </CardContent>
                                </Card>
                              </Reveal>
                            ))}
                          </div>
                          <div className="text-center mt-10">
                            <Button asChild variant="outline" size="lg">
                              <Link to="/services">View All Services & Pricing</Link>
                            </Button>
                          </div>
                        </div>
                      </section>
                    </Reveal>
            
                    <BeforeAfterSlider />
                    <Reveal>
                      <Testimonials />
                    </Reveal>
            
                    {/* About Preview */}
                    <Reveal>
                      <section className="py-16 lg:py-24 bg-card">
                        <div className="container mx-auto px-4">
                          <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                                A Cut Above the Rest
                              </h2>
                              <p className="text-muted-foreground mb-4">
                                At {SITE.name}, we blend classic barbering with modern style. Expect clean work,
                                great service, and a vibe that makes you want to come back.
                              </p>
                              <p className="text-muted-foreground mb-6">
                                Book your time online or call for availability — we'll take care of the rest.
                              </p>
                              <Button asChild>
                                <Link to="/about">Learn More About Us</Link>
                              </Button>
                            </div>
                            <Reveal y={10} delay={0.05}>
                              <div className="relative">
                                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                                  <picture>
                                    <source type="image/avif" srcSet={`https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80&fm=avif`} />
                                    <source type="image/webp" srcSet={`https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80&fm=webp`} />
                                    <img
                                      src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
                                      alt="Barbershop interior"
                                      loading="lazy"
                                      decoding="async"
                                      width={800}
                                      height={600}
                                      className="w-full h-full object-cover"
                                      style={{ willChange: "transform" }}
                                    />
                                  </picture>
                                </div> 
                                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
                                  <p className="font-serif text-3xl font-bold">{SITE.googleReviewsCount}+</p>
                                  <p className="text-sm">Happy Customers</p>
                                </div>
                              </div>
                            </Reveal>
                          </div>
                        </div>
                      </section>
                    </Reveal>
            
                    {/* CTA Section */}
                    <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
                      <div className="container mx-auto px-4 text-center">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                          Ready for Your Next Cut?
                        </h2>
                        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                          Book your appointment today and get fresh in under an hour.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10">
                            <Link to="/book">Book Your Appointment</Link>
                          </Button>
                          <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-10">
                            <a href={`tel:${SITE.phoneTel}`}>Call {SITE.phoneDisplay}</a>
                          </Button>
                        </div>
                      </div>
                    </section>
            
                    <Reveal>
                      <FAQ />
                    </Reveal>
            
                    <Reveal>
                      <section className="py-12 bg-background">
                        <div className="container mx-auto px-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <Reveal delay={0.03} y={12}>
                              <div className="flex flex-col items-center">
                                <div className="bg-accent/10 p-4 rounded-full mb-4">
                                  <MapPin className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="font-semibold mb-2">Location</h3>
                                <p className="text-muted-foreground text-sm">
                                  {SITE.addressLine1}
                                  <br />
                                  {SITE.addressLine2}
                                </p>
                              </div>
                            </Reveal>
                            <Reveal delay={0.09} y={12}>
                              <div className="flex flex-col items-center">
                                <div className="bg-accent/10 p-4 rounded-full mb-4">
                                  <Clock className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="font-semibold mb-2">Hours</h3>
                                <p className="text-muted-foreground text-sm">
                                  {SITE.hoursLine1}
                                  <br />
                                  {SITE.hoursLine2}
                                </p>
                              </div>
                            </Reveal>
                            <Reveal delay={0.15} y={12}>
                              <div className="flex flex-col items-center">
                                <div className="bg-accent/10 p-4 rounded-full mb-4">
                                  <Phone className="h-6 w-6 text-accent" />
                                </div>
                                <h3 className="font-semibold mb-2">Phone</h3>
                                <a href={`tel:${SITE.phoneTel}`} className="text-accent hover:underline">
                                  {SITE.phoneDisplay}
                                </a>
                              </div>
                            </Reveal>
                          </div>
                          <div className="mt-10 rounded-xl overflow-hidden border border-border bg-card shadow-sm">
                            <iframe
                              src={SITE.googleMapsEmbedUrl}

                              className="w-full h-[320px] md:h-[400px]"
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title={`${SITE.name} Location`}
                            />
                          </div>
                        </div>
                      </section>
                    </Reveal>
                  </div>
                  <StickyCTA />
                </Layout>
              );
            };
            
            export default Index;
