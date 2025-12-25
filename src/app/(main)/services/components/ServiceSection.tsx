"use client";

import ServiceItem from "./ServiceItem";

export interface ServiceSectionProps {
  title: string;
  sectionId: string;
  width: string;
  items: Array<{ text: string; translateX: number }>;
  hoveredSection: string | null;
  setHoveredSection: (sectionId: string | null) => void;
}

export default function ServiceSection({
  title,
  sectionId,
  width,
  items,
  hoveredSection,
  setHoveredSection,
}: ServiceSectionProps) {
  return (
    <div
      className="relative shrink-0"
      style={{ width }}
      onMouseEnter={() => setHoveredSection(sectionId)}
      onMouseLeave={() => setHoveredSection(null)}
    >
      {/* Border Left - dài hết section */}
      <div
        style={{
          position: "absolute",
          width: "0px",
          height: "190px",
          borderLeft: "0.25px solid #FFFFFF",
          top: "0px",
          left: "0px",
          opacity: 1,
          zIndex: 1,
        }}
      />
      {/* Title */}
      <div className="relative w-full">
        {/* Border Top */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            opacity: 1,
            zIndex: 1,
            pointerEvents: "none",
            // borderTop: "1px solid #FFFFFF",
            top: "0px",
            left: "0px",
          }}
        />
        <h2
          className="text-white relative z-10"
          style={{
            fontFamily:
              "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "-1.9%",
            paddingTop: "8px",
            marginLeft: "10px",
            marginBottom: "0",
          }}
        >
          {title}
        </h2>
      </div>

      {/* List Items Container */}
      <div className="mt-3 ml-[9px] flex flex-col gap-[9px]">
        {items.map((item, index) => (
          <ServiceItem
            key={index}
            text={item.text}
            translateX={item.translateX}
            sectionId={sectionId}
            hoveredSection={hoveredSection}
          />
        ))}
      </div>
    </div>
  );
}
