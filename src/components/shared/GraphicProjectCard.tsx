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
        className="group relative w-full aspect-square max-w-[600px] bg-bgDark border border-white/15 overflow-hidden flex items-center justify-center cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
        onClick={onClick}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#70001F] to-black opacity-20 group-hover:opacity-80 transition-opacity duration-500" />
        <ArrowIcon
          size={18}
          strokeWidth={1}
          className="absolute top-[7px] right-[7px] text-white rotate transition-all duration-700 group-hover:text-primary group-hover:rotate-0"
        />
        <p
          className="relative z-10 text-textLight text-[20px] font-medium leading-[1.35] text-center"
          style={{
            fontFamily:
              "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
          }}
        >
          Tất cả dự án
        </p>
      </div>
    );
  }

  return (
    <div
      className="group relative w-full aspect-square max-w-[600px] overflow-hidden cursor-pointer"
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
            "linear-gradient(180deg, rgba(240,0,77,0) 42.17%, #F0004D 100%)",
        }}
      />

      {/* Title - chỉ hiện khi hover */}
      {title && (
        <div className="pointer-events-none absolute left-5 right-5 bottom-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p
            className="text-textLight text-[20px] leading-[1.35] font-medium"
            style={{
              fontFamily:
                "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
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
