import { SITE } from "@/config/site";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function DirectionsButton() {
  if (!SITE.directionsUrl) return null;

  return (
    <Button asChild variant="outline" className="gap-2">
      <a href={SITE.directionsUrl} target="_blank" rel="noreferrer">
        <MapPin className="h-4 w-4" />
        Get Directions
      </a>
    </Button>
  );
}
