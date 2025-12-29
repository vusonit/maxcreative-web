"use client";

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
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=273&h=341&fit=crop&q=80&fm=webp",
    alt: "Team member 7",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=273&h=341&fit=crop&q=80&fm=webp",
    alt: "Team member 8",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=273&h=341&fit=crop&q=80&fm=webp",
    alt: "Team member 9",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=273&h=341&fit=crop&q=80&fm=webp",
    alt: "Team member 10",
  },
];

export default function TeamGallerySection() {
  // Duplicate images để tạo seamless loop
  const duplicatedImages = [...TEAM_IMAGES, ...TEAM_IMAGES];

  return (
    <section className="relative w-full bg-bgDark pb-12 md:pb-16 overflow-hidden">
      <div className="max-w-content mx-auto px-6">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .team-gallery-scroll {
            animation: scroll 30s linear infinite;
          }
          .team-gallery-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="overflow-hidden pb-4">
          <div
            className="flex gap-4 md:gap-6 team-gallery-scroll"
            style={{ width: "max-content" }}
          >
            {duplicatedImages.map((member, index) => (
              <div
                key={`${member.id}-${index}`}
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
