# MaxCreative Web

Website giới thiệu MaxCreative - Đối tác sáng tạo chuyên cung cấp giải pháp marketing & truyền thông trọn gói cho các doanh nghiệp và chủ đầu tư bất động sản.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (Animations)

## Getting Started

### Installation

```bash
yarn install
```

### Development

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

```bash
yarn build
yarn start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout với Header & Footer
│   ├── page.tsx           # Home page
│   ├── about/             # Về chúng tôi
│   ├── services/          # Dịch vụ
│   ├── graphic-projects/  # Dự án đồ họa
│   ├── tvc-projects/      # Dự án TVC
│   ├── contact/           # Liên hệ
│   └── projects/[slug]/   # Chi tiết dự án
├── components/            # React components
│   ├── shared/           # Shared components (Header, Footer)
│   ├── home/             # Home page components
│   ├── about/            # About page components
│   ├── services/          # Services page components
│   ├── projects/          # Projects components
│   └── contact/          # Contact components
└── globals.css            # Global styles & design tokens
```

## Design Tokens

- **Primary Color**: `#f0004d`
- **Background**: `#000000`
- **Text Light**: `#ffffff`
- **Text Gray**: `rgba(255, 255, 255, 0.6)`
- **Max Content Width**: `1344px`

## Deployment

Deploy to Vercel:

1. Push code to GitHub/GitLab
2. Import project in Vercel
3. Vercel will auto-detect Next.js and deploy

## License

Private project - MaxCreative
