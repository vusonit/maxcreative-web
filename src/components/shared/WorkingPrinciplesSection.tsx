export default function WorkingPrinciplesSection() {
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
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                fontWeight: 300,
                fontStyle: "normal",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Nguyên tắc làm việc
            </p>

            {/* Heading */}
            <h2
              className="text-white text-xl md:text-2xl lg:text-3xl xl:text-[40px]"
              style={{
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "120%",
                letterSpacing: "0%",
                maxWidth: "460px",
              }}
            >
              Làm việc thật,
              <br />
              tạo kết quả thật.
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Description */}
            <p
              className="text-white text-sm md:text-base lg:text-lg xl:text-[20px]"
              style={{
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                fontWeight: 300,
                fontStyle: "normal",
                lineHeight: "140%",
                letterSpacing: "-1%",
                maxWidth: "600px",
              }}
            >
              Chúng tôi xây dựng mối quan hệ "đối tác" chứ không phải "nhà cung
              cấp": cam kết hiệu suất, minh bạch và báo cáo định kỳ. Chúng tôi
              xem mỗi dự án là một hành trình đồng sáng tạo, nơi dữ liệu, trực
              giác và sự thấu hiểu thị trường cùng vận hành để mang lại hiệu quả
              thực chất. Thay vì những lời hứa chung chung, chúng tôi ưu tiên
              quy trình minh bạch, mục tiêu đo lường được và những tối ưu liên
              tục dựa trên kết quả. Đó là cách chúng tôi xây dựng niềm tin lâu
              dài và tạo nên giá trị bền vững cho từng thương hiệu đồng hành
              cùng chúng tôi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
