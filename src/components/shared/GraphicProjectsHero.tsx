"use client";

import { Fragment } from "react";

interface GraphicProjectsHeroProps {
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  mobileTitle?: string | React.ReactNode;
  mobileSubtitle?: string | React.ReactNode;
}

export default function GraphicProjectsHero({
  title = "Khám phá những\nthiết kế định hình giá\ntrị thương hiệu.",
  subtitle = "Những thiết kế được tạo ra từ\ntư duy chiến lược, thẩm mỹ\ncao và tính ứng dụng rõ ràng.",
  mobileTitle,
  mobileSubtitle,
}: GraphicProjectsHeroProps) {
  // Nếu không có mobileTitle/mobileSubtitle riêng, dùng chung với desktop
  const finalMobileTitle = mobileTitle ?? title;
  const finalMobileSubtitle = mobileSubtitle ?? subtitle;

  // Helper function để render text với line breaks
  const renderText = (text: string | React.ReactNode) => {
    if (typeof text === "string") {
      // Sử dụng whiteSpace: pre-line để xử lý \n tự động
      return text;
    }
    return text;
  };
  return (
    <section
      className="relative w-full bg-black overflow-hidden"
      style={{ minHeight: "400px", height: "190vh" }}
    >
      {/* Container */}
      <div
        className="relative w-full"
        style={{ height: "100%", minHeight: "400px" }}
      >
        {/* ========== WEB VERSION (hidden on mobile, visible on md+) ========== */}
        {/* Vòng tròn nhỏ - vùng sáng ở giữa (z-index thấp hơn, bị vòng tròn to đè lên) */}
        <div
          className="hidden md:block absolute rounded-full"
          style={{
            width: "964px",
            height: "804px",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#FF407D",
            filter: "blur(300px)",
            opacity: 1,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Vòng tròn to - dải hồng lớn (z-index cao hơn) */}
        <div
          className="hidden md:block absolute rounded-full"
          style={{
            width: "3045px",
            height: "3046px",
            top: "-2400px",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(69.64% 100.52% at 50% 10.74%, #000000 0%, #000000 48.4%, #000000 83.76%, #C01F53 88.59%, #FFFFFF 89.74%)",
            backdropFilter: "blur(4px)",
            opacity: 1,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Title chính - Web */}
        <h1
          className="hidden md:block absolute text-white px-4 sm:px-6 md:px-8 lg:px-12"
          style={{
            top: "clamp(80px, 15vh, 209px)",
            left: "50%",
            transform: "translateX(calc(-50% + clamp(-200px, -15vw, 0px)))",
            fontFamily:
              "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "clamp(24px, 4vw, 64px)",
            lineHeight: "135%",
            letterSpacing: "0%",
            opacity: 1,
            zIndex: 10,
            whiteSpace: "pre-line",
          }}
        >
          {renderText(title)}
        </h1>

        {/* Subtitle - Web */}
        <p
          className="hidden md:block absolute text-white px-4 sm:px-6 md:px-8 lg:px-12"
          style={{
            top: "clamp(410px, calc(8vh + 6vw + 190px), 437px)",
            left: "50%",
            transform: "translateX(calc(-50% + clamp(50px, 10vw, 400px)))",
            fontFamily:
              "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "clamp(10px, 1.2vw, 14px)",
            lineHeight: "135%",
            letterSpacing: "0%",
            opacity: 1,
            zIndex: 10,
            whiteSpace: "pre-line",
          }}
        >
          {renderText(subtitle)}
        </p>

        {/* ========== MOBILE VERSION (visible on mobile, hidden on md+) ========== */}
        {/* Vòng tròn nhỏ - Mobile */}
        <div
          className="block md:hidden absolute rounded-full"
          style={{
            width: "300px",
            height: "250px",
            top: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#FF407D",
            filter: "blur(100px)",
            opacity: 1,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Vòng tròn to - Mobile */}
        <div
          className="block md:hidden absolute rounded-full"
          style={{
            width: "800px",
            height: "800px",
            top: "-500px",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(69.64% 100.52% at 50% 10.74%, #000000 0%, #000000 48.4%, #000000 83.76%, #C01F53 88.59%, #FFFFFF 89.74%)",
            backdropFilter: "blur(4px)",
            opacity: 1,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Title chính - Mobile */}
        <h1
          className="block md:hidden absolute text-white px-4"
          style={{
            top: "clamp(40px, 10vh, 100px)",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily:
              "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "clamp(18px, 5vw, 28px)",
            lineHeight: "135%",
            letterSpacing: "0%",
            opacity: 1,
            zIndex: 10,
            textAlign: "center",
            width: "90%",
            maxWidth: "320px",
            whiteSpace: "pre-line",
          }}
        >
          {renderText(finalMobileTitle)}
        </h1>

        {/* Subtitle - Mobile */}
        <p
          className="block md:hidden absolute text-white px-4"
          style={{
            top: "clamp(150px, calc(10vh + 20vw + 10px), 220px)",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily:
              "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "clamp(10px, 2.5vw, 12px)",
            lineHeight: "135%",
            letterSpacing: "0%",
            opacity: 1,
            zIndex: 10,
            textAlign: "center",
            width: "85%",
            maxWidth: "280px",
            whiteSpace: "pre-line",
          }}
        >
          {renderText(finalMobileSubtitle)}
        </p>
      </div>
    </section>
  );
}
