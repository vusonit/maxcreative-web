export default function HeroSection() {
  return (
    <section
      className="relative w-full min-h-[260px] sm:min-h-[320px] md:h-[600px] lg:h-[800px] overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #F0004D 70%, #FFFFFF 100%)",
        borderRadius: "0px 0px 80px 80px",
      }}
    >
      {/* Main Heading - Center */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <h1
          className="text-white text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[112px] max-w-[320px] sm:max-w-none"
          style={{
            fontFamily:
              "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
            fontWeight: 300,
            fontStyle: "normal",
            lineHeight: "1.1",
            letterSpacing: "0%",
          }}
        >
          BUILT FOR
          <br />
          REAL ESTATE BRANDS
        </h1>
      </div>

      {/* Text Box 1 - Top Left */}
      <div
        className="group absolute z-20 rounded-lg border border-white/20 overflow-hidden hidden md:block"
        style={{
          width: "250px",
          height: "250px",
          left: "166px",
          top: "212px",
          background: "#F0004D1A",
          boxShadow: "0px 4px 4px 0px #DA1353",
          backdropFilter: "blur(4px)",
        }}
      >
        <div
          className="absolute flex items-start gap-2"
          style={{
            width: "185px",
            height: "42px",
            left: "21px",
            top: "15px",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
        >
          <p
            className="text-white flex-1"
            style={{
              fontFamily:
                "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "21px",
              color: "#FFFFFF",
            }}
          >
            Giải mã bất động sản bằng dữ liệu và sáng tạo.
          </p>
        </div>

        {/* Icon bottom-right with hover rotate/color */}
        <div className="absolute bottom-3 right-3">
          <svg
            className="w-[10px] h-[10px] text-white rotate transition-all duration-700 ease-out group-hover:text-primary group-hover:rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 11 11"
          >
            <path d="M0.353516 10.5L10.3535 0.5M10.3535 0.5V10.5M10.3535 0.5L0.353516 0.5" />
          </svg>
        </div>
      </div>

      {/* Text Box 2 - Bottom Right */}
      <div
        className="group absolute z-20 rounded-lg border border-white/20 overflow-hidden hidden md:block"
        style={{
          width: "250px",
          height: "250px",
          right: "166px",
          top: "360px",
          background: "#F0004D1A",
          boxShadow: "0px 4px 4px 0px #DA1353",
          opacity: 1,
          backdropFilter: "blur(4px)",
        }}
      >
        {/* Icon top-right */}
        <div className="absolute top-3 right-3">
          <svg
            className="w-[10px] h-[10px] text-white rotate transition-all duration-300 ease-out group-hover:text-primary group-hover:rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 11 11"
          >
            <path d="M0.353516 10.5L10.3535 0.5M10.3535 0.5V10.5M10.3535 0.5L0.353516 0.5" />
          </svg>
        </div>

        <div
          className="absolute"
          style={{
            width: "185px",
            height: "42px",
            left: "21px",
            bottom: "20px",
            borderColor: "#FFFFFF",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
        >
          <p
            className="text-white text-left"
            style={{
              fontFamily:
                "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
              fontStyle: "normal",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "21px",
              color: "#FFFFFF",
            }}
          >
            Xây dựng giá trị thương hiệu từ nền tảng thị trường.
          </p>
        </div>
      </div>
    </section>
  );
}














