import Link from "next/link";
import StatisticItem from "@/components/shared/StatisticItem";

export default function AboutVideoSection() {
  return (
    <>
      {/* About Section */}
      <section
        className="relative w-full min-h-[600px] md:h-[800px] overflow-hidden py-12 md:py-0"
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F0004D 15%, #3C0013 60%, #000000 100%)",
          borderTopLeftRadius: "80px",
          borderTopRightRadius: "80px",
        }}
      >
        <div className="max-w-content mx-auto px-6 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
            {/* Left Section - Text Content */}
            <div className="flex flex-col w-full max-w-[496px] lg:w-[496px] gap-6 lg:gap-[34px]">
              {/* Main Heading */}
              <h2
                className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-[48px]"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                  fontWeight: 300,
                  lineHeight: "1.1",
                  letterSpacing: "0%",
                }}
              >
                Chúng tôi luôn khát khao vượt qua giới hạn để tạo nên những giá
                trị đột phá và khác biệt.
              </h2>

              {/* First Paragraph */}
              <p
                className="text-white"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "justify",
                }}
              >
                Thành lập từ 2022, MaxCreative là đối tác sáng tạo chuyên cung
                cấp giải pháp marketing & truyền thông trọn gói cho các doanh
                nghiệp và chủ đầu tư bất động sản.
              </p>

              {/* Second Paragraph */}
              <p
                className="text-white"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "justify",
                }}
              >
                Từ ý tưởng, nội dung đến hình ảnh, chúng tôi biến chiến lược
                thành sản phẩm sáng tạo tối ưu cho bán hàng & thương hiệu.
              </p>

              {/* CTA Button */}
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-1.5 rounded-3xl w-fit mt-4 hover:bg-primary/90 transition-colors"
              >
                <span>Về chúng tôi</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>

            {/* Right Section - Statistics */}
            <div className="flex flex-col gap-6 lg:gap-12">
              <StatisticItem label="Đội ngũ chuyên gia" value={60} />
              <StatisticItem label="Dự án sáng tạo" value={120} />
              <StatisticItem
                label="Ấn phẩm truyền thông mỗi năm"
                value={3000}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative w-full bg-bgDark py-8 md:py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div
            className="relative w-full mx-auto"
            style={{
              maxWidth: "1440px",
              maxHeight: "800px",
              aspectRatio: "1440/802",
            }}
          >
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/xxioHPI0B_U"
              title="MaxCreative Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}





