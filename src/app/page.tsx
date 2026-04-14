import { PAGE_SEO } from "@/config/seo";
import HeroSection from "@/components/sections/HeroSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PricingSection from "@/components/sections/PricingSection";
import StepsSection from "@/components/sections/StepsSection";
import AboutSection from "@/components/sections/AboutSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata = {
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  keywords: PAGE_SEO.home.keywords,
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <ServicesSection />
      <PricingSection />
      <StepsSection />
      <AboutSection />
      <ReviewsSection />
      <CTASection />
    </>
  );
}
