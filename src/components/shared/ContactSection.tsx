"use client";

import { useState } from "react";
import Image from "next/image";
import ArrowIcon from "./ArrowIcon";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative w-full bg-black py-16 md:py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bên trái - Form liên hệ */}
          <div className="flex flex-col">
            {/* Tiêu đề */}
            <h2
              className="text-white mb-12"
              style={{
                fontFamily:
                  "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "clamp(28px, 4vw, 40px)",
                lineHeight: "135%",
                letterSpacing: "0%",
                maxWidth: "340px",
              }}
            >
              Chúng tôi luôn
              <br />
              sẵn sàng kết nối.
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Tên của bạn */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tên của bạn"
                  required
                  className="bg-transparent text-white placeholder:text-white/70 pb-2 focus:outline-none transition-colors"
                  style={{
                    fontFamily:
                      "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                    width: "100%",
                    maxWidth: "496px",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
                  }}
                />
              </div>

              {/* Email của bạn */}
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email của bạn"
                  required
                  className="bg-transparent text-white placeholder:text-white/70 pb-2 focus:outline-none transition-colors"
                  style={{
                    fontFamily:
                      "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                    width: "100%",
                    maxWidth: "496px",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
                  }}
                />
              </div>

              {/* Số điện thoại của bạn */}
              <div className="flex flex-col">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Số điện thoại của bạn"
                  required
                  className="bg-transparent text-white placeholder:text-white/70 pb-2 focus:outline-none transition-colors"
                  style={{
                    fontFamily:
                      "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                    width: "100%",
                    maxWidth: "496px",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
                  }}
                />
              </div>

              {/* Lời nhắn */}
              <div className="flex flex-col">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Lời nhắn"
                  className=" text-white placeholder:text-white/70 pb-2 focus:outline-none transition-colors resize-none"
                  style={{
                    fontFamily:
                      "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "14px",
                    lineHeight: "120%",
                    letterSpacing: "0%",
                    width: "100%",
                    maxWidth: "496px",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
                  }}
                />
              </div>

              {/* Nút submit */}
              <button
                type="submit"
                className="flex items-center gap-3 bg-[#F0004D] text-white px-6 py-2 rounded-3xl hover:opacity-90 transition-opacity w-fit"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                }}
              >
                <span>Gửi lời nhắn</span>
                <ArrowIcon size={18} className="text-white rotate-45" />
              </button>
            </form>
          </div>

          {/* Bên phải - Thông tin liên hệ */}
          <div className="grid grid-cols-12 gap-x-8 -gap-y-10">
            {/* Hotline */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
              <h3
                className="text-white"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "20px",
                  lineHeight: "175%",
                  letterSpacing: "0%",
                }}
              >
                Hotline
              </h3>
              <p
                className="text-white"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "175%",
                  letterSpacing: "-1%",
                }}
              >
                (+84) 932 898 222
              </p>
            </div>

            {/* Website */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
              <h3
                className="text-white"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "20px",
                  lineHeight: "175%",
                  letterSpacing: "0%",
                }}
              >
                Website
              </h3>
              <p
                className="text-white"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "175%",
                  letterSpacing: "-1%",
                }}
              >
                maxcreative.com
              </p>
            </div>

            {/* Email */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
              <h3
                className="text-white"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "20px",
                  lineHeight: "175%",
                  letterSpacing: "0%",
                }}
              >
                Email
              </h3>
              <p
                className="text-white"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "175%",
                  letterSpacing: "-1%",
                }}
              >
                hi@maxcreative.com
              </p>
            </div>

            {/* Địa chỉ */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-2">
              <h3
                className="text-white"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "20px",
                  lineHeight: "175%",
                  letterSpacing: "0%",
                }}
              >
                Địa chỉ
              </h3>
              <p
                className="text-white"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                  fontWeight: 300,
                  fontStyle: "normal",
                  fontSize: "14px",
                  lineHeight: "175%",
                  letterSpacing: "-1%",
                }}
              >
                Viet Tower, 1 Thai Ha, Dong Da, Ha Noi
              </p>
            </div>

            {/* Social */}
            <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
              <h3
                className="text-white"
                style={{
                  fontFamily:
                    "var(--font-svn-poppins), 'SVN-Poppins', Poppins, sans-serif",
                  fontWeight: 500,
                  fontStyle: "normal",
                  fontSize: "20px",
                  lineHeight: "175%",
                  letterSpacing: "0%",
                }}
              >
                Social
              </h3>
              <div className="flex gap-4 ">
                {/* Facebook */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/icons/icon_facebook.svg"
                    alt="Facebook"
                    width={30}
                    height={30}
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/icons/icon_in.svg"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                  />
                </a>

                {/* Behance */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Image
                    src="/icons/icon_be.svg"
                    alt="Behance"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
