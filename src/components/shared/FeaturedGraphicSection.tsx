"use client";

import { useState } from "react";
import Image from "next/image";
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

export default function FeaturedGraphicSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof PROJECTS)[0] | null
  >(PROJECTS[0] || null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleProjectClick = (project: (typeof PROJECTS)[0]) => {
    setSelectedProject(project);
    setIsPlaying(true);
  };

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative w-full bg-bgDark py-16">
      <div className="max-w-content mx-auto px-6">
        <h2
          className="text-textLight text-lg md:text-xl font-medium mb-6"
          style={{
            fontFamily:
              "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
          }}
        >
          Dự án đồ hoạ nổi bật
        </h2>

        {/* Main Video/Image Display */}
        {selectedProject && (
          <div className="relative w-full mb-6">
            <div
              className="relative w-full bg-bgDark border border-white/20 rounded-lg overflow-hidden"
              style={{ aspectRatio: "16/9", minHeight: "400px" }}
            >
              {isPlaying && selectedProject.videoUrl ? (
                <iframe
                  className="w-full h-full"
                  src={selectedProject.videoUrl}
                  title="Project Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Thumbnail */}
                  <Image
                    src={selectedProject.imageSrc}
                    alt={selectedProject.title}
                    fill
                    className="object-cover opacity-50"
                  />
                  {/* Play Button */}
                  <button
                    onClick={handlePlayButtonClick}
                    className="relative z-10 w-20 h-20 rounded-full bg-white/90 hover:bg-white transition-colors flex items-center justify-center group"
                  >
                    <svg
                      className="w-8 h-8 text-bgDark ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
          {PROJECTS.map((project) => (
            <GraphicProjectCard
              key={project.id}
              imageSrc={project.imageSrc}
              title={project.title}
              onClick={() => handleProjectClick(project)}
            />
          ))}

          {/* "Tất cả dự án" card */}
          <GraphicProjectCard isMore />
        </div>
      </div>
    </section>
  );
}
