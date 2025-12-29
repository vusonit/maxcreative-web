import Image from "next/image";
import ServiceCard from "./ServiceCard";

export default function OrbitSection() {
  return (
    <section className="relative w-full bg-bgDark py-16">
      <div className="max-w-content mx-auto px-6">
        {/* Top: Heading + Orbit */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Heading */}
          <div className="flex justify-start">
            <h2
              className="text-textLight text-[28px] md:text-[32px] lg:text-[40px]"
              style={{
                maxWidth: "570px",
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            >
              Những gì chúng tôi làm, và làm tốt hơn bất kỳ ai trong lĩnh vực
              bất động sản.
            </h2>
          </div>

          {/* Right: Orbit Animation */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[320px] md:max-w-[420px] lg:max-w-[512px] aspect-square">
              {/* Outer dashed orbit */}
              <div className="absolute inset-0 rounded-full border border-white/10 border-dashed orbit-ccw-slow">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-2 h-2 rounded-full bg-[#5E001E]" />
              </div>

              {/* Middle solid orbit (vòng 3) */}
              <div className="absolute inset-[14%] rounded-full border border-white/15 orbit-cw">
                {/* Darker dot trên đường kẻ vòng 3 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-[-50%] w-2 h-2 rounded-full bg-[#5E001E]" />
              </div>

              {/* Inner solid orbit (vòng 1) với 2 điểm tròn kép nằm trên đường kẻ, đối diện nhau */}
              <div className="absolute inset-[28%] rounded-full border border-white/20 orbit-ccw-fast">
                {/* Composite dot 1 - bên phải, trên đường kẻ */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
                  <div className="flex items-center justify-center rounded-full border border-primary/60 w-[13px] h-[13px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-primary shadow-[0_0_8px_rgba(240,0,77,0.9)]" />
                  </div>
                </div>

                {/* Composite dot 2 - bên trái, đối diện dot 1 trên cùng quỹ đạo */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
                  <div className="flex items-center justify-center rounded-full border border-primary/60 w-[13px] h-[13px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-primary shadow-[0_0_8px_rgba(240,0,77,0.9)]" />
                  </div>
                </div>
              </div>

              {/* Center glow */}
              <div className="absolute inset-[40%] rounded-full bg-primary-soft blur-3xl" />

              {/* Center icon with red wrap */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shadow-[0_0_24px_rgba(240,0,77,0.9)]">
                  <Image
                    src="/icons/icon_max_base.svg"
                    alt="MaxCreative Core"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Service Cards */}
        <div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            gap: "clamp(6px, 0.75vw, 30px)",
          }}
        >
          <ServiceCard
            index="01"
            title="Nghiên cứu thị trường"
            description={`→ Đưa ra giải pháp & định hướng hình ảnh thương hiệu tổng thể.
→ Thiết kế ấn phẩm truyền thông cho quảng cáo trực tuyến và trực tiếp.
→ Thiết kế hình ảnh nhận diện cho các chiến dịch truyền thông.`}
          />
          <ServiceCard
            index="02"
            title="Định hướng & phát triển nội dung"
            description={`→ Đưa ra giải pháp & định hướng hình ảnh thương hiệu tổng thể.
→ Thiết kế ấn phẩm truyền thông cho quảng cáo trực tuyến và trực tiếp.
→ Thiết kế hình ảnh nhận diện cho các chiến dịch truyền thông.`}
          />
          <ServiceCard
            index="03"
            title="Định hướng & phát triển hình ảnh"
            description={`→ Đưa ra giải pháp & định hướng hình ảnh thương hiệu tổng thể.
→ Thiết kế ấn phẩm truyền thông cho quảng cáo trực tuyến và trực tiếp.
→ Thiết kế hình ảnh nhận diện cho các chiến dịch truyền thông.`}
          />
          <ServiceCard
            index="04"
            title="Truyền thông quảng cáo đa nền tảng"
            description={`→ Đưa ra giải pháp & định hướng hình ảnh thương hiệu tổng thể.
→ Thiết kế ấn phẩm truyền thông cho quảng cáo trực tuyến và trực tiếp.
→ Thiết kế hình ảnh nhận diện cho các chiến dịch truyền thông.`}
          />
        </div>
      </div>
    </section>
  );
}
