"use client";

import ArrowIcon from "./ArrowIcon";

interface ServiceCardProps {
  index: string;
  title: string;
  description?: string;
}

export default function ServiceCard({
  index,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div
      className="service-card group relative bg-bgDark overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] w-full"
      style={{
        width: "100%",
        maxWidth: "261px",
        height: "136px",
        padding: "20px",
        gap: "10px",
        paddingBottom: "20px",
        border: "1px solid rgba(255, 255, 255, 0.15)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.maxWidth = "287px";
        e.currentTarget.style.minHeight = "291px";
        e.currentTarget.style.height = "auto";
        e.currentTarget.style.padding = "20px 21px";
        e.currentTarget.style.gap = "40px";
        e.currentTarget.style.borderWidth = "0.5px";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.maxWidth = "261px";
        e.currentTarget.style.height = "136px";
        e.currentTarget.style.minHeight = "auto";
        e.currentTarget.style.padding = "20px";
        e.currentTarget.style.gap = "10px";
        e.currentTarget.style.borderWidth = "1px";
      }}
    >
      {/* Gradient overlay on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
        style={{
          background:
            "linear-gradient(33.13deg, #F0004D 1.58%, #000000 78.08%)",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-between h-full"
        style={{ gap: "inherit" }}
      >
        {/* Top row: index + icon */}
        <div className="flex items-start justify-between gap-2">
          <span
            className="text-textGray text-sm"
            style={{
              fontFamily:
                "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
              fontWeight: 300,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "175%",
              letterSpacing: "0%",
            }}
          >
            {index}
          </span>
          <ArrowIcon
            size={18.56}
            strokeWidth={2}
            className="text-textLight rotate-0 transition-all duration-300 ease-in-out group-hover:text-primary group-hover:rotate-45"
          />
        </div>

        {/* Title */}
        <p
          className="text-textLight text-[18px] md:text-[20px]"
          style={{
            fontFamily:
              "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
            fontWeight: 500,
            fontStyle: "normal",
            lineHeight: "135%",
            letterSpacing: "0%",
          }}
        >
          {title}
        </p>

        {/* Description - chỉ hiện khi hover */}
        {description && (
          <p
            className="text-textLight opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
            style={{
              fontFamily:
                "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
              fontWeight: 300,
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "153%",
              letterSpacing: "2%",
              whiteSpace: "pre-line",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
