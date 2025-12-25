"use client";

import Image from "next/image";

export interface ServiceItemProps {
  text: string;
  translateX: number;
  sectionId: string;
  hoveredSection: string | null;
}

export default function ServiceItem({
  text,
  translateX,
  sectionId,
  hoveredSection,
}: ServiceItemProps) {
  return (
    <div
      className="flex items-center gap-[9px] px-[3px] py-[3px] transition-transform duration-300 ease-out"
      style={{
        width: "100%",
        maxWidth: "268px",
        height: "25px",
        borderRadius: "92px",
        background: "#161616",
        transform:
          hoveredSection === sectionId
            ? `translateX(${translateX}px)`
            : "translateX(0)",
      }}
    >
      {/* Circular view with icon */}
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: "19px",
          height: "19px",
          borderRadius: "50%",
          background: "#C7C7C7",
        }}
      >
        <Image src="/icons/icon_vector.svg" alt="Icon" width={6} height={6} />
      </div>
      {/* Text */}
      <p
        className="text-white flex-1"
        style={{
          fontFamily:
            "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
          fontWeight: 300,
          fontStyle: "normal",
          fontSize: "12px",
          lineHeight: "100%",
          letterSpacing: "-1.9%",
        }}
      >
        {text}
      </p>
    </div>
  );
}

