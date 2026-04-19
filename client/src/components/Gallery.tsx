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
    image: "/manus-storage/IMG_8676_e31dc92d.png",
    size: "large",
  },
  {
    id: 2,
    title: "Toyota Land Cruiser Prado - Interior",
    category: "Interior Detailing",
    image: "/manus-storage/IMG_8693_5dbb35d6.jpeg",
    size: "medium",
  },
  {
    id: 3,
    title: "Toyota Land Cruiser Prado - Side View",
    category: "Exterior Detailing",
    image: "/manus-storage/IMG_8681_3f535f47.png",
    size: "medium",
  },
  {
    id: 4,
    title: "White Lexus - Premium Gloss Finish",
    category: "Exterior Detail",
    image: "/manus-storage/IMG_9112_42226a37.jpeg",
    size: "large",
  },
  {
    id: 5,
    title: "Toyota HiLux Ute - Exterior",
    category: "Exterior Detailing",
    image: "/manus-storage/IMG_9021_d95427da.jpeg",
    size: "small",
  },
  {
    id: 6,
    title: "Toyota HiLux - Interior Detail",
    category: "Interior Detailing",
    image: "/manus-storage/IMG_9003_57f4f968.jpeg",
    size: "small",
  },
  {
    id: 7,
    title: "Toyota HiLux - Side Profile",
    category: "Exterior Detailing",
    image: "/manus-storage/IMG_9024_58ebe762.jpeg",
    size: "medium",
  },
  {
    id: 8,
    title: "Vehicle Interior - Pristine Seats",
    category: "Interior Detailing",
    image: "/manus-storage/IMG_7242_a38e9021.jpeg",
    size: "medium",
  },
  {
    id: 9,
    title: "Dashboard & Steering Wheel - Deep Clean",
    category: "Interior Detailing",
    image: "/manus-storage/IMG_7224_3fcb126b.jpeg",
    size: "small",
  },
  {
    id: 10,
    title: "Interior Dashboard - Clean Detail",
    category: "Interior Detailing",
    image: "/manus-storage/IMG_7196_801fb897.jpeg",
    size: "small",
  },
  {
    id: 11,
    title: "Leather Seats - Pristine Condition",
    category: "Interior Detailing",
    image: "/manus-storage/IMG_7200_c15f20c5.jpeg",
    size: "large",
  },
  {
    id: 12,
    title: "Interior Carpet - Deep Clean",
    category: "Interior Detailing",
    image: "/manus-storage/IMG_7080_3d4793c3.jpeg",
    size: "small",
  },
  {
    id: 13,
    title: "Exterior Detail - Professional Wash",
    category: "Interior Detail",
    image: "/manus-storage/IMG_6942_fa27bd0f.jpeg",
    size: "medium",
  },
  {
    id: 14,
    title: "Interior Leather - Conditioned",
    category: "Interior Detailing",
    image: "/manus-storage/IMG_6181_c3479bfe.jpeg",
    size: "medium",
  },
  {
    id: 15,
    title: "Vehicle Shine - Showroom Quality",
    category: "Exterior Detail",
    image: "/manus-storage/IMG_7236_12d18a3a.jpeg",
    size: "large",
  },
  {
    id: 16,
    title: "Nissan Navara - Showroom Shine",
    category: "Exterior Detail",
    image: "/manus-storage/IMG_7229_22406916.jpeg",
    size: "small",
  },
  {
    id: 17,
    title: "Exterior Polish - Reflective Finish",
    category: "Exterior Detail",
    image: "/manus-storage/IMG_7192_9ec15d6d.jpeg",
    size: "small",
  },
  {
    id: 18,
    title: "Holden Commodore - Mirror Finish",
    category: "Exterior Detail",
    image: "/manus-storage/IMG_7085_e8570583.jpeg",
    size: "medium",
  },
  {
    id: 19,
    title: "Vehicle Exterior - Professional Gloss",
    category: "Exterior Detailing",
    image: "/manus-storage/IMG_7014_5b3f63b4.jpeg",
    size: "medium",
  },
  {
    id: 20,
    title: "Boat Detail - Premium Finish",
    category: "Exterior Detail",
    image: "/manus-storage/IMG_6477_ddc8504e.jpeg",
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
