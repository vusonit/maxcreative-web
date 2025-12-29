"use client";

import ArrowIcon from "./ArrowIcon";

interface ValuePoint {
  number: string;
  heading: string;
  description: string;
}

const VALUE_POINTS: ValuePoint[] = [
  {
    number: "01",
    heading: "Chiến lược đúng ngay từ đầu",
    description:
      "Mọi quyết định đều được xây trên dữ liệu, insight và mục tiêu kinh doanh- giúp thương hiệu buộc đi tự tin, không lãng phí nguồn lực.",
  },
  {
    number: "02",
    heading: "Hệ thống nội dung & hình ảnh nhất quán",
    description:
      "Cách chúng tôi triển khai đảm bảo thương hiệu có một tiếng nói xuyên suốt và một diện mạo rõ ràng trên tất cả các điểm chạm.",
  },
  {
    number: "03",
    heading: "Quy trình chuyên nghiệp, minh bạch",
    description:
      "Kế hoạch rõ ràng, KPI đo được, báo cáo định kỳ và tối ưu liên tục. Bạn luôn biết điều gì đang diễn ra và tại sao.",
  },
  {
    number: "04",
    heading: "Giải pháp linh hoạt theo từng giai đoạn phát triển",
    description:
      "Không áp mẫu không rập khuôn, mỗi đề xuất đều được thiết kế riêng cho ngành, thị trường và mục tiêu của bạn.",
  },
  {
    number: "05",
    heading: "Đội ngũ tận tâm, chủ động đề xuất",
    description:
      'Chúng tôi không chỉ "làm theo brief" mà luôn suy nghĩ thêm một bước để mang đến kết quả vượt kỳ vọng.',
  },
];

export default function ValueSection() {
  return (
    <section className="relative w-full bg-black py-16 md:py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Cột trái: Title và Button */}
          <div className="flex flex-col gap-8">
            {/* Title */}
            <h2
              className="text-white"
              style={{
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "40px",
                lineHeight: "120%",
                letterSpacing: "-2%",
                maxWidth: "412px",
                minHeight: "144px",
              }}
            >
              Giá trị bạn nhận được khi hợp tác cùng chúng tôi
            </h2>

            {/* Call-to-Action Button */}
            <button
              className="flex items-center justify-center gap-2 rounded-3xl transition-all duration-300 hover:opacity-90"
              style={{
                background: "#FF0066",
                width: "198.8847198486328px",
                height: "37px",
              }}
            >
              <span
                className="text-white"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "-2%",
                  textAlign: "center",
                }}
              >
                Liên hệ ngay
              </span>
              <ArrowIcon size={10.525} strokeWidth={1} className="text-white" />
            </button>
          </div>

          {/* Cột phải: Danh sách 5 điểm */}
          <div className="flex flex-col">
            {VALUE_POINTS.map((point, index) => (
              <div key={point.number}>
                {index < VALUE_POINTS.length && (
                  <div
                    className="w-full"
                    style={{
                      height: "1px",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  />
                )}
                <div className="flex flex-col gap-4 py-4">
                  {/* Số thứ tự và Heading */}
                  <div className="flex items-center gap-0">
                    {/* Số thứ tự */}
                    <span
                      className="text-gray-400 shrink-0"
                      style={{
                        fontFamily:
                          "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontSize: "16px",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      {point.number}
                    </span>

                    {/* Heading */}
                    <h3
                      className="text-white"
                      style={{
                        fontFamily:
                          "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                        fontWeight: 500,
                        fontStyle: "normal",
                        fontSize: "20px",
                        lineHeight: "175%",
                        letterSpacing: "0%",
                        marginLeft: "70px",
                      }}
                    >
                      {point.heading}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="text-white"
                    style={{
                      marginLeft: "90px",
                      fontFamily:
                        "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                      fontWeight: 300,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "175%",
                      letterSpacing: "0%",
                    }}
                  >
                    {point.description}
                  </p>
                </div>

                {/* Đường phân cách (không có ở điểm cuối) */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
