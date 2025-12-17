interface ArrowIconProps {
  size?: number;
  className?: string;
  onClick?: () => void;
  strokeWidth?: number;
}

export default function ArrowIcon({
  size = 18,
  className = "",
  onClick,
  strokeWidth = 2,
}: ArrowIconProps) {
  return (
    <svg
      onClick={onClick}
      className={className}
      style={{ width: size, height: size }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 11 11"
    >
      <path
        d="M0.353516 10.5L10.3535 0.5M10.3535 0.5V10.5M10.3535 0.5L0.353516 0.5"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}


