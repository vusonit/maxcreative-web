import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bgDark/80 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-textLight">
          MaxCreative
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-textLight hover:text-primary transition-colors">
            Về chúng tôi
          </Link>
          <Link href="/services" className="text-textLight hover:text-primary transition-colors">
            Dịch vụ
          </Link>
          <Link href="/graphic-projects" className="text-textLight hover:text-primary transition-colors">
            Dự án đồ họa
          </Link>
          <Link href="/tvc-projects" className="text-textLight hover:text-primary transition-colors">
            Dự án TVC
          </Link>
          <Link href="/contact" className="text-textLight hover:text-primary transition-colors">
            Liên hệ
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-textLight text-sm">VN</button>
          <span className="text-textGray">/</span>
          <button className="text-textGray text-sm">EN</button>
        </div>
      </nav>
    </header>
  );
}


