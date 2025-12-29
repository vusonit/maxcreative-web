"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import GraphicProjectCard from "./GraphicProjectCard";

// Tạo 30 dự án
const ALL_PROJECTS = Array.from({ length: 30 }, (_, index) => ({
  id: `project-${index + 1}`,
  imageSrc: "/images/image_du_an_1.svg",
  title: `Dự án ${index + 1}\nThiết kế đồ họa`,
  videoUrl: "https://www.youtube.com/embed/xxioHPI0B_U",
}));

// Số lượng dự án load mỗi lần
const ITEMS_PER_PAGE = 6;

export default function GraphicProjectsList() {
  const [visibleProjects, setVisibleProjects] = useState<typeof ALL_PROJECTS>(
    ALL_PROJECTS.slice(0, ITEMS_PER_PAGE)
  );
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef<HTMLDivElement>(null);

  const loadMoreProjects = useCallback(() => {
    if (isLoading) return;

    setIsLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      const currentCount = visibleProjects.length;
      const nextCount = Math.min(
        currentCount + ITEMS_PER_PAGE,
        ALL_PROJECTS.length
      );

      setVisibleProjects(ALL_PROJECTS.slice(0, nextCount));
      setIsLoading(false);
    }, 300);
  }, [visibleProjects.length, isLoading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visibleProjects.length < ALL_PROJECTS.length
        ) {
          loadMoreProjects();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px", // Chỉ load khi scroll đến cuối thực sự
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

  const handleProjectClick = (project: (typeof ALL_PROJECTS)[0]) => {
    // Handle project click - có thể mở modal hoặc navigate
    console.log("Project clicked:", project);
  };

  // Hiển thị tất cả items trừ item cuối cùng, card "more" sẽ thay thế item cuối cùng
  const projectsToShow = visibleProjects.slice(0, -1);
  const projectCount = projectsToShow.length;

  // Tính toán vị trí cho card "more" để nó thay thế item cuối cùng trong hàng cuối cùng
  // Số cột còn lại trong hàng cuối cùng
  const getMoreCardCol = (cols: number) => {
    const remainder = projectCount % cols;
    // Nếu hàng đầy (remainder === 0), card more ở cột cuối hàng tiếp theo
    // Nếu hàng chưa đầy, card more ở cột tiếp theo trong hàng hiện tại (remainder + 1)
    return remainder === 0 ? cols : remainder + 1;
  };

  // Mobile: 2 cột
  const mobileCol = getMoreCardCol(2);
  // Tablet: 2 cột
  const tabletCol = getMoreCardCol(2);
  // Desktop: 3 cột
  const desktopCol = getMoreCardCol(3);

  // Tạo unique ID cho style tag dựa trên số projects để tránh conflict
  const styleId = `more-card-${projectCount}`;

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .graphic-projects-list-section {
            position: absolute;
            top: 300px;
            width: 100%;
            transform: translateY(0);
          }
          @media (min-width: 640px) {
            .graphic-projects-list-section {
              top: 950px;
            }
          }
          @media (min-width: 1024px) {
            .graphic-projects-list-section {
              top: 700px;
            }
          }
          #${styleId} {
            grid-column: ${mobileCol} / ${mobileCol + 1};
          }
          @media (min-width: 640px) {
            #${styleId} {
              grid-column: ${tabletCol} / ${tabletCol + 1};
            }
          }
          @media (min-width: 1024px) {
            #${styleId} {
              grid-column: ${desktopCol} / ${desktopCol + 1};
            }
          }
        `,
        }}
      />
      <section
        className="graphic-projects-list-section w-full z-10 py-16"
        style={{
          background: "transparent",
        }}
      >
        <div className="w-full px-6 max-w-content mx-auto">
          {/* Projects Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projectsToShow.map((project) => (
              <GraphicProjectCard
                key={project.id}
                imageSrc={project.imageSrc}
                title={project.title}
                onClick={() => handleProjectClick(project)}
              />
            ))}

            {/* "Tất cả dự án" card - thay thế item cuối cùng trong hàng cuối cùng */}
            <div id={styleId}>
              <GraphicProjectCard isMore />
            </div>

            {/* Loading trigger element */}
            {visibleProjects.length < ALL_PROJECTS.length && (
              <div
                ref={observerTarget}
                className="col-span-full flex justify-center items-center py-8"
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
