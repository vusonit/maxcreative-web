/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import ArrowIcon from "./ArrowIcon";

export default function Footer() {
  const [email, setEmail] = useState("");

  const baseTextStyle: React.CSSProperties = {
    fontFamily: "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
    fontWeight: 300,
    fontStyle: "normal",
    fontSize: "14px",
    lineHeight: "175%",
    letterSpacing: "-1%",
    color: "#FFFFFF",
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: hook up to real subscription later
  };

  return (
    <footer className="bg-bgDark pt-12 md:pt-16 pb-8 md:pb-10 border-t border-white/20">
      <div className="max-w-content mx-auto px-6">
        {/* Top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-10 md:mb-24">
          {/* Left: headline + email */}
          <div className="flex flex-col justify-between">
            <h2
              className="text-white mb-6 md:mb-24 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-tight max-w-[440px]"
              style={{
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                fontWeight: 300,
                lineHeight: "125%",
              }}
            >
              Chỉ một bước để kết nối và mở ra những cơ hội truyền thông –
              <br /> sáng tạo – tạo giá trị!
            </h2>

            <form
              onSubmit={handleSubmit}
              className="relative mt-auto max-w-[440px]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Điền email của bạn tại đây"
                className="w-full bg-transparent pb-2 pr-10 text-white placeholder:text-white/60 focus:outline-none transition-colors"
                style={{
                  ...baseTextStyle,
                  borderBottom: "0.5px solid rgba(255, 255, 255, 0.2)",
                }}
                onFocus={(e) => {
                  e.target.style.borderBottomColor = "rgba(255, 255, 255, 0.4)";
                }}
                onBlur={(e) => {
                  e.target.style.borderBottomColor = "rgba(255, 255, 255, 0.2)";
                }}
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2"
              >
                <ArrowIcon
                  size={10}
                  strokeWidth={1}
                  className="text-white rotate-0 hover:rotate-45 hover:text-primary transition-all duration-300"
                />
              </button>
            </form>
          </div>

          {/* Right: contact + social */}
          <div className="flex flex-col max-w-[470px] lg:ml-16">
            <h3
              className="text-white mb-4 md:mb-6 text-base md:text-lg font-light"
              style={{
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
                fontWeight: 300,
              }}
            >
              Liên hệ
            </h3>

            <div className="flex flex-col gap-2 md:gap-3 mb-6 md:mb-24">
              <p style={baseTextStyle}>(+84) 932 898 222</p>
              <p style={baseTextStyle}>maxcreative.com</p>
              <p style={baseTextStyle}>hi@maxcreative.com</p>
              <p style={baseTextStyle}>
                Viet Tower, 1 Thai Ha, Dong Da, Ha Noi
              </p>
            </div>

            <div className="flex gap-3 md:gap-4">
              <a
                href="#"
                className="flex items-center justify-center transition-opacity hover:opacity-80"
              >
                <Image
                  src="/icons/icon_facebook.svg"
                  alt="Facebook"
                  width={30}
                  height={30}
                  className="brightness-0 invert opacity-70"
                />
              </a>
              <a
                href="#"
                className="flex items-center justify-center transition-opacity hover:opacity-80"
              >
                <Image
                  src="/icons/icon_in.svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  className="brightness-0 invert opacity-70"
                />
              </a>
              <a
                href="#"
                className="flex items-center justify-center transition-opacity hover:opacity-80"
              >
                <Image
                  src="/icons/icon_be.svg"
                  alt="Behance"
                  width={30}
                  height={30}
                  className="brightness-0 invert opacity-70"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t border-white/20 pt-6 md:pt-8"
          style={{ borderTopWidth: "0.5px" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p style={baseTextStyle}>©2025 MaxCreative. All rights reserved.</p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6">
              <p style={baseTextStyle}>(+84) 932 898 222</p>
              <p style={baseTextStyle}>hi@maxcreative.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
