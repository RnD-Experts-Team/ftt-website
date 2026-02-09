import FeaturedVideoSection from "../../sections/testimonials/FeaturedVideoSection";
import TestimonialsCarouselSection from "../../sections/testimonials/TestimonialsCarouselSection";
import TestimonialsCTASection from "../../sections/testimonials/TestimonialsCTASection";

export default function Testimonials() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
        <TestimonialsCarouselSection />
        <FeaturedVideoSection />
        <TestimonialsCTASection />
    </div>
  );
}
