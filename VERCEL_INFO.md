# Thông tin về Vercel Free Tier

## ✅ Hoàn toàn MIỄN PHÍ cho dự án này

### Giới hạn Free Tier:
- ✅ **Unlimited deployments** - Deploy bao nhiêu lần cũng được
- ✅ **Unlimited projects** - Tạo bao nhiêu project cũng được  
- ✅ **100GB bandwidth/tháng** - Đủ cho website giới thiệu
- ✅ **100GB build time/tháng** - Đủ cho Next.js projects
- ✅ **SSL certificate tự động** - HTTPS miễn phí
- ✅ **Custom domain miễn phí** - Thêm bao nhiêu domain cũng được
- ✅ **Preview deployments** - Mỗi PR có URL riêng để test

### Khi nào cần trả phí?
- Chỉ khi website có **hơn 100GB traffic/tháng** (rất hiếm với website giới thiệu)
- Hoặc cần **team collaboration features** nâng cao

## 🌐 Mua Domain và Đổi Tên Miền

### Bước 1: Mua Domain
Các nhà cung cấp phổ biến:
- **Namecheap** (khuyến nghị): https://www.namecheap.com (~$10-15/năm)
- **GoDaddy**: https://www.godaddy.com (~$12-20/năm)
- **Freenom**: https://www.freenom.com (MIỄN PHÍ cho .tk, .ml, .ga, .cf)
- **Cloudflare Registrar**: https://www.cloudflare.com/products/registrar (~$8-10/năm)

### Bước 2: Thêm Domain vào Vercel
1. Vào Vercel Dashboard → Chọn project → **Settings** → **Domains**
2. Nhập domain của bạn (ví dụ: `maxcreative.com`)
3. Click **Add**
4. Vercel sẽ hiển thị hướng dẫn DNS

### Bước 3: Cấu hình DNS
Có 2 cách:

**Cách 1: Dùng Vercel Nameservers (Khuyến nghị)**
- Vercel sẽ cung cấp nameservers (ví dụ: `ns1.vercel-dns.com`)
- Vào nhà cung cấp domain → Đổi nameservers thành của Vercel
- Đợi 24-48h để propagate

**Cách 2: Dùng DNS Records**
- Thêm A record: `@` → `76.76.21.21`
- Hoặc CNAME: `@` → `cname.vercel-dns.com`
- Đợi vài giờ để update

### Bước 4: SSL tự động
- Vercel tự động cấp SSL certificate (Let's Encrypt)
- HTTPS sẽ hoạt động sau khi DNS propagate xong
- Không cần làm gì thêm!

## 📝 Lưu ý
- Domain có thể đổi bất cứ lúc nào trong Vercel Dashboard
- Có thể thêm nhiều domain cho cùng 1 project
- Subdomain (www.maxcreative.com) cũng được hỗ trợ miễn phí
- Redirect từ www sang non-www (hoặc ngược lại) cũng miễn phí

