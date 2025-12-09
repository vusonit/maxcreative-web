#!/bin/bash

echo "🚀 Push code lên GitHub"
echo ""
echo "Nhập GitHub username của bạn:"
read GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
  echo "❌ Username không được để trống!"
  exit 1
fi

echo ""
echo "Repository name (mặc định: maxcreative-web):"
read REPO_NAME

if [ -z "$REPO_NAME" ]; then
  REPO_NAME="maxcreative-web"
fi

echo ""
echo "📦 Đang thêm remote..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git

echo ""
echo "📤 Đang push code lên GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Đã push thành công!"
  echo ""
  echo "🔗 Repository URL: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
  echo ""
  echo "📝 Bước tiếp theo:"
  echo "1. Vào https://vercel.com"
  echo "2. Đăng nhập bằng GitHub"
  echo "3. Click 'Add New...' → 'Project'"
  echo "4. Chọn repository '${REPO_NAME}'"
  echo "5. Click 'Deploy'"
else
  echo ""
  echo "❌ Có lỗi xảy ra. Kiểm tra lại:"
  echo "- Đã tạo repository trên GitHub chưa?"
  echo "- Username và repository name đúng chưa?"
  echo "- Đã đăng nhập GitHub trên máy chưa?"
fi

