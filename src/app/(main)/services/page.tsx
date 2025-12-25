"use client";

import ServicesContent from "./components/ServicesContent";
import ContentSection from "@/components/shared/ContentSection";
import ProcessCircles from "./components/ProcessCircles";
import ProcessBars from "./components/ProcessBars";
import GraphicContentSection from "@/components/shared/GraphicContentSection";
import PhasesContentSection from "@/components/shared/PhasesContentSection";
import ValueSection from "@/components/shared/ValueSection";
import NavigationGridSection from "@/components/shared/NavigationGridSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesContent />

      <ContentSection
        label="NGHIÊN CỨU THỊ TRƯỜNG"
        heading="Hiểu đúng trước khi làm đúng."
        description="Không có insight đúng, mọi chiến lược đều trở nên cảm tính, nghiên cứu là nền móng giúp thương hiệu đi đúng hướng ngay từ đầu. Chúng tôi kết hợp dữ liệu, quan sát thực tế và kinh nghiệm triển khai để đưa ra những nhận định chính xác, khả thi và sát với mục tiêu kinh doanh."
      />

      <ProcessCircles />

      <ContentSection
        label="ĐỊnh hướng và phát triển nội dung"
        heading="Nội dung dẫn dắt hành trình thương hiệu."
        description="Nội dung nhất quán và giàu ý tưởng giúp thương hiệu tạo niềm tin, giữ tương tác và tạo điểm chạm bền vững với khách hàng. Chúng tôi không chỉ viết nội dung hay mà còn thiết kế trải nghiệm thông điệp – đảm bảo mỗi bài đăng đều phục vụ mục tiêu thương hiệu."
      />

      <ProcessBars />

      <GraphicContentSection
        label="ĐỊnh hướng và phát triển HÌNH ẢNH"
        heading="Biến bản sắc thành trải nghiệm thị giác."
        description="Trong môi trường đa nền tảng, hình ảnh là yếu tố khiến thương hiệu nổi bật ngay trong vài giây đầu tiên, một hệ hình ảnh sắc nét giúp tăng nhận diện và niềm tin. Chúng tôi thiết kế hệ thống hình ảnh đồng nhất, truyền tải bản sắc thương hiệu thông qua từng ấn phẩm và chiến dịch."
      />

      <PhasesContentSection
        label="Truyền thông quảng cáo đa nền tảng"
        heading="Hiệu quả không đến từ may mắn."
        description="Khách hàng hiện diện ở nhiều nền tảng, một chiến dịch hiệu quả cần được đồng bộ, đo lường và tối ưu theo thời gian thực. Chúng tôi lập kế hoạch truyền thông liền mạch trên nhiều kênh, triển khai chiến dịch và tối ưu liên tục dựa trên dữ liệu."
      />

      <ValueSection />

      <NavigationGridSection />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Hide scrollbar for services list */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
