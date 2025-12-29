"use client";

import { useState, useEffect, useRef } from "react";

interface ProcessLabelProps {
  text: string;
  top: string;
  left: string;
  transform?: string;
  zIndex?: number;
  isActive?: boolean;
  circlePosition?: "left" | "center" | "right";
  hoverOffset?: number; // Điều chỉnh mức độ dịch chuyển riêng (default: 15 cho %, 50 cho px)
}

function ProcessLabel({
  text,
  top,
  left,
  transform = "translate(-50%, -50%)",
  zIndex,
  isActive = false,
  circlePosition = "center",
  hoverOffset,
}: ProcessLabelProps) {
  // Tính toán left khi active (scroll vào view)
  const getActiveLeft = () => {
    if (!isActive) return left;

    // Parse left value
    const isPercentage = left.includes("%");
    const isPixel = left.includes("px");
    const numericValue = parseFloat(left);

    // Sử dụng hoverOffset nếu có, nếu không dùng giá trị mặc định
    const offsetPercentage = hoverOffset !== undefined ? hoverOffset : 15;
    const offsetPixel = hoverOffset !== undefined ? hoverOffset : 50;

    if (circlePosition === "left") {
      // Label vòng tròn 1: tăng % left (dịch sang phải)
      if (isPercentage) {
        return `${numericValue + offsetPercentage}%`;
      } else if (isPixel) {
        // Với pixel, dịch sang phải = tăng giá trị (giảm giá trị âm)
        return `${numericValue + offsetPixel}px`;
      }
      return left;
    } else if (circlePosition === "right") {
      // Label vòng tròn 3: giảm % left (dịch sang trái)
      if (isPercentage) {
        return `${numericValue - offsetPercentage}%`;
      } else if (isPixel) {
        // Với pixel, dịch sang trái = giảm giá trị
        return `${numericValue - offsetPixel}px`;
      }
      return left;
    } else if (circlePosition === "center" && hoverOffset !== undefined) {
      // Label vòng tròn 2: có thể điều chỉnh nếu có hoverOffset
      if (isPercentage) {
        return `${numericValue - offsetPercentage}%`; // Giảm % = dịch sang trái
      } else if (isPixel) {
        return `${numericValue - offsetPixel}px`;
      }
      return left;
    }
    // Label vòng tròn 2: giữ nguyên nếu không có hoverOffset
    return left;
  };

  return (
    <div
      className="absolute transition-all ease-in-out"
      style={{
        top,
        left: getActiveLeft(),
        transform,
        zIndex: zIndex ?? 10, // Mặc định z-index cao để nằm trên các vòng tròn
        transitionDuration: "1500ms", // Chậm hơn để cảm nhận rõ hơn
      }}
    >
      <div
        className="bg-[#FF0066] rounded-full flex items-center justify-center px-4"
        style={{
          width: "auto",
          height: "32px",
          paddingTop: "10px",
          paddingBottom: "10px",
          gap: "10px",
          borderRadius: "200px",
        }}
      >
        <p
          className="text-white text-center whitespace-nowrap"
          style={{
            fontFamily:
              "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
            fontWeight: 300,
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default function ProcessCircles() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.3, // Kích hoạt khi 30% section vào viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black pb-16 md:pb-24"
    >
      <div className="max-w-content mx-auto px-6">
        <div className="flex items-center justify-center gap-[-20px] md:gap-[-40px] lg:gap-[-60px]">
          {/* Vòng tròn 1 - Thu thập */}
          <div className="relative shrink-0">
            <div
              className="relative rounded-full flex flex-col items-center justify-center"
              style={{
                width: "372px",
                height: "372px",
                border: "0.25px solid #FFFFFF",
              }}
            >
              {/* Title */}
              <h3
                className="text-white absolute"
                style={{
                  top: "24px",
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                Thu thập
              </h3>

              {/* Label "Dữ liệu về hành vi khách hàng" - nửa trên vòng tròn 1 */}
              <ProcessLabel
                text="Dữ liệu về hành vi khách hàng"
                top="35%"
                left="50%"
                isActive={isInView}
                circlePosition="left"
                hoverOffset={35}
                zIndex={10}
              />
            </div>
          </div>

          {/* Vòng tròn 2 - Phân tích */}
          <div className="relative shrink-0">
            <div
              className="relative rounded-full flex flex-col items-center justify-center"
              style={{
                width: "372px",
                height: "372px",
                border: "0.25px solid #FFFFFF",
                marginLeft: "-30px",
                zIndex: 2,
              }}
            >
              {/* Title */}
              <h3
                className="text-white absolute"
                style={{
                  top: "24px",
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                Phân tích
              </h3>

              {/* Label "Các hoạt động truyền thông" - giữa vòng tròn 2 */}
              <ProcessLabel
                text="Các hoạt động truyền thông"
                top="50%"
                left="50%"
                isActive={isInView}
                circlePosition="center"
                zIndex={10}
              />

              {/* Label "Chân dung khách hàng mục tiêu và hành trình mua hàng" - nửa dưới vòng tròn 2 */}
              <ProcessLabel
                text="Chân dung khách hàng mục tiêu và hành trình mua hàng"
                top="65%"
                left="70%"
                isActive={isInView}
                circlePosition="center"
                hoverOffset={8}
                zIndex={10}
              />

              {/* Label "Đối thủ" - nằm đè lên khoảng giao nhau vòng tròn 1 và 2, sát cạnh "Các hoạt động truyền thông" */}
              <ProcessLabel
                text="Đối thủ"
                top="50%"
                left="-30px"
                transform="translateY(-50%)"
                zIndex={10}
                isActive={isInView}
                circlePosition="left"
                hoverOffset={20}
              />
            </div>
          </div>

          {/* Vòng tròn 3 - Đánh giá */}
          <div className="relative shrink-0">
            <div
              className="relative rounded-full flex flex-col items-center justify-center"
              style={{
                width: "372px",
                height: "372px",
                border: "0.25px solid #FFFFFF",
                marginLeft: "-30px",
                zIndex: 1,
              }}
            >
              {/* Title */}
              <h3
                className="text-white absolute"
                style={{
                  top: "24px",
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                Đánh giá
              </h3>

              {/* Label "Thị trường, xu hướng và cơ hội tăng trưởng" - nửa dưới vòng tròn 3, thấp hơn "Chân dung..." */}
              <ProcessLabel
                text="Thị trường, xu hướng và cơ hội tăng trưởng"
                top="75%"
                left="35%"
                zIndex={100}
                isActive={isInView}
                circlePosition="right"
                hoverOffset={35}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
