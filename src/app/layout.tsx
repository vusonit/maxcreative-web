import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const svnPoppins = localFont({
  src: [
    {
      path: "./fonts/SVN-Poppins (18 fonts)/TTF/SVN-Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/SVN-Poppins (18 fonts)/TTF/SVN-Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SVN-Poppins (18 fonts)/TTF/SVN-Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SVN-Poppins (18 fonts)/TTF/SVN-Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/SVN-Poppins (18 fonts)/TTF/SVN-Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-svn-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MaxCreative Real Estate",
  description: "Website giới thiệu MaxCreative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${svnPoppins.variable} bg-bgDark text-textLight antialiased`}>
          {children}
        <Footer />
      </body>
    </html>
  );
}
