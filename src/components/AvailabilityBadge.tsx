import { SITE } from "@/config/site";

export default function AvailabilityBadge() {
  if (!SITE.availabilityBadge) return null;

  return (
    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground">
      <span>{SITE.availabilityBadge}</span>
    </div>
  );
}
