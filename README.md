# 🌐 Showcase Website – Built with Next.js & Tailwind CSS

A modern, responsive **portfolio/showcase site** built using the latest features of **Next.js 14+ (App Router)** and **Tailwind CSS**.  
Ideal as a base for freelancers, developers, startups, or any personal/business site.

---

## ✨ Features

- ⚡ Built with **Next.js 14** and **TypeScript**
- 🎨 Styled with **Tailwind CSS**
- 🧩 Modular structure using the **App Router**
- 🌍 Pages: Home, About, Services, Contact
- 🧠 Reusable components (`Navbar`, `Footer`, `HeroSection`, `PageHeader`, `ServiceCard`, `FinalCTA`, `Service`)
- 📱 Fully responsive layout with mobile-first design
- 🎬 Integrated **Framer Motion** for smooth animations
- 🖼️ Background image with overlay & gradient in Hero and Service sections
- 🔄 Scrollable full-screen services with navigation arrows
- 🧱 Project previews on homepage
- 📣 Final call-to-action block
- 🚀 Ready for deployment with **Vercel**

---

## 📁 Project Structure

```
/app
  ├── layout.tsx                # Global layout (Navbar, fonts, etc.)
  ├── page.tsx                  # Home page with all sections
  ├── about/page.tsx            # About page with PageHeader
  ├── services/page.tsx         # Services page with full-screen sections
  └── contact/page.tsx          # Contact page

/components
  ├── Navbar.tsx                # Navigation bar
  ├── Footer.tsx                # Site footer
  ├── HeroSection.tsx           # Hero block with animation & background
  ├── PageHeader.tsx            # Reusable page header for subpages
  ├── IntroSection.tsx          # "Who I am" block
  ├── MiniServicesSection.tsx   # 3 service cards preview
  ├── ProjectsPreviewSection.tsx # Projects teaser block
  ├── FinalCTASection.tsx       # Final call-to-action block
  ├── ServiceCard.tsx           # Reusable card for homepage services
  └── Service.tsx               # Full-screen service block with navigation

/public
  └── hero-bg.jpg               # Background image

/styles
  └── globals.css

/README.md
```

---

## 🚀 Getting Started

### 1. Clone the project

```bash
git clone https://github.com/YannickSevrin/showcase-site.git
cd showcase-site
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000` 🚀

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 📦 Deployment

Deploy your site instantly using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import your repo on Vercel
3. Click **Deploy**

---

## 📌 To-Do (Next Steps)

- [x] Add Hero section on homepage
- [x] Create service cards section
- [x] Add footer with links & social icons
- [x] Add project previews section
- [x] Add final CTA section
- [x] Redesign Services page with full-screen sections
- [ ] Implement working contact form (e.g. with Resend, EmailJS)
- [ ] Improve SEO and meta tags
- [ ] Add dark mode toggle (optional)

---

## 🧑‍💻 Author

Made with ❤️ by [YannickSevrin](https://github.com/YannickSevrin)

---

## 📄 License

MIT – free to use for personal and commercial projects.