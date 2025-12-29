import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

interface NavigationTileProps {
  href: string;
  children?: React.ReactNode;
  isFeatured?: boolean;
  imageSrc?: string;
  logoSrc?: string;
}

function NavigationTile({
  href,
  children,
  isFeatured = false,
  imageSrc,
  logoSrc,
}: NavigationTileProps) {
  return (
    <Link
      href={href}
      className={`group relative aspect-square border border-white/10 overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] ${
        isFeatured ? "bg-primary" : "bg-bgDark"
      }`}
    >
      {/* Background Image */}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover opacity-50 group-hover:opacity-70 transition-opacity"
        />
      )}

      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          isFeatured
            ? "bg-gradient-to-br from-primary/80 via-primary/60 to-primary/40"
            : "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center p-6">
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt=""
            width={120}
            height={30}
            className="w-full h-auto max-h-6 object-contain brightness-0 invert"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        ) : (
          <p
            className={`text-center ${
              isFeatured ? "text-white" : "text-textLight"
            } text-lg font-medium`}
            style={{
              fontFamily:
                "var(--font-svn-poppins), 'SVN-Poppins', sans-serif",
            }}
          >
            {children}
          </p>
        )}
      </div>

      {/* Arrow Icon */}
      <div className="absolute top-4 right-4">
        <ArrowIcon
          size={18}
          strokeWidth={1}
          className={`${
            isFeatured ? "text-white" : "text-textLight"
          } rotate-0 group-hover:rotate-45 ${
            isFeatured ? "group-hover:text-white" : "group-hover:text-primary"
          } transition-all duration-300`}
        />
      </div>
    </Link>
  );
}

export default function NavigationGridSection() {
  return (
    <section className="relative w-full bg-bgDark py-16">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {/* Về chúng tôi */}
          <NavigationTile href="/about">Về chúng tôi</NavigationTile>

          {/* Abstract Image */}
          <NavigationTile href="/about" imageSrc="/images/image 836.svg">
            {/* Empty - image is background */}
          </NavigationTile>

          {/* Dịch vụ */}
          <NavigationTile href="/services">Dịch vụ</NavigationTile>

          {/* Logo ADPRO */}
          <NavigationTile href="/" logoSrc="/logo/logo_adpro.svg">
            {/* Empty - logo is displayed */}
          </NavigationTile>

          {/* Logo FY */}
          <NavigationTile href="/" logoSrc="/logo/logo_FY.svg">
            {/* Empty - logo is displayed */}
          </NavigationTile>

          {/* Dự án đồ hoạ */}
          <NavigationTile href="/graphic-projects">Dự án đồ hoạ</NavigationTile>

          {/* Dự án TVC */}
          <NavigationTile href="/tvc-projects">Dự án TVC</NavigationTile>

          {/* MaxCreative - Featured */}
          <NavigationTile
            href="/"
            isFeatured={true}
            logoSrc="/logo/logo_maxcreative.svg"
          >
            {/* Empty - logo is displayed */}
          </NavigationTile>
        </div>
      </div>
    </section>
  );
}
