import { Link, useLocation } from "react-router-dom";
import { Scissors, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary/90 border-b border-accent/20">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-accent" />
            <a href={`tel:${SITE.phoneTel}`} className="hover:text-accent transition-colors">
              {SITE.phoneDisplay}
            </a>
          </div>
          <span className="hidden sm:block text-primary-foreground/80">
            {SITE.addressLine1}, {SITE.city}
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-accent p-2 rounded-full group-hover:scale-105 transition-transform">
              <Scissors className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <h1 className="font-serif text-xl font-bold tracking-wide">{SITE.name}</h1>
              <p className="text-xs text-primary-foreground/70 tracking-widest uppercase">For Men</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium transition-colors hover:text-accent ${
                  isActive(link.to) ? "text-accent" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/book">Book Now</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-accent/20 pt-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-colors hover:text-accent ${
                  isActive(link.to) ? "text-accent" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
              <Link to="/book" onClick={() => setMobileMenuOpen(false)}>
                Book Now
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
