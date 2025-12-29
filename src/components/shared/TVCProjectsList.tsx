"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import TVCProjectCard from "./TVCProjectCard";
import TVCProjectModal from "./TVCProjectModal";

// Tạo dữ liệu mẫu cho TVC projects
const ALL_TVC_PROJECTS = Array.from({ length: 20 }, (_, index) => ({
  id: `tvc-project-${index + 1}`,
  title: `Project ${String(index + 1).padStart(2, "0")}`,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent hendrerit nisi non fringilla semper. Nullam quis feugiat odio. Quisque in laoreet nisi.",
  thumbnail: "/images/image_du_an_1.svg",
}));

// Số lượng dự án load mỗi lần
const ITEMS_PER_PAGE = 4;

export default function TVCProjectsList() {
  const [visibleProjects, setVisibleProjects] = useState<
    typeof ALL_TVC_PROJECTS
  >(ALL_TVC_PROJECTS.slice(0, ITEMS_PER_PAGE));
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<
    (typeof ALL_TVC_PROJECTS)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadMoreProjects = useCallback(() => {
    if (isLoading) return;

    setIsLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      const currentCount = visibleProjects.length;
      const nextCount = Math.min(
        currentCount + ITEMS_PER_PAGE,
        ALL_TVC_PROJECTS.length
      );

      setVisibleProjects(ALL_TVC_PROJECTS.slice(0, nextCount));
      setIsLoading(false);
    }, 300);
  }, [visibleProjects.length, isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visibleProjects.length < ALL_TVC_PROJECTS.length
        ) {
          loadMoreProjects();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [visibleProjects.length, loadMoreProjects]);

  const handleProjectClick = (project: (typeof ALL_TVC_PROJECTS)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .tvc-projects-list-section {
            position: absolute;
            top: 300px;
            width: 100%;
            transform: translateY(0);
          }
          @media (min-width: 640px) {
            .tvc-projects-list-section {
              top: 950px;
            }
          }
          @media (min-width: 1024px) {
            .tvc-projects-list-section {
              top: 700px;
            }
          }
          @keyframes expandIn {
            from {
              opacity: 0;
              transform: scale(0.95);
              max-height: 224px;
            }
            to {
              opacity: 1;
              transform: scale(1);
              max-height: 833px;
            }
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `,
        }}
      />
      <section className="tvc-projects-list-section w-full py-16 z-10">
        <div className="w-full max-w-content mx-auto px-6">
          <div className="flex flex-col items-center">
            {visibleProjects.map((project, index) => {
              const isExpanded =
                selectedProject?.id === project.id && isModalOpen;

              return (
                <div
                  key={project.id}
                  className="w-full flex flex-col items-center transition-all duration-500 ease-in-out"
                  style={{
                    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRight: "none",
                    borderBottom: "none",
                    borderLeft: "none",
                  }}
                >
                  <div
                    className="w-full transition-all duration-500 ease-in-out overflow-hidden"
                    style={{
                      height: isExpanded ? "833px" : "auto",
                      opacity: isExpanded ? 1 : 1,
                    }}
                  >
                    {isExpanded ? (
                      <div
                        style={{
                          animation: "expandIn 0.5s ease-out forwards",
                        }}
                      >
                        <TVCProjectModal
                          isOpen={isModalOpen}
                          onClose={handleCloseModal}
                          title={project.title}
                          description={project.description}
                          thumbnail={project.thumbnail}
                        />
                      </div>
                    ) : (
                      <div
                        style={{
                          animation: "fadeIn 0.3s ease-out forwards",
                        }}
                      >
                        <TVCProjectCard
                          id={project.id}
                          title={project.title}
                          description={project.description}
                          thumbnail={project.thumbnail}
                          onClick={() => handleProjectClick(project)}
                          isExpanded={isExpanded}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Loading trigger element */}
            {visibleProjects.length < ALL_TVC_PROJECTS.length && (
              <div
                ref={observerTarget}
                className="w-full flex justify-center items-center py-8"
              >
                {isLoading && (
                  <div className="text-textLight text-sm">
                    Đang tải thêm dự án...
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
