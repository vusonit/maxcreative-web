interface StatisticItemProps {
  label: string;
  value: string | number;
}

export default function StatisticItem({ label, value }: StatisticItemProps) {
  return (
    <div className="group relative">
      <div className="flex items-baseline justify-between md:block">
        <p
          className="text-white mb-1 md:mb-2"
          style={{
            fontFamily:
              "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0%",
          }}
        >
          {label}
        </p>
        <div className="flex items-start gap-2 md:gap-4 md:mt-1">
          <span
            className="text-white text-4xl md:text-6xl lg:text-9xl xl:text-[150px]"
            style={{
              fontFamily:
                "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
              fontWeight: 300,
              fontStyle: "normal",
              lineHeight: "113px",
              letterSpacing: "-8%",
            }}
          >
            {value}
          </span>
          <div className="mt-1 md:mt-2">
            <svg
              className="w-[18px] h-[18px] md:w-[30px] md:h-[30px] text-white rotate transition-all duration-700 ease-out group-hover:text-primary group-hover:rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 11 11"
            >
              <path d="M0.353516 10.5L10.3535 0.5M10.3535 0.5V10.5M10.3535 0.5L0.353516 0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
