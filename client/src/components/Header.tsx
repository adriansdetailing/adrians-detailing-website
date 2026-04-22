import { useState } from "react";
import { Menu, X } from "lucide-react";

/**
 * Header Component - Premium Automotive Minimalism
 * Design Philosophy: Clean navigation with warm gold accents, dark background
 * Typography: Poppins Bold for logo, Inter Regular for nav items
 * Interaction: Smooth transitions on hover, responsive mobile menu
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.PNG"
            alt="Adrian's Detailing Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("services")}
            className="font-[Inter] text-foreground hover:text-accent transition-colors duration-300"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="font-[Inter] text-foreground hover:text-accent transition-colors duration-300"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="font-[Inter] text-foreground hover:text-accent transition-colors duration-300"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("booking")}
            className="btn-primary"
          >
            Book Now
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground hover:text-accent transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card border-b border-border">
          <div className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("services")}
              className="font-[Inter] text-foreground hover:text-accent transition-colors text-left py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="font-[Inter] text-foreground hover:text-accent transition-colors text-left py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="font-[Inter] text-foreground hover:text-accent transition-colors text-left py-2"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary w-full text-center"
            >
              Book Now
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
