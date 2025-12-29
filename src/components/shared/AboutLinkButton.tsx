import Link from "next/link";
import Image from "next/image";

interface AboutLinkButtonProps {
  href?: string;
  text?: string;
}

export default function AboutLinkButton({
  href = "/about",
  text = "Về chúng tôi",
}: AboutLinkButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 bg-primary text-white px-10 py-1.5 rounded-3xl w-fit mt-4 hover:bg-primary/90 transition-colors"
    >
      <span>{text}</span>
      <Image
        src="/icons/icon_vector_thin.svg"
        alt="arrow"
        width={16}
        height={10}
        className="w-4 h-auto"
      />
    </Link>
  );
}
