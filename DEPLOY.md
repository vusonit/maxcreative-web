# Hướng dẫn Deploy lên Vercel

## Bước 1: Đẩy code lên GitHub/GitLab

### Nếu chưa có remote repository:

1. **Tạo repository mới trên GitHub/GitLab:**
   - Vào GitHub/GitLab → New Repository
   - Tên: `maxcreative-web` (hoặc tên bạn muốn)
   - **KHÔNG** tích "Initialize with README" (vì đã có code local)

2. **Thêm remote và push:**

```bash
# Thay YOUR_USERNAME và REPO_NAME bằng thông tin của bạn
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Hoặc nếu dùng SSH:
# git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git

# Push code lên
git branch -M main
git push -u origin main
```

### Nếu đã có remote:

```bash
# Kiểm tra remote hiện tại
git remote -v

# Push code
git push origin main
```

## Bước 2: Deploy lên Vercel

### Cách 1: Deploy qua Vercel Dashboard (Khuyến nghị)

1. **Đăng nhập Vercel:**
   - Vào https://vercel.com
   - Đăng nhập bằng GitHub/GitLab account

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Chọn repository `maxcreative-web` từ danh sách
   - Vercel sẽ tự động detect Next.js

3. **Cấu hình (thường không cần thay đổi):**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (mặc định)
   - **Build Command**: `yarn build` (hoặc `npm run build`)
   - **Output Directory**: `.next` (auto)
   - **Install Command**: `yarn install` (hoặc `npm install`)

4. **Environment Variables** (nếu có):
   - Thêm các biến môi trường nếu cần
   - Hiện tại project không cần env vars

5. **Deploy:**
   - Click "Deploy"
   - Đợi build xong (2-3 phút)
   - Xong! Website sẽ có URL dạng: `https://maxcreative-web.vercel.app`

### Cách 2: Deploy qua Vercel CLI

```bash
# Cài đặt Vercel CLI (nếu chưa có)
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy production
vercel --prod
```

## Bước 3: Cấu hình Custom Domain (Tùy chọn)

1. Vào Project Settings → Domains
2. Thêm domain của bạn (ví dụ: `maxcreative.com`)
3. Follow hướng dẫn để config DNS

## Lưu ý quan trọng

✅ **Đã sẵn sàng:**
- ✅ `.gitignore` đã có (ignore node_modules, .next, .env)
- ✅ `package.json` có scripts đúng
- ✅ `next.config.ts` đã config
- ✅ Code đã được commit

⚠️ **Cần kiểm tra trước khi deploy:**
- [ ] Test build local: `yarn build` chạy thành công
- [ ] Không có lỗi TypeScript
- [ ] Không có lỗi ESLint nghiêm trọng
- [ ] Images/assets đã được đặt đúng trong `public/` folder

## Troubleshooting

### Build fail trên Vercel:
- Kiểm tra logs trong Vercel Dashboard
- Đảm bảo Node.js version phù hợp (Vercel tự detect)
- Kiểm tra dependencies trong `package.json`

### Images không load:
- Đảm bảo images trong `public/` folder
- Dùng `next/image` component thay vì `<img>`

### Font không load:
- Kiểm tra font đã được import đúng trong `layout.tsx`
- Nếu dùng local font, đảm bảo file font trong `public/fonts/`

## Auto Deploy

Sau khi setup xong, mỗi lần bạn push code lên `main` branch, Vercel sẽ tự động deploy lại website.

