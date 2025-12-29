interface ContentSectionProps {
  label: string;
  heading: string;
  description: string;
}

export default function ContentSection({
  label,
  heading,
  description,
}: ContentSectionProps) {
  return (
    <section className="relative w-full bg-bgDark py-16 md:py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <p
              className="text-white uppercase text-xs md:text-sm"
              style={{
                fontFamily: "var(--font-svn-poppins)",
                fontWeight: 300,
                fontStyle: "normal",
              }}
            >
              {label}
            </p>

            {/* Heading */}
            <h2
              className="text-white text-xl md:text-2xl lg:text-3xl xl:text-[40px]"
              style={{
                fontFamily: "var(--font-svn-poppins)",
                fontWeight: 400,
                fontStyle: "normal",
                maxWidth: "460px",
              }}
            >
              {heading}
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Description */}
            <p
              className="text-white text-sm md:text-base lg:text-lg xl:text-[20px]"
              style={{
                fontFamily: "var(--font-svn-poppins)",
                fontWeight: 300,
                fontStyle: "normal",
                maxWidth: "600px",
              }}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
