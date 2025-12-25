"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface HeaderProps {
  variant?: "default" | "transparent";
}

export default function Header({ variant = "default" }: HeaderProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"VN" | "EN">("VN");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const last = lastScrollY.current;

      // Hide when scrolling down, show when scrolling up
      if (current > last && current > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "Về chúng tôi" },
    { href: "/services", label: "Dịch vụ" },
    { href: "/graphic-projects", label: "Dự án đồ họa" },
    { href: "/tvc-projects", label: "Dự án TVC" },
    { href: "/contact", label: "Liên hệ" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const headerClasses = [
    "fixed top-0 left-0 right-0 z-50",
    "transition-transform duration-300",
    isVisible ? "translate-y-0" : "-translate-y-full",
    variant === "transparent"
      ? "bg-transparent"
      : "bg-bgDark/80 backdrop-blur-sm border-b border-white/10",
  ].join(" ");

  return (
    <header className={headerClasses}>
      <nav className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo_maxcreative.svg"
            alt="MaxCreative"
            width={150}
            height={25}
            className="h-6 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isActive(link.href)
                  ? "text-primary font-medium"
                  : "text-textLight hover:text-primary"
              }`}
            >
              {link.label}
          </Link>
          ))}
        </div>

        {/* Language Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLanguage("VN")}
              className={`text-sm font-medium transition-colors ${
                language === "VN" ? "text-primary" : "text-textGray"
              }`}
            >
              VN
            </button>
            <span className="text-textGray">|</span>
            <button
              type="button"
              onClick={() => setLanguage("EN")}
              className={`text-sm font-medium transition-colors ${
                language === "EN" ? "text-primary" : "text-textGray"
              }`}
            >
              EN
            </button>

            {/* Indicator dots 18x19px */}
            <div
              className={`relative w-[18px] h-[19px] origin-center transition-transform duration-300 ${
                language === "VN" ? "rotate-0" : "rotate-180"
              }`}
            >
              {/* Big dot: VN = góc trên bên phải, EN = góc dưới bên trái (sau khi xoay 180deg) */}
              <span className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full bg-primary lang-dot-active transition-all duration-300" />
              {/* Small dot: VN = góc dưới bên trái, EN = góc trên bên phải (sau khi xoay 180deg) */}
              <span className="absolute bottom-0 left-0 w-[8px] h-[8px] rounded-full bg-primary transition-all duration-300" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-textLight p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bgDark/95 backdrop-blur-sm border-t border-white/10">
          <nav className="max-w-content mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors py-2 ${
                  isActive(link.href)
                    ? "text-primary font-medium"
                    : "text-textLight hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
