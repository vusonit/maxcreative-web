import Image from "next/image";

// Placeholder images - Replace with actual team member photos
// Recommended: Use Unsplash with black & white filter or your own team photos
const TEAM_IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=273&h=341&fit=crop&q=80&fm=webp",
    alt: "Team member 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=273&h=341&fit=crop&q=80&fm=webp",
    alt: "Team member 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=273&h=341&fit=crop&q=80&fm=webp",
    alt: "Team member 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=273&h=341&fit=crop&q=80&fm=webp",
    alt: "Team member 4",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=273&h=341&fit=crop&q=80&fm=webp",
    alt: "Team member 5",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=273&h=341&fit=crop&q=80&fm=webp",
    alt: "Team member 6",
  },
];

export default function TeamGallerySection() {
  return (
    <section className="relative w-full bg-bgDark py-12 md:py-16 overflow-hidden">
      <div className="max-w-content mx-auto px-6">
        <div className="overflow-x-auto scrollbar-hide pb-4">
          <div className="flex gap-4 md:gap-6" style={{ minWidth: "max-content" }}>
            {TEAM_IMAGES.map((member) => (
              <div
                key={member.id}
                className="relative shrink-0 w-[200px] h-[250px] md:w-[273px] md:h-[341px]"
              >
                <Image
                  src={member.src}
                  alt={member.alt}
                  width={273}
                  height={341}
                  className="w-full h-full object-cover grayscale brightness-90 contrast-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

