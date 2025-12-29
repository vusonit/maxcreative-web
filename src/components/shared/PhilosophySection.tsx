import AboutStatItem from "./AboutStatItem";
import ContentSection from "./ContentSection";

export default function PhilosophySection() {
  return (
    <section className="relative w-full bg-bgDark">
      <ContentSection
        label="Triết lý vận hành"
        heading="Dám nghĩ, dám làm,
cạnh tranh khác biệt."
        description="Trong một thị trường luôn biến đổi, nơi sáng tạo không còn dừng lại ở ý tưởng mà phải trở thành sức mạnh thúc đẩy kinh doanh, MaxCreative chọn cho mình con đường khác biệt. Chúng tôi không chạy theo xu hướng ngắn hạn, mà xây dựng nền tảng chiến lược vững chắc, nuôi dưỡng ý tưởng bứt phá và đồng hành cùng thương hiệu trên hành trình dài hạn."
      />
      <div className="max-w-content mx-auto px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Empty left column to maintain grid layout */}
          <div></div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
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
