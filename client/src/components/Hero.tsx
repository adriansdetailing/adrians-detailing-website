/**
 * Hero Section - Premium Automotive Minimalism
 * Design Philosophy: Logo-centric hero with large, bold branding as the centerpiece
 * Visual Elements: Large Adrian's Detailing logo prominently displayed with supporting text below
 * Typography: Bold Poppins display font for main heading
 * Interaction: Smooth fade-in animations, CTA button with hover effects
 */

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-background pt-20 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="flex flex-col items-center justify-center w-full gap-12 text-center">
          {/* Large Logo - Centerpiece */}
          <div className="animate-fade-in max-w-2xl w-full">
            {/* Decorative background glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/20 via-transparent to-transparent rounded-full blur-3xl w-96 h-96 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            
            {/* Logo Image - Large and Prominent */}
            <div className="relative w-full flex justify-center mb-8">
              <img
                src="/images/logo_hero.PNG"
                alt="Adrian's Detailing Logo"
                className="w-80 h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
              />
            </div>

            {/* Main Heading - Business Name */}
            <h1 className="font-display text-foreground leading-tight text-5xl lg:text-7xl mb-4 font-bold">
              Adrian's Detailing
            </h1>

            {/* Tagline */}
            <p className="font-[Poppins] font-bold text-accent text-2xl lg:text-3xl tracking-wide uppercase mb-6">
              Perfection At Every Detail
            </p>

            {/* Description */}
            <p className="font-body text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto mb-8">
              Transform your vehicle with our professional detailing services. From meticulous interior care to flawless exterior polish, we deliver showroom-quality results every time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary"
            >
              Schedule Appointment
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="btn-secondary"
            >
              Explore Services
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 justify-center pt-8 border-t border-border">
            <div>
              <p className="font-[Poppins] font-bold text-accent text-3xl">100%</p>
              <p className="font-body text-muted-foreground text-sm">Satisfaction Guaranteed</p>
            </div>
            <div>
              <p className="font-[Poppins] font-bold text-accent text-3xl">5+</p>
              <p className="font-body text-muted-foreground text-sm">Years Experience</p>
            </div>
            <div>
              <p className="font-[Poppins] font-bold text-accent text-3xl">5★</p>
              <p className="font-body text-muted-foreground text-sm">Google Rated</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
