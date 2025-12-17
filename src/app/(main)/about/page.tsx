import Image from "next/image";
import PhilosophySection from "@/components/shared/PhilosophySection";
import WorkingPrinciplesSection from "@/components/shared/WorkingPrinciplesSection";
import CollaborationImagesSection from "@/components/shared/CollaborationImagesSection";
import ExpertTeamSection from "@/components/shared/ExpertTeamSection";
import TeamGallerySection from "@/components/shared/TeamGallerySection";
import TrustedPartnersSection from "@/components/shared/TrustedPartnersSection";
import NavigationGridSection from "@/components/shared/NavigationGridSection";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with MacBook Mockup */}
      <section
        className="relative w-full min-h-[260px] sm:min-h-[320px] md:h-[600px] lg:h-[800px] overflow-hidden mt-[-32px] md:mt-[-40px]"
        style={{
          background: "#000000",
          borderRadius: "0px 0px 80px 80px",
        }}
      >
        <div className="max-w-content mx-auto h-full px-6 flex flex-col justify-start pt-0 md:pt-2">
          <div className="relative w-full flex items-start justify-center">
            <div className="w-full max-w-[1200px]">
              <Image
                src="/images/MacBook_Mockup_1 2.svg"
                alt="Năng lực và tư duy sáng tạo là thế mạnh của chúng tôi"
                width={1600}
                height={900}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* Work Image Section */}
      <section className="relative w-full bg-bgDark py-12 md:py-16">
        <div className="max-w-content mx-auto px-6 flex justify-center">
          <div className="w-full max-w-[1225px]">
            <Image
              src="/images/work_image.svg"
              alt="Work showcase"
              width={1225}
              height={659}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Working Principles Section */}
      <WorkingPrinciplesSection />

      {/* Collaboration Images Section */}
      <CollaborationImagesSection />

      {/* Expert Team Section */}
      <ExpertTeamSection />

      {/* Team Gallery Section */}
      <TeamGallerySection />

      {/* Trusted Partners Section */}
      <TrustedPartnersSection />

      <NavigationGridSection />
    </>
  );
}
