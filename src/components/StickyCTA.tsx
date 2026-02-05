import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SITE } from "@/config/site";
import { MapPin, Phone } from "lucide-react";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="container mx-auto px-3 py-3">
        <div className="grid grid-cols-3 gap-2">
          <Button asChild className="w-full">
            <Link to="/book">Book</Link>
          </Button>

          <Button asChild variant="outline" className="w-full">
            <a href={`tel:${SITE.phoneTel}`}>
              <Phone className="h-4 w-4 mr-2" />
              Call
            </a>
          </Button>

          <Button asChild variant="outline" className="w-full">
            <a href={SITE.directionsUrl} target="_blank" rel="noreferrer">
              <MapPin className="h-4 w-4 mr-2" />
              Directions
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
