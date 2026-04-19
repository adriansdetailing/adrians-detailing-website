import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

/**
 * Home Page - Adrian's Detailing
 * Premium Automotive Minimalism Design
 * Layout: Header, Hero, Services, Gallery, Testimonials, Contact, Footer
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
