import { CheckCircle2, Plus } from "lucide-react";

/**
 * Services Section - Premium Automotive Minimalism
 * Design Philosophy: Staggered card layout with pricing and features
 * Visual Elements: Service packages with detailed features and pricing
 * Typography: Poppins for headings, Inter for descriptions
 * Interaction: Smooth scale and shadow transitions on hover
 */

const mainPackages = [
  {
    id: 1,
    title: "Interior Only",
    description:
      "Complete interior refresh to keep your cabin pristine and fresh.",
    features: [
      "Vacuum",
      "Trims cleaned",
      "Dash/infotainment system cleaned",
      "Inside windows",
      "Leather wiped clean",
      "Air freshener",
    ],
    pricing: {
      small: 180,
      large: 230,
    },
  },
  {
    id: 2,
    title: "Exterior Only",
    description:
      "Professional exterior cleaning and protection for a flawless finish.",
    features: [
      "Exterior wash",
      "Wheels/tyres/arches cleaned",
      "Towel/blow dry",
      "Tyre shine",
      "Outside windows",
    ],
    pricing: {
      small: 150,
      large: 200,
    },
  },
  {
    id: 3,
    title: "Maintenance Detail",
    description:
      "This package includes: Exterior wash, wheels/tyres/arches cleaned, towel/blow dry, tyre shine, inside/outside windows, vacuum, trims cleaned, dash/infotainment system cleaned, and air freshener. Doing a regular maintenance detail ensures your vehicle stays in top shape, and always looks its best!",
    features: [
      "Exterior wash",
      "Wheels/tyres/arches cleaned",
      "Towel/blow dry",
      "Tyre shine",
      "Inside/outside windows",
      "Vacuum",
      "Trims cleaned",
      "Dash/infotainment system cleaned",
      "Air freshener",
    ],
    pricing: {
      small: 320,
      large: 420,
    },
  },
  {
    id: 4,
    title: "Full Detail",
    description:
      "This package includes: Exterior wash, exterior cut & polish, wheels/tyres/arches cleaned, towel/blow dry, tyre shine, inside/outside windows, vacuum, leather wiped clean, trims cleaned, dash/infotainment system cleaned, door jams cleaned and an air freshener.",
    features: [
      "Exterior wash",
      "Exterior cut & polish",
      "Wheels/tyres/arches cleaned",
      "Towel/blow dry",
      "Tyre shine",
      "Inside/outside windows",
      "Vacuum",
      "Leather wiped clean",
      "Trims cleaned",
      "Dash/infotainment system cleaned",
      "Door jams cleaned",
      "Air freshener",
    ],
    pricing: {
      small: 520,
      large: 620,
    },
  },
];

const extras = [
  {
    id: 1,
    title: "Cut & Polish",
    description:
      "Exterior cut and polish to restore paint clarity, remove light scratches, swirl marks, and oxidation for a mirror-like finish.",
    price: "from $250",
  },
  {
    id: 2,
    title: "Carpet Deep Clean",
    description:
      "Deep extraction cleaning of all carpet and floor mats to remove embedded dirt, stains, and odours.",
    price: "from $80",
  },
  {
    id: 3,
    title: "Fragrance Bomb",
    description:
      "Odour elimination treatment that neutralises bad smells and leaves your car smelling fresh.",
    price: "$30",
  },
  {
    id: 4,
    title: "Roof Lining Deep Clean",
    description:
      "Careful deep cleaning of the headliner to remove stains, marks, and discolouration.",
    price: "from $80",
  },
  {
    id: 5,
    title: "Deep Stain Removal",
    description:
      "Targeted treatment for stubborn stains on seats, carpets, or other interior surfaces.",
    price: "from $60",
  },
  {
    id: 6,
    title: "Engine Bay Detail",
    description:
      "Thorough cleaning and dressing of the engine bay for a showroom-quality look under the hood.",
    price: "from $80",
  },
  {
    id: 7,
    title: "Leather Conditioning",
    description:
      "Deep clean and condition leather seats and surfaces to restore softness and protect against cracking.",
    price: "from $60",
  },
  {
    id: 8,
    title: "Pet Hair Removal",
    description:
      "Thorough removal of pet hair from seats, carpets, and hard-to-reach areas.",
    price: "from $60",
  },
  {
    id: 9,
    title: "Door Jamb Detail",
    description:
      "Detailed cleaning of all door jambs and hinges to remove built-up grime and dirt.",
    price: "$30",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-foreground mb-4">Our Services</h2>
          <p className="font-body text-muted-foreground text-lg">
            Choose from our comprehensive detailing packages. Each service is performed with precision and care to keep your vehicle looking its best.
          </p>
        </div>

        {/* Main Packages Section */}
        <div className="mb-20">
          <h3 className="font-[Poppins] font-bold text-2xl text-foreground mb-12">
            Main Packages
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainPackages.map((service, index) => (
              <div
                key={service.id}
                className={`card-hover group ${
                  index === 2 || index === 3 ? "lg:translate-y-8" : ""
                }`}
              >
                {/* Header */}
                <h3 className="font-subheading text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground mb-6 text-sm">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-8 pb-8 border-b border-border">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-body text-xs text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-[Poppins] font-semibold text-sm text-foreground">
                      Small car:
                    </span>
                    <span className="font-[Poppins] font-bold text-accent text-lg">
                      ${service.pricing.small}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-[Poppins] font-semibold text-sm text-foreground">
                      Large car:
                    </span>
                    <span className="font-[Poppins] font-bold text-accent text-lg">
                      ${service.pricing.large}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-2 text-accent font-[Poppins] font-semibold hover:text-accent/80 transition-colors text-sm">
                  Book Now →
                </button>
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <p className="font-body text-xs text-muted-foreground italic mt-8 text-center">
            *Prices may vary depending on vehicle condition (eg, pet hair removal, heavy stain removal, excessive dirt, etc.)
          </p>
        </div>

        {/* Extras / Add-ons Section */}
        <div className="border-t border-border pt-16">
          <div className="mb-12">
            <h3 className="font-[Poppins] font-bold text-2xl text-foreground mb-2">
              Extras & Add-ons
            </h3>
            <p className="font-body text-muted-foreground">
              Enhance any package with our premium add-on services. Mix and match to create your perfect detailing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extras.map((extra) => (
              <div
                key={extra.id}
                className="group bg-card/50 border border-border rounded-lg p-6 hover:border-accent/50 hover:bg-card transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-[Poppins] font-semibold text-foreground flex-1">
                    {extra.title}
                  </h4>
                  <Plus className="w-5 h-5 text-accent flex-shrink-0 ml-2" />
                </div>

                <p className="font-body text-sm text-muted-foreground mb-4">
                  {extra.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="font-[Poppins] font-bold text-accent">
                    {extra.price}
                  </span>
                  <button className="text-accent hover:text-accent/80 transition-colors text-xs font-[Poppins] font-semibold">
                    Add →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Extras Note */}
          <p className="font-body text-xs text-muted-foreground italic mt-8 text-center">
            *Prices may vary depending on vehicle condition (eg, pet hair removal, heavy stain removal, excessive dirt, etc.)
          </p>
        </div>
      </div>
    </section>
  );
}
