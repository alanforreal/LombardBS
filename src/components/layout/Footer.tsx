import { Link } from "react-router-dom";
import { Scissors, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent p-2 rounded-full">
                <Scissors className="h-5 w-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold">Lombard Barbershop</h3>
                <p className="text-xs text-primary-foreground/70 tracking-widest uppercase">For Men</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mt-4">
              Proudly Asian-owned, serving the Lombard community with traditional barbering excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-sm hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-sm hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/book" className="text-sm hover:text-accent transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span>Mon - Fri: 9 AM - 9 PM</span>
              </li>
              <li className="pl-6">Sat: 9 AM - 6 PM</li>
              <li className="pl-6">Sun: 10 AM - 5 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>1212 S Garfield St<br />Lombard, IL 60148</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+16308479999" className="hover:text-accent transition-colors">
                  (630) 847-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Lombard Barbershop for Men. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
