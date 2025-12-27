import AboutStatItem from "./AboutStatItem";

export default function PhilosophySection() {
  return (
    <section className="relative w-full bg-bgDark pb-16 md:pb-24">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <p
              className="text-white uppercase text-xs md:text-sm"
              style={{
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                fontWeight: 300,
                fontStyle: "normal",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Triết lý vận hành
            </p>

            {/* Heading */}
            <h2
              className="text-white text-xl md:text-2xl lg:text-3xl xl:text-[40px]"
              style={{
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "120%",
                letterSpacing: "0%",
                maxWidth: "460px",
              }}
            >
              Dám nghĩ, dám làm,
              <br />
              cạnh tranh khác biệt.
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Description */}
            <p
              className="text-white text-sm md:text-base lg:text-lg xl:text-[20px]"
              style={{
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                fontWeight: 300,
                fontStyle: "normal",
                lineHeight: "140%",
                letterSpacing: "-1%",
                maxWidth: "600px",
              }}
            >
              Trong một thị trường luôn biến đổi, nơi sáng tạo không còn dừng
              lại ở ý tưởng mà phải trở thành sức mạnh thúc đẩy kinh doanh,
              MaxCreative chọn cho mình con đường khác biệt. Chúng tôi không
              chạy theo xu hướng ngắn hạn, mà xây dựng nền tảng chiến lược vững
              chắc, nuôi dưỡng ý tưởng bứt phá và đồng hành cùng thương hiệu
              trên hành trình dài hạn.
            </p>

            {/* Divider Line */}
            <div className="w-full border-t border-white/20" />

            {/* Stats Row */}
            <div className="flex w-full items-start justify-between gap-4 md:gap-8 lg:gap-12">
              <AboutStatItem value="60+" label="nhân sự" />
              <AboutStatItem value="120+" label="dự án triển khai" />
              <AboutStatItem value="10 năm" label="kinh nghiệm trong ngành" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
