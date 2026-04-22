/**
 * Gallery Section - Premium Automotive Minimalism
 * Design Philosophy: Masonry-style grid with varied image sizes
 * Visual Elements: Real before/after gallery showcasing transformation
 * Interaction: Hover zoom effects and smooth transitions
 */

const galleryItems = [
  {
    id: 1,
    title: "Toyota Land Cruiser Prado - Exterior",
    category: "Exterior Detailing",
    image: "/images/IMG_8676.jpeg",
    size: "large",
  },
  {
    id: 2,
    title: "Toyota Land Cruiser Prado - Interior",
    category: "Interior Detailing",
    image: "/images/IMG_8693.jpeg",
    size: "medium",
  },
  {
    id: 3,
    title: "Toyota Land Cruiser Prado - Side View",
    category: "Exterior Detailing",
    image: "/images/IMG_8681.jpeg",
    size: "medium",
  },
  {
    id: 4,
    title: "White Lexus - Premium Gloss Finish",
    category: "Exterior Detail",
    image: "/images/IMG_9112.jpeg",
    size: "large",
  },
  {
    id: 5,
    title: "Toyota HiLux Ute - Exterior",
    category: "Exterior Detailing",
    image: "/images/IMG_9021.jpeg",
    size: "small",
  },
  {
    id: 6,
    title: "Toyota HiLux - Interior Detail",
    category: "Interior Detailing",
    image: "/images/IMG_9003.jpeg",
    size: "small",
  },
  {
    id: 7,
    title: "Toyota HiLux - Side Profile",
    category: "Exterior Detailing",
    image: "/images/IMG_9024.jpeg",
    size: "medium",
  },
  {
    id: 8,
    title: "Vehicle Interior - Pristine Seats",
    category: "Interior Detailing",
    image: "/images/IMG_7242.jpeg",
    size: "medium",
  },
  {
    id: 9,
    title: "Dashboard & Steering Wheel - Deep Clean",
    category: "Interior Detailing",
    image: "/images/IMG_7224.jpeg",
    size: "small",
  },
  {
    id: 10,
    title: "Interior Dashboard - Clean Detail",
    category: "Interior Detailing",
    image: "/images/IMG_7196.jpeg",
    size: "small",
  },
  {
    id: 11,
    title: "Leather Seats - Pristine Condition",
    category: "Interior Detailing",
    image: "/images/IMG_7200.jpeg",
    size: "large",
  },
  {
    id: 12,
    title: "Interior Carpet - Deep Clean",
    category: "Interior Detailing",
    image: "/images/IMG_7080.jpeg",
    size: "small",
  },
  {
    id: 13,
    title: "Exterior Detail - Professional Wash",
    category: "Interior Detail",
    image: "/images/IMG_6942.jpeg",
    size: "medium",
  },
  {
    id: 14,
    title: "Interior Leather - Conditioned",
    category: "Interior Detailing",
    image: "/images/IMG_6181.jpeg",
    size: "medium",
  },
  {
    id: 15,
    title: "Vehicle Shine - Showroom Quality",
    category: "Exterior Detail",
    image: "/images/IMG_7236.jpeg",
    size: "large",
  },
  {
    id: 16,
    title: "Nissan Navara - Showroom Shine",
    category: "Exterior Detail",
    image: "/images/IMG_7229.jpeg",
    size: "small",
  },
  {
    id: 17,
    title: "Exterior Polish - Reflective Finish",
    category: "Exterior Detail",
    image: "/images/IMG_7192.jpeg",
    size: "small",
  },
  {
    id: 18,
    title: "Holden Commodore - Mirror Finish",
    category: "Exterior Detail",
    image: "/images/IMG_7085.jpeg",
    size: "medium",
  },
  {
    id: 19,
    title: "Vehicle Exterior - Professional Gloss",
    category: "Exterior Detailing",
    image: "/images/IMG_7014.jpeg",
    size: "medium",
  },
  {
    id: 20,
    title: "Boat Detail - Premium Finish",
    category: "Exterior Detail",
    image: "/images/IMG_6477.jpeg",
    size: "large",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-padding bg-card/50 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/3 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-foreground mb-4">Gallery</h2>
          <p className="font-body text-muted-foreground text-lg">
            Explore our portfolio of real transformations. Each project showcases our commitment to excellence and attention to detail.
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {galleryItems.map((item) => {
            const heightClass =
              item.size === "large"
                ? "lg:row-span-2 lg:col-span-2"
                : item.size === "medium"
                  ? "lg:col-span-2"
                  : "lg:col-span-1";

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${heightClass}`}
              >
                {/* Image Container */}
                <div className="relative w-full h-64 md:h-72 lg:h-full min-h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-accent text-xs font-[Poppins] font-semibold uppercase tracking-wide mb-2">
                      {item.category}
                    </p>
                    <h3 className="font-[Poppins] font-semibold text-foreground text-sm md:text-base">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More CTA */}
        <div className="flex justify-center mt-12">
          <button className="btn-secondary">View Complete Portfolio</button>
        </div>
      </div>
    </section>
  );
}
