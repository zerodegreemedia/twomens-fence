import { Link, useLocation } from "react-router-dom";
import { Calendar } from "lucide-react";

export function SetmoreBooking() {
  const location = useLocation();
  const hidden = ["/thank-you", "/book"].includes(location.pathname);

  if (hidden) return null;

  return (
    <Link
      to="/book"
      className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 flex items-center gap-2 bg-action hover:bg-action-glow text-foreground font-semibold px-5 py-3 rounded-full shadow-lg shadow-action/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-action/40"
      aria-label="Schedule an appointment"
    >
      <Calendar size={20} />
      <span className="hidden sm:inline">Book Online</span>
    </Link>
  );
}
