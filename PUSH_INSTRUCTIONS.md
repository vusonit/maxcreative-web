# Hướng dẫn Push Code lên GitHub

Repository đã được cấu hình: https://github.com/vusonit/maxcreative-web

## Cách 1: Push bằng Terminal (Khuyến nghị)

### Bước 1: Xác thực GitHub

**Nếu chưa đăng nhập GitHub trên máy:**

```bash
# Cách 1: Dùng GitHub CLI (nếu đã cài)
gh auth login

# Cách 2: Dùng Personal Access Token
# 1. Vào GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
# 2. Generate new token (classic) với quyền "repo"
# 3. Copy token
# 4. Khi push, nhập username: vusonit, password: paste token
```

### Bước 2: Push code

```bash
cd /Users/avat/code/maxcreative-web
git push -u origin main
```

Nếu hỏi username/password:
- **Username**: `vusonit`
- **Password**: Dán Personal Access Token (không phải password GitHub)

## Cách 2: Dùng GitHub Desktop

1. Mở GitHub Desktop
2. File → Add Local Repository
3. Chọn folder `/Users/avat/code/maxcreative-web`
4. Click "Publish repository"
5. Chọn repository `vusonit/maxcreative-web`
6. Click "Publish"

## Cách 3: Dùng VS Code

1. Mở VS Code trong folder dự án
2. Click vào icon Source Control (bên trái)
3. Click "..." → "Push"
4. Nếu hỏi authentication, đăng nhập GitHub

## Sau khi Push xong

Code sẽ có tại: https://github.com/vusonit/maxcreative-web

Tiếp theo: Deploy lên Vercel (xem file DEPLOY.md)

