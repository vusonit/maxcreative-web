interface AboutStatItemProps {
  value: string;
  label: string;
}

export default function AboutStatItem({ value, label }: AboutStatItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <span
        className="text-white text-3xl md:text-4xl lg:text-5xl"
        style={{
          fontFamily:
            "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          lineHeight: "1.2",
          letterSpacing: "-5%",
        }}
      >
        {value}
      </span>
      <span
        className="text-white/60 text-xs mt-1"
        style={{
          fontFamily:
            "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
          fontWeight: 300,
          fontStyle: "normal",
          letterSpacing: "0%",
        }}
      >
        {label}
      </span>
    </div>
  );
}
