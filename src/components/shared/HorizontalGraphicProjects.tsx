"use client";

import GraphicProjectCard from "./GraphicProjectCard";

const PROJECTS = [
  {
    id: "project1",
    imageSrc: "/images/image_du_an_1.svg",
    title: "Ms. KIỆT TÁC\nTHƯƠNG MẠI",
    videoUrl: "https://www.youtube.com/embed/xxioHPI0B_U",
  },
  {
    id: "project2",
    imageSrc: "/images/image_du_an_1.svg",
    title: "Ms. KIỆT TÁC\nTHƯƠNG MẠI",
    videoUrl: "https://www.youtube.com/embed/xxioHPI0B_U",
  },
  {
    id: "project3",
    imageSrc: "/images/image_du_an_1.svg",
    title: "Ms. KIỆT TÁC\nTHƯƠNG MẠI",
    videoUrl: "https://www.youtube.com/embed/xxioHPI0B_U",
  },
  {
    id: "project4",
    imageSrc: "/images/image_du_an_1.svg",
    title: "Ms. KIỆT TÁC\nTHƯƠNG MẠI",
    videoUrl: "https://www.youtube.com/embed/xxioHPI0B_U",
  },
];

export default function HorizontalGraphicProjects() {
  const handleProjectClick = (project: (typeof PROJECTS)[0]) => {
    // Handle project click if needed
    console.log("Project clicked:", project);
  };

  // Sắp xếp: 2 project đầu, "Tất cả dự án" (thứ 3), các project còn lại
  const firstTwoProjects = PROJECTS.slice(0, 2);
  const remainingProjects = PROJECTS.slice(2);

  return (
    <section className="relative w-full bg-bgDark pb-16">
      <div className="max-w-content mx-auto px-6">
        {/* Horizontal Scrollable Container */}
        <div className="overflow-x-auto pb-4 -mx-6 px-6">
          <div
            className="flex gap-4 md:gap-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* First 2 projects */}
            {firstTwoProjects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0"
                style={{ width: "clamp(280px, 30vw, 400px)" }}
              >
                <GraphicProjectCard
                  imageSrc={project.imageSrc}
                  title={project.title}
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            ))}

            {/* "Tất cả dự án" card - vị trí thứ 3 */}
            <div
              className="flex-shrink-0"
              style={{ width: "clamp(280px, 30vw, 400px)" }}
            >
              <GraphicProjectCard isMore />
            </div>

            {/* Remaining projects */}
            {remainingProjects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0"
                style={{ width: "clamp(280px, 30vw, 400px)" }}
              >
                <GraphicProjectCard
                  imageSrc={project.imageSrc}
                  title={project.title}
                  onClick={() => handleProjectClick(project)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hide scrollbar for webkit browsers */}
        <style jsx>{`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
