export default function Footer() {
  return (
    <footer className="bg-bgDark border-t border-white/10 py-12">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-textLight font-semibold mb-4">MaxCreative</h3>
            <p className="text-textGray text-sm">
              Đối tác sáng tạo chuyên cung cấp giải pháp marketing & truyền thông trọn gói cho các doanh nghiệp và chủ đầu tư bất động sản.
            </p>
          </div>
          <div>
            <h3 className="text-textLight font-semibold mb-4">Liên hệ</h3>
            <p className="text-textGray text-sm mb-2">(+84) 932 898 222</p>
            <p className="text-textGray text-sm mb-2">hi@maxcreative.com</p>
            <p className="text-textGray text-sm">
              Viet Tower, 1 Thai Ha, Dong Da, Ha Noi
            </p>
          </div>
          <div>
            <h3 className="text-textLight font-semibold mb-4">Theo dõi</h3>
            <div className="flex gap-4">
              <a href="#" className="text-textGray hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-textGray hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-textGray hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-textGray text-sm">
            ©2025 MaxCreative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


