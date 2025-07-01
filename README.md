# 🌐 Showcase Website – Built with Next.js & Tailwind CSS

A modern, responsive **portfolio/showcase site** built using the latest features of **Next.js 14+ (App Router)** and **Tailwind CSS**.  
Ideal as a base for freelancers, developers, startups, or any personal/business site.

---

## ✨ Features

- ⚡ Built with **Next.js 14** and **TypeScript**
- 🎨 Styled with **Tailwind CSS**
- 🧩 Modular structure using the **App Router**
- 🌍 Pages: Home, About, Services, Contact
- 🧠 Reusable components (`Navbar`, `Footer`, `HeroSection`, `PageHeader`, `ServiceCard`, `FinalCTA`, `Service`, `ContactForm`)
- 📱 Fully responsive layout with mobile-first design
- 🎬 Integrated **Framer Motion** for smooth animations
- 🖼️ Background image with overlay & gradient in Hero and Service sections
- 🔄 Scrollable full-screen services with navigation arrows
- 💌 Contact form with **Resend API integration**
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
  └── contact/page.tsx          # Contact page with contact form

/components
  ├── Navbar.tsx
  ├── Footer.tsx
  ├── HeroSection.tsx
  ├── PageHeader.tsx
  ├── IntroSection.tsx
  ├── MiniServicesSection.tsx
  ├── ProjectsPreviewSection.tsx
  ├── FinalCTASection.tsx
  ├── ServiceCard.tsx
  ├── Service.tsx
  └── ContactForm.tsx

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

### 3. Setup environment variables

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

### 4. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000` 🚀

---

## 🔐 Environment Variables

Create a `.env.local` file and include the following:

```env
RESEND_API_KEY=your-resend-api-key
RESEND_SEND_FROM=Your Name <onboarding@resend.dev>
RESEND_SEND_TO=your@email.com
```

The `ContactForm` uses these to send emails via [Resend](https://resend.com).

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Resend](https://resend.com/) – email API

---

## 📦 Deployment

Deploy your site instantly using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import your repo on Vercel
3. Add your environment variables in **Project Settings → Environment Variables**
4. Click **Deploy**

---

## 📌 To-Do (Next Steps)

- [x] Add Hero section on homepage
- [x] Create service cards section
- [x] Add footer with links & social icons
- [x] Add project previews section
- [x] Add final CTA section
- [x] Redesign Services page with full-screen sections
- [x] Implement working contact form (with Resend)
- [ ] Improve SEO and meta tags
- [ ] Add dark mode toggle (optional)

---

## 🧑‍💻 Author

Made with ❤️ by [YannickSevrin](https://github.com/YannickSevrin)

---

## 📄 License

MIT – free to use for personal and commercial projects.