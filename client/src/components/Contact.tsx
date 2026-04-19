import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

/**
 * Contact Section - Premium Automotive Minimalism
 * Design Philosophy: Clean form layout with contact info sidebar
 * Visual Elements: Contact form with validation, contact details
 * Typography: Poppins for headings, Inter for form labels and body
 * Interaction: Form submission with validation feedback
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "interior",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        "Thank you! We'll contact you shortly to confirm your appointment."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "interior",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding bg-card/50 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-foreground mb-4">
            Book Your Appointment
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Get in touch with us to schedule your detailing service. We'll work with you to find the perfect time.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <div className="card-hover">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-subheading text-foreground mb-2">Phone</h3>
              <a
                href="tel:0499951000"
                className="font-body text-accent hover:text-accent/80 transition-colors"
              >
                0499 951 000
              </a>
            </div>

            {/* Email */}
            <div className="card-hover">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-subheading text-foreground mb-2">Email</h3>
              <a
                href="mailto:Adrians.cardetailing@gmail.com"
                className="font-body text-accent hover:text-accent/80 transition-colors"
              >
                Adrians.cardetailing@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="card-hover">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-subheading text-foreground mb-2">Location</h3>
              <p className="font-body text-muted-foreground">
                25 Geaney Street<br />
                Norman Gardens
              </p>
              <a
                href="https://www.google.com/maps/search/25+Geaney+Street+Norman+Gardens"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 transition-colors text-sm font-[Poppins] font-semibold mt-3 inline-block"
              >
                View on Maps →
              </a>
            </div>

            {/* Hours */}
            <div className="card-hover">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-subheading text-foreground mb-2">Hours</h3>
              <div className="font-body text-muted-foreground space-y-1 text-sm">
                <p className="font-[Poppins] font-semibold text-foreground">By Appointment Only</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 card-hover"
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="font-[Poppins] font-semibold text-foreground block mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  required
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-[Poppins] font-semibold text-foreground block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="font-[Poppins] font-semibold text-foreground block mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-890"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="font-[Poppins] font-semibold text-foreground block mb-2">
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                >
                  <option value="interior">Interior Detailing</option>
                  <option value="exterior">Exterior Detailing</option>
                  <option value="polish">Cut & Polish</option>
                  <option value="package">Full Package</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="font-[Poppins] font-semibold text-foreground block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your vehicle and any specific concerns..."
                  rows={4}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Schedule Appointment"}
              </button>

              <p className="font-body text-xs text-muted-foreground text-center">
                We'll get back to you within 24 hours to confirm your appointment.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
