import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

/**
 * Footer Component - Premium Automotive Minimalism
 * Design Philosophy: Clean footer with contact info and social links
 * Visual Elements: Social media links, contact info, copyright
 * Typography: Poppins for headings, Inter for body text
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12 md:py-16">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <img
              src="/images/logo.PNG"
              alt="Adrian's Detailing Logo"
              className="h-16 w-auto mb-4"
            />
            <p className="font-body text-sm text-muted-foreground">
              Premium car detailing services for discerning vehicle owners.
            </p>
            <p className="font-body text-xs text-muted-foreground mt-4">
              ABN: 69633638905
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[Poppins] font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-[Poppins] font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="tel:0499951000"
                  className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  0499 951 000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:Adrians.cardetailing@gmail.com"
                  className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Adrians.cardetailing@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="font-body text-sm text-muted-foreground">
                  25 Geaney Street<br />
                  Norman Gardens
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-[Poppins] font-semibold text-foreground mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/AdriansDeatiling"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/adrians.detailing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
            <p className="font-body text-xs text-muted-foreground mt-4">
              Follow us for tips, before/afters, and special offers!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-muted-foreground">
            &copy; {currentYear} Adrian's Detailing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-body text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
