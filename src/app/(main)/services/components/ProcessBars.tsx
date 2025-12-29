"use client";

import { useState, useEffect, useRef } from "react";

export default function ProcessBars() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // Kích hoạt khi 30% section vào viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const steps = [
    {
      text: "Xây dựng thông điệp trung tâm và câu chuyện thương hiệu",
      topPosition: "270px", // Thấp nhất, gần đáy (minHeight 300px - 30px)
    },
    {
      text: "Lập kế hoạch nội dung đa nền tảng",
      topPosition: "200px", // Cao hơn
    },
    {
      text: "Viết nội dung sáng tạo: bài đăng, kịch bản video, long-form",
      topPosition: "130px", // Cao hơn nữa
    },
    {
      text: "Điều chỉnh và tối ưu nội dung theo phản hồi & dữ liệu",
      topPosition: "60px", // Cao nhất (gần top nhất)
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black pb-16 md:pb-24"
    >
      <div className="max-w-content mx-auto px-6">
        <div className="relative w-full">
          {/* Container với 4 cột, có gap giữa các cột */}
          <div className="grid grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {/* 4 Sections với thanh và text */}
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col">
                {/* Cột với border và thanh hồng */}
                <div
                  className="relative"
                  style={{
                    minHeight: "300px",
                    borderLeft: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRight: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  {/* Thanh ngang - mặc định xám ở dưới, khi scroll vào view thì hồng và cao dần */}
                  <div
                    className="absolute w-full transition-all ease-in-out"
                    style={{
                      height: "8px",
                      top: isInView ? step.topPosition : "270px", // Mặc định ở dưới, khi view thì về vị trí ban đầu
                      backgroundColor: isInView ? "#FF0066" : "#808080", // Mặc định xám, khi view thì hồng
                      transitionDuration: "1500ms", // Chậm hơn để cảm nhận rõ hơn
                    }}
                  />
                </div>

                {/* Text content - nằm bên ngoài và dưới cột */}
                <p
                  className="text-white text-left mt-4"
                  style={{
                    fontFamily:
                      "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                    fontWeight: 300,
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                  }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
