import Image from "next/image";
import ArrowIcon from "./ArrowIcon";

interface GraphicProjectCardProps {
  imageSrc?: string;
  title?: string;
  isMore?: boolean;
  onClick?: () => void;
}

export default function GraphicProjectCard({
  imageSrc,
  title,
  isMore = false,
  onClick,
}: GraphicProjectCardProps) {
  if (isMore) {
    return (
      <div
        className="group relative w-full aspect-square  bg-bgDark border border-white/15 overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
        onClick={onClick}
      >
        {/* Gradient overlay - chỉ hiện khi hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(to top right, rgba(240, 0, 77, 0.85) 0%, rgba(240, 0, 77, 0.75) 20%, rgba(240, 0, 77, 0.5) 35%, rgba(120, 0, 38, 0.4) 50%, rgba(40, 0, 13, 0.5) 65%, rgba(0, 0, 0, 0.65) 80%, rgba(0, 0, 0, 0.8) 100%)",
          }}
        />
        <ArrowIcon
          size={30}
          strokeWidth={1}
          className="absolute top-[30px] right-[30px] text-white rotate transition-all duration-700 group-hover:text-primary group-hover:rotate-0"
        />
        <p
          className="relative z-10 text-textLight text-[20px] font-medium leading-[1.35] text-center"
          style={{
            fontFamily: "var(--font-svn-poppins)",
          }}
        >
          Tất cả dự án
        </p>
      </div>
    );
  }

  return (
    <div
      className="group relative w-full aspect-square  overflow-hidden cursor-pointer "
      onClick={onClick}
    >
      {/* Image */}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={title || "Dự án"}
          fill
          className="object-cover origin-bottom-right transition-transform duration-700 ease-out group-hover:scale-110"
        />
      )}

      {/* Gradient overlay - chỉ hiện khi hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(to top right, rgba(240, 0, 77, 0.85) 0%, rgba(240, 0, 77, 0.75) 20%, rgba(240, 0, 77, 0.5) 35%, rgba(120, 0, 38, 0.4) 50%, rgba(40, 0, 13, 0.5) 65%, rgba(0, 0, 0, 0.65) 80%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      />

      {/* Title - chỉ hiện khi hover */}
      {title && (
        <div className="pointer-events-none absolute left-5 right-5 bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p
            className="text-textLight text-[20px] leading-[1.35] font-medium"
            style={{
              fontFamily: "var(--font-svn-poppins)",
            }}
          >
            {title.split("\n").map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}
