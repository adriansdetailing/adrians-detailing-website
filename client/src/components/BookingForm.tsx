import { useState } from "react";
import { Calendar, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

/**
 * Interactive Booking Form - Premium Automotive Minimalism
 * Design Philosophy: Clean, organized form with dynamic pricing updates
 * Features: Package selection, car size, add-ons, date picker, customer details
 * Email Integration: Uses Formspree to send booking details to Adrians.cardetailing@gmail.com
 */

const PACKAGES = {
  interior: { name: "Interior Only", small: 180, large: 230 },
  exterior: { name: "Exterior Only", small: 150, large: 200 },
  maintenance: { name: "Maintenance Detail", small: 320, large: 420 },
  full: { name: "Full Detail", small: 520, large: 620 },
};

const EXTRAS = [
  { id: "polish", name: "Cut & Polish", price: 250 },
  { id: "carpet", name: "Carpet Deep Clean", price: 80 },
  { id: "fragrance", name: "Fragrance Bomb", price: 30 },
  { id: "roof", name: "Roof Lining Deep Clean", price: 80 },
  { id: "stain", name: "Deep Stain Removal", price: 60 },
  { id: "engine", name: "Engine Bay Detail", price: 80 },
  { id: "leather", name: "Leather Conditioning", price: 60 },
  { id: "pet", name: "Pet Hair Removal", price: 60 },
  { id: "jamb", name: "Door Jamb Detail", price: 30 },
];

export default function BookingForm() {
  const [selectedPackage, setSelectedPackage] = useState<string>("maintenance");
  const [carSize, setCarSize] = useState<"small" | "large">("small");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [vehicle, setVehicle] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate total price
  const getPackagePrice = () => {
    const pkg = PACKAGES[selectedPackage as keyof typeof PACKAGES];
    return carSize === "small" ? pkg.small : pkg.large;
  };

  const getExtrasTotal = () => {
    return selectedExtras.reduce((total, extraId) => {
      const extra = EXTRAS.find((e) => e.id === extraId);
      return total + (extra?.price || 0);
    }, 0);
  };

  const totalPrice = getPackagePrice() + getExtrasTotal();

  // Handle extra selection
  const toggleExtra = (extraId: string) => {
    setSelectedExtras((prev) =>
      prev.includes(extraId)
        ? prev.filter((id) => id !== extraId)
        : [...prev, extraId]
    );
  };

  // Handle form submission with Formspree
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    if (!preferredDate) {
      toast.error("Please select a preferred date");
      return;
    }

    setIsSubmitting(true);

    try {
      const pkg = PACKAGES[selectedPackage as keyof typeof PACKAGES];
      const selectedExtrasNames = selectedExtras
        .map((id) => {
          const extra = EXTRAS.find((e) => e.id === id);
          return `${extra?.name} ($${extra?.price})`;
        })
        .join("\n");

      // Prepare form data for Formspree
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("vehicle", vehicle || "Not specified");
      formData.append("package", `${pkg.name} (${carSize === "small" ? "Small" : "Large"} Car)`);
      formData.append("package_price", `$${getPackagePrice()}`);
      formData.append("extras", selectedExtrasNames || "None selected");
      formData.append("extras_total", `$${getExtrasTotal()}`);
      formData.append("total_price", `$${totalPrice}`);
      formData.append("preferred_date", preferredDate);
      formData.append("notes", notes || "None");
      formData.append("message", `
BOOKING REQUEST FROM ADRIAN'S DETAILING WEBSITE

CUSTOMER DETAILS:
Name: ${name}
Phone: ${phone}
Email: ${email}
Vehicle: ${vehicle || "Not specified"}

SELECTED PACKAGE:
${pkg.name} (${carSize === "small" ? "Small" : "Large"} Car)
Price: $${getPackagePrice()}

ADD-ONS:
${selectedExtrasNames || "None selected"}
Total Add-ons: $${getExtrasTotal()}

PREFERRED DATE: ${preferredDate}

ADDITIONAL NOTES:
${notes || "None"}

---
TOTAL PRICE: $${totalPrice}

This is a booking request. Adrian will confirm the appointment via phone or email.
      `);

      // Submit to Formspree with proper headers
      const response = await fetch("https://formspree.io/f/mykljpvk", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formData,
      });

      // Formspree returns 200 OK on success
      if (response.ok) {
        toast.success("Booking request sent! We'll be in touch shortly.");
        
        // Reset form
        setName("");
        setPhone("");
        setEmail("");
        setVehicle("");
        setNotes("");
        setPreferredDate("");
        setSelectedExtras([]);
        setSelectedPackage("maintenance");
        setCarSize("small");
      } else {
        toast.error("Failed to send booking request. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send booking request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10 max-w-3xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-display text-foreground mb-4">Book Your Detail</h2>
          <p className="font-body text-muted-foreground">
            Select your package, add any extras, and request your preferred appointment date. Adrian will confirm via phone or email.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Package Selection */}
          <div>
            <h3 className="font-[Poppins] font-semibold text-foreground mb-4">
              1. Select Your Package
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(PACKAGES).map(([key, pkg]) => (
                <label
                  key={key}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedPackage === key
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="package"
                    value={key}
                    checked={selectedPackage === key}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="mr-3"
                  />
                  <span className="font-[Poppins] font-semibold text-foreground">
                    {pkg.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Car Size Selection */}
          <div>
            <h3 className="font-[Poppins] font-semibold text-foreground mb-4">
              2. Select Car Size
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {["small", "large"].map((size) => (
                <label
                  key={size}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    carSize === size
                      ? "border-accent bg-accent/10"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="carSize"
                    value={size}
                    checked={carSize === size}
                    onChange={(e) =>
                      setCarSize(e.target.value as "small" | "large")
                    }
                    className="mr-3"
                  />
                  <span className="font-[Poppins] font-semibold text-foreground">
                    {size === "small" ? "Small Car" : "Large Car"}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Extras Selection */}
          <div>
            <h3 className="font-[Poppins] font-semibold text-foreground mb-4">
              3. Add Extras (Optional)
            </h3>
            <div className="space-y-3">
              {EXTRAS.map((extra) => (
                <label
                  key={extra.id}
                  className="flex items-center p-3 rounded-lg border border-border hover:border-accent/50 cursor-pointer transition-all"
                >
                  <Checkbox
                    checked={selectedExtras.includes(extra.id)}
                    onCheckedChange={() => toggleExtra(extra.id)}
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <span className="font-[Poppins] font-semibold text-foreground">
                      {extra.name}
                    </span>
                  </div>
                  <span className="font-[Poppins] font-bold text-accent">
                    ${extra.price}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Summary */}
          <div className="bg-card border-2 border-accent/30 rounded-lg p-6">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center">
                <span className="font-body text-muted-foreground">
                  Package:
                </span>
                <span className="font-[Poppins] font-semibold text-foreground">
                  ${getPackagePrice()}
                </span>
              </div>
              {selectedExtras.length > 0 && (
                <div className="flex justify-between items-center">
                  <span className="font-body text-muted-foreground">
                    Add-ons:
                  </span>
                  <span className="font-[Poppins] font-semibold text-foreground">
                    ${getExtrasTotal()}
                  </span>
                </div>
              )}
            </div>
            <div className="border-t border-border pt-4 flex justify-between items-center">
              <span className="font-[Poppins] font-bold text-foreground text-lg">
                Total:
              </span>
              <span className="font-[Poppins] font-bold text-accent text-2xl">
                ${totalPrice}
              </span>
            </div>
          </div>

          {/* Google Calendar */}
          <div>
            <h3 className="font-[Poppins] font-semibold text-foreground mb-2">
              Check Availability
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-4">
              Check available dates below before selecting your preferred booking date.
            </p>
            <div className="border border-border rounded-lg overflow-hidden">
              <iframe
                src="https://calendar.google.com/calendar/u/0/embed?src=adrians.cardetailing@gmail.com&ctz=Australia/Brisbane"
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Preferred Date */}
          <div>
            <h3 className="font-[Poppins] font-semibold text-foreground mb-4">
              4. Preferred Date
            </h3>
            <input
              type="date"
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Customer Details */}
          <div>
            <h3 className="font-[Poppins] font-semibold text-foreground mb-4">
              5. Your Details
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block font-[Poppins] font-semibold text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block font-[Poppins] font-semibold text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0499 951 000"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block font-[Poppins] font-semibold text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block font-[Poppins] font-semibold text-foreground mb-2">
                  Vehicle Make/Model (Optional)
                </label>
                <Input
                  type="text"
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  placeholder="e.g., Toyota Camry"
                  className="w-full"
                />
              </div>
              <div>
                <label className="block font-[Poppins] font-semibold text-foreground mb-2">
                  Additional Notes (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special requests or notes..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  rows={4}
                />
              </div>
            </div>
          </div>

          {/* Booking Note */}
          <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 flex gap-3">
            <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="font-body text-sm text-foreground">
              This is a booking request — Adrian will confirm your appointment via phone or email.
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary"
          >
            {isSubmitting ? "Sending..." : "Request Booking"}
          </Button>
        </form>
      </div>
    </section>
  );
}
