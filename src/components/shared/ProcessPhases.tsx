"use client";

import { useState, useEffect, useRef } from "react";

interface PhaseBox {
  text: string;
  color: "gray" | "pink";
  startColumn: number;
  endColumn?: number;
  topPosition: string;
}

interface Phase {
  title: string;
  startColumn: number;
  endColumn: number;
  boxes: PhaseBox[];
}

const PHASES: Phase[] = [
  {
    title: "Giai đoạn 1",
    startColumn: 1,
    endColumn: 2,
    boxes: [
      {
        text: "Lập chiến lược & phân bổ ngân sách",
        color: "gray",
        startColumn: 1,
        endColumn: 2,
        topPosition: "40px", // Gần đầu cột
      },
    ],
  },
  {
    title: "Giai đoạn 2",
    startColumn: 3,
    endColumn: 4,
    boxes: [
      {
        text: "Xây dựng cấu trúc chiến dịch",
        color: "pink",
        startColumn: 3,
        endColumn: 3,
        topPosition: "80px",
      },
      {
        text: "Chuẩn hoá tracking",
        color: "gray",
        startColumn: 4,
        endColumn: 4,
        topPosition: "200px",
      },
    ],
  },
  {
    title: "Giai đoạn 3",
    startColumn: 5,
    endColumn: 6,
    boxes: [
      {
        text: "Triển khai & theo dõi",
        color: "pink",
        startColumn: 5,
        endColumn: 5,
        topPosition: "90px", // Ở giữa chiều cao
      },
      {
        text: "Tối ưu theo thời gian thực",
        color: "pink",
        startColumn: 5,
        endColumn: 5,
        topPosition: "140px", // Ngay dưới box trên
      },
    ],
  },
  {
    title: "Giai đoạn 4",
    startColumn: 7,
    endColumn: 8,
    boxes: [
      {
        text: "Đánh giá chuyên sâu",
        color: "gray",
        startColumn: 7,
        endColumn: 7,
        topPosition: "140px",
      },
      {
        text: "Báo cáo & tinh chỉnh chiến lược",
        color: "pink",
        startColumn: 7,
        endColumn: 7,
        topPosition: "190px",
      },
    ],
  },
];

export default function ProcessPhases() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = containerRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "100px 0px",
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getBoxStyle = (box: PhaseBox, columnWidth: number, gap: number) => {
    const left = (box.startColumn - 1) * (columnWidth + gap);
    const maxWidth =
      box.endColumn && box.endColumn > box.startColumn
        ? (box.endColumn - box.startColumn + 1) * columnWidth +
          (box.endColumn - box.startColumn) * gap
        : columnWidth * 2; // Cho phép box mở rộng hơn nếu cần

    const backgroundColor =
      box.color === "pink"
        ? "linear-gradient(90deg, #F0004D 0%, rgba(240, 0, 77, 0) 100%)"
        : "linear-gradient(90deg, rgba(137, 137, 137, 0.4) 0%, rgba(137, 137, 137, 0) 100%)";

    return {
      position: "absolute" as const,
      left: `${left}px`,
      width: "auto", // Tự động fit với text
      maxWidth: `${maxWidth}px`,
      top: box.topPosition,
      background: backgroundColor,
      borderRadius: "4px",
      paddingTop: "0px",
      paddingBottom: "0px",
      paddingLeft: "16px", // px-4
      paddingRight: "16px", // px-4
      height: "41.831825256347656px",
      display: "inline-flex",
      alignItems: "center",
      whiteSpace: "nowrap",
      zIndex: 1, // Đảm bảo box nằm trên border
      transform: isInView ? "translateX(50px)" : "translateX(0)",
      transition: "transform 0.8s ease-in-out",
    };
  };

  const columnWidth = 120; // Width mỗi cột
  const gap = 16; // Khoảng cách giữa các cột
  const totalWidth = 9 * columnWidth + 8 * gap; // 9 cột + 8 gap

  return (
    <section ref={sectionRef} className="relative w-full bg-black">
      <div className="max-w-content mx-auto px-6">
        <div className="relative" style={{ minHeight: "400px" }}>
          {/* Container với 9 cột */}
          <div
            ref={containerRef}
            className="relative"
            style={{
              width: `${totalWidth}px`,
              maxWidth: "100%",
            }}
          >
            {/* Các thanh dọc chia cột - 9 thanh (bao gồm 2 bên và 7 giữa) */}
            {Array.from({ length: 9 }).map((_, index) => {
              const leftPosition = index * (columnWidth + gap);
              return (
                <div
                  key={index}
                  className="absolute top-0"
                  style={{
                    left: `${leftPosition}px`,
                    width: "1px",
                    height: "300px",
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                    opacity: 1,
                    zIndex: 1,
                    pointerEvents: "none",
                  }}
                />
              );
            })}

            {/* Border left đặc biệt */}
            {/* <div
              className="absolute"
              style={{
                width: "1px",
                height: "304.58798217773443px",
                top: "36.41px",
                left: "365.85px",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                opacity: 1,
                zIndex: 1,
                pointerEvents: "none",
              }}
            /> */}

            {/* Tiêu đề giai đoạn - nằm bên trên và bên ngoài, ở vị trí thanh 1, 3, 5, 7 */}
            {PHASES.map((phase, phaseIndex) => {
              // Vị trí thanh: 1, 3, 5, 7 tương ứng với index 0, 2, 4, 6
              const barIndex = phaseIndex * 2; // 0, 2, 4, 6
              const barLeft = barIndex * (columnWidth + gap);
              // Đẩy ra bên ngoài (bên trái) một chút
              const textLeft = barLeft;
              return (
                <h3
                  key={phase.title}
                  className="absolute text-white"
                  style={{
                    left: `${textLeft}px`,
                    top: "-26px",
                    fontFamily:
                      "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    textAlign: "left",
                    whiteSpace: "nowrap",
                  }}
                >
                  {phase.title}
                </h3>
              );
            })}

            {/* Các box */}
            {PHASES.map((phase) =>
              phase.boxes.map((box, boxIndex) => (
                <div
                  key={`${phase.title}-${boxIndex}`}
                  style={getBoxStyle(box, columnWidth, gap)}
                >
                  <p
                    className="text-white whitespace-nowrap"
                    style={{
                      fontFamily:
                        "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                      fontWeight: 300,
                      fontStyle: "normal",
                      fontSize: "14px",
                      lineHeight: "100%",
                      letterSpacing: "-2%",
                    }}
                  >
                    {box.text}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
