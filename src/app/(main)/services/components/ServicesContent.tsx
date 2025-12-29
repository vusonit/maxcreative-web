"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ServiceSection from "./ServiceSection";

export default function ServicesContent() {
  const [isHovered, setIsHovered] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    if (isHovered) {
      // Hiện image ngay khi hover
      setShowImage(true);

      // Tắt image sau 3s
      const timer = setTimeout(() => {
        setShowImage(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setShowImage(false);
    }
  }, [isHovered]);

  const servicesData = [
    {
      title: "MaxCreative",
      sectionId: "maxcreative",
      width: "clamp(200px, 24.5%, 280px)",
      items: [
        { text: "Nghiên cứu thị trường", translateX: 8 },
        {
          text: "Định hướng và phát triển nội dung",
          translateX: 16,
        },
        {
          text: "Định hướng và phát triển hình ảnh",
          translateX: 24,
        },
        {
          text: "Truyền thông quảng cáo đa nền tảng",
          translateX: 32,
        },
      ],
    },
    {
      title: "FY Studio",
      sectionId: "fystudio",
      width: "clamp(180px, 21%, 240px)",
      items: [
        { text: "Diễn hoạ kiến trúc", translateX: 8 },
        { text: "Diễn hoạ cảnh quan", translateX: 16 },
        { text: "Concept nội thất", translateX: 24 },
        { text: "VFX", translateX: 32 },
      ],
    },
    {
      title: "AVAT Media",
      sectionId: "avatmedia",
      width: "clamp(150px, 17.5%, 200px)",
      items: [{ text: "Digital", translateX: 8 }],
    },
    {
      title: "AdPro",
      sectionId: "adpro",
      width: "clamp(120px, 14%, 160px)",
      items: [{ text: "Ads", translateX: 8 }],
    },
  ];

  return (
    <section
      className="relative w-full min-h-[260px] sm:min-h-[320px] md:h-[600px] lg:h-[800px] overflow-hidden mt-[-32px] md:mt-[-40px] pt-12"
      style={{
        background: "#000000",
        borderRadius: "0px 0px 80px 80px",
      }}
    >
      <div className="max-w-content mx-auto h-full px-6 flex flex-col justify-start pt-0 md:pt-2">
        {/* Container cho Image + Overlay Text */}
        <div className="relative w-full flex items-start justify-center">
          <div className="relative w-full max-w-[1200px]">
            {/* Background Image - Giữ nguyên */}
            <div className="relative w-full">
              <Image
                src="/images/image_service.svg"
                alt="Năng lực và tư duy sáng tạo là thế mạnh của chúng tôi"
                width={1600}
                height={900}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Text + Toggle Overlay (nằm trên image) */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2"
              style={{
                top: "clamp(120px, 25%, 250px)",
                width: "min(90%, 1200px)",
                left: "50%",
              }}
            >
              <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap md:flex-nowrap mx-auto">
                {/* Text bên trái */}
                <p
                  className="text-white text-2xl md:text-[48px] whitespace-nowrap"
                  style={{
                    fontFamily:
                      "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                    fontWeight: 300,
                    fontStyle: "normal",
                    letterSpacing: "-1%",
                  }}
                >
                  Từ ý tưởng đến
                </p>

                {/* Toggle Container với Hover Effect */}
                <div
                  className="relative shrink-0"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div
                    className="relative w-[116px] h-[56px] rounded-[114px] transition-colors duration-300 ease-in-out overflow-hidden"
                    style={{
                      background: "#ffffff",
                    }}
                  >
                    {/* Circle slider - Di chuyển sang phải khi hover */}
                    <div
                      className="absolute top-[5px] w-[45px] h-[46px] rounded-full bg-black transition-all duration-500 ease-in-out flex items-center justify-center z-10"
                      style={{
                        left: isHovered ? "calc(100% - 51px)" : "6px",
                      }}
                    >
                      {/* Arrow icon */}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="#F0004D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Image toggle - Hiện sau khi hover, đè lên toggle, tồn tại 3s */}
                    {showImage && (
                      <div
                        className="absolute inset-0 rounded-[114px] overflow-hidden z-20"
                        style={{
                          animation: "fadeIn 0.3s ease-in-out",
                        }}
                      >
                        <Image
                          src="/images/image_toggle.svg"
                          alt="Toggle state"
                          width={116}
                          height={56}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Text bên phải */}
                <p
                  className="text-white text-2xl md:text-[48px] whitespace-nowrap"
                  style={{
                    fontFamily:
                      "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                    fontWeight: 300,
                    fontStyle: "normal",
                    letterSpacing: "-1%",
                  }}
                >
                  lợi thế bán hàng
                </p>
              </div>
            </div>

            {/* Services List Section - Đè lên background image, nằm bên dưới toggle */}
            <div
              className="absolute z-10"
              style={{
                width: "min(90%, 1139px)",
                height: "auto",
                minHeight: "165.5px",
                top: "clamp(240px, 40%, 420px)",
                left: "calc(50% + 40px)",
                transform: "translateX(-50%)",
              }}
            >
              <div
                className="flex flex-nowrap items-start w-full overflow-x-auto"
                style={{
                  flexWrap: "nowrap",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  gap: "clamp(36px, calc(1.5rem + 20px), 44px)",
                }}
              >
                {servicesData.map((service) => (
                  <ServiceSection
                    key={service.sectionId}
                    title={service.title}
                    sectionId={service.sectionId}
                    width={service.width}
                    items={service.items}
                    hoveredSection={hoveredSection}
                    setHoveredSection={setHoveredSection}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
