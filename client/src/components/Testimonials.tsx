import { Star } from "lucide-react";

/**
 * Testimonials Section - Premium Automotive Minimalism
 * Design Philosophy: Alternating left-right layout with subtle shadows and depth
 * Visual Elements: Client testimonials with ratings and background imagery
 * Typography: Poppins for names, Inter for testimonial text
 * Interaction: Smooth hover effects and transitions
 */

const testimonials = [
  {
    id: 1,
    name: "Corey Baker",
    role: "Google Review",
    rating: 5,
    text: "Absolutely amazed at the quality and attention to detail of the work done and goes above and beyond! Easy to deal with and talk too and very well priced! 100% would recommend to anyone! Definitely support this small local business everytime no questions asked. This photo is 100% unedited so I think it speaks for itself.",
    isGoogleReview: true,
  },
  {
    id: 2,
    name: "Melinda Kirby",
    role: "Google Review",
    rating: 5,
    text: "Just had my car detailed by Adrian and couldn't be happier with the results. The attention to detail was next level, it honestly looks better than I expected, the black leather seats are like brand new. My car had a strong perfume smell and he managed to completely get rid of it. Super professional, easy to deal with and clearly takes pride in his work. Highly recommend if you want your car looking like brand new, the cost was very reasonable too. Will definitely be back",
    isGoogleReview: true,
  },
  {
    id: 3,
    name: "Jessica Madden",
    role: "Google Review",
    rating: 5,
    text: "We recently had our car fully detailed by Adrian, and the result was outstanding. He did an exceptional job both inside and out, with great attention to detail. Adrian was professional, easy to deal with, and made the whole process seamless. Highly recommend his services.",
    isGoogleReview: true,
  },
  {
    id: 4,
    name: "Jackson Smith",
    role: "Google Review",
    rating: 5,
    text: "Absolutely immaculate work, will be bringing all my cars here in the future. Quality work and great price!",
    isGoogleReview: true,
  },
  {
    id: 5,
    name: "Mitchell Forrest",
    role: "Google Review",
    rating: 5,
    text: "Very happy with the job on my work ute. Professional service, great attention to detail, and it came up really clean. Highly recommend.",
    isGoogleReview: true,
  },
  {
    id: 6,
    name: "Ryan Savery",
    role: "Google Review",
    rating: 5,
    text: "Great attention to detail & value for money!",
    isGoogleReview: true,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background with testimonial image */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663571994686/GFtZe2gzbjucomX5sxJHNk/testimonial-bg-LTxpFGsaP3wN8hZJv4KyLk.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-display text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Real feedback from satisfied customers on Google Reviews.
          </p>
        </div>

        {/* Testimonials Grid - 3 columns for 6 reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`card-hover flex flex-col ${
                index % 3 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              {/* Google Review Badge */}
              {testimonial.isGoogleReview && (
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-accent/10 rounded-full border border-accent/30 w-fit">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-xs font-semibold text-accent">Google Review</span>
                </div>
              )}

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-body text-foreground mb-6 italic flex-grow text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border mt-auto">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <span className="text-sm font-semibold text-accent">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-[Poppins] font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-16 bg-card border-2 border-accent/30 rounded-xl p-8 md:p-12 text-center">
          <h3 className="font-heading text-foreground mb-3">
            Leave Us a Review on Google
          </h3>
          <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
            Share your experience with Adrian's Detailing and help other customers discover our premium service.
          </p>
          <a
            href="https://www.google.com/search?q=Adrian%27s+Detailing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Read Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
