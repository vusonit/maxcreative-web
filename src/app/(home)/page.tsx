import HeroSection from "@/components/shared/HeroSection";
import AboutVideoSection from "@/components/shared/AboutVideoSection";
import PartnersLogoSection from "@/components/shared/PartnersLogoSection";
import OrbitSection from "@/components/shared/OrbitSection";
import FeaturedTVCSection from "@/components/shared/FeaturedTVCSection";
import PartnersSection from "@/components/shared/PartnersSection";
import NavigationGridSection from "@/components/shared/NavigationGridSection";
import FeaturedGraphicSection from "@/components/shared/FeaturedGraphicSection";

export default function Home() {
  return (
    <>
      {/* Hero Section - Frame 1 */}
      <HeroSection />

      {/* Partners Logo Section */}
      <PartnersLogoSection />

      <AboutVideoSection />

      <OrbitSection />

      <FeaturedGraphicSection />

      <FeaturedTVCSection />

      <PartnersSection />

      <NavigationGridSection />
    </>
  );
}
