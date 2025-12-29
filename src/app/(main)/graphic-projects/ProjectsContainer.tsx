"use client";

import { useEffect, useRef, useState } from "react";

interface ProjectsContainerProps {
  children: React.ReactNode;
}

export default function ProjectsContainer({
  children,
}: ProjectsContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paddingBottom, setPaddingBottom] = useState(0);

  useEffect(() => {
    const updatePadding = () => {
      if (!containerRef.current) return;

      // Tìm element GraphicProjectsList trong container
      const listSection = containerRef.current.querySelector(
        ".graphic-projects-list-section"
      ) as HTMLElement;

      if (!listSection) return;

      // Xác định top value dựa trên window width (giống CSS media queries)
      let topValue: number;
      if (window.innerWidth >= 1024) {
        topValue = 700; // desktop
      } else if (window.innerWidth >= 640) {
        topValue = 950; // tablet
      } else {
        topValue = 300; // mobile
      }

      // Lấy chiều cao thực tế của list (scrollHeight bao gồm tất cả nội dung)
      const listHeight = listSection.scrollHeight;

      // Bottom của list = top + height
      const listBottom = topValue + listHeight;

      // Container hiện tại có height = 190vh (từ GraphicProjectsHero)
      const viewportHeight = window.innerHeight;
      const containerHeight = viewportHeight * 1.9; // 190vh

      // Padding-bottom cần thiết = bottom của list - height hiện tại của container + buffer
      // Đảm bảo container đủ cao để chứa toàn bộ list
      const calculatedPadding = Math.max(0, listBottom - containerHeight) + 50;

      setPaddingBottom(calculatedPadding);
    };

    // Đợi một chút để đảm bảo DOM đã render xong
    const timeoutId = setTimeout(updatePadding, 100);

    // Cập nhật khi resize
    window.addEventListener("resize", updatePadding);

    // Sử dụng ResizeObserver để theo dõi thay đổi kích thước của list
    const resizeObserver = new ResizeObserver(updatePadding);

    if (containerRef.current) {
      const listSection = containerRef.current.querySelector(
        ".graphic-projects-list-section"
      );
      if (listSection) {
        resizeObserver.observe(listSection);
      }
    }

    // Sử dụng MutationObserver để theo dõi thay đổi trong list (khi load more)
    const mutationObserver = new MutationObserver(updatePadding);

    if (containerRef.current) {
      mutationObserver.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
      });
    }

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updatePadding);
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        paddingBottom: `${paddingBottom}px`,
      }}
    >
      {children}
    </div>
  );
}
