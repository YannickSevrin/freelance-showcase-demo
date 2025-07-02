# 🌐 Showcase Website – Built with Next.js & Tailwind CSS

A modern, responsive **portfolio/showcase site** built using the latest features of **Next.js 14+ (App Router)** and **Tailwind CSS**.  
Ideal as a base for freelancers, developers, startups, or any personal/business site.

---

## ✨ Features

### 🎯 Core Features
- ⚡ Built with **Next.js 14** and **TypeScript**
- 🎨 Styled with **Tailwind CSS**
- 🧩 Modular structure using the **App Router**
- 🌍 Pages: Home, About, Services, Contact
- 📱 Fully responsive layout with mobile-first design
- 🎬 **Framer Motion** animations with optimized viewport detection
- 🚀 Ready for deployment with **Vercel**

### 🧭 Enhanced Navigation (NavBar)
- 🏷️ **Custom logo** (YS.) with hover effects
- 🍔 **Mobile burger menu** with slide-out animation
- 🎯 **Active page indication** with visual styling (black background + white text)
- 🔄 **Smooth transitions** (200ms duration) for all interactions
- 📱 **Responsive breakpoints** - burger menu on mobile, horizontal menu on desktop
- 🎨 **Hover effects** with subtle background changes

### 🎨 Advanced Service Sections
- 🌈 **Alternating color schemes** - light/dark variants for visual hierarchy
- ⬅️➡️ **Interactive navigation arrows** between service sections
- 📱 **Mobile-optimized positioning** - arrows positioned correctly for touch interaction
- 🖱️ **Click-to-center** functionality on service sections
- 🎬 **Smart animations** - immediate load for first section, viewport-triggered for others
- 🖼️ **Dynamic backgrounds** with customizable overlay opacity
- 💰 **Pricing display** integration

### 🧠 Reusable Components
- `Navbar` - Smart responsive navigation with active state
- `Service` - Full-screen service sections with navigation
- `HeroSection`, `PageHeader`, `ServiceCard`, `ContactForm`, `ToolsSection`
- 💌 **Contact form** with **Resend API integration**
- 🧰 **Tech stack showcase** with React Icons

---

## 📁 Project Structure

```
/app
  ├── layout.tsx                  # Global layout (Navbar, fonts, etc.)
  ├── page.tsx                    # Home page with all sections
  ├── about/page.tsx              # About page with PageHeader & ToolsSection
  ├── services/page.tsx           # Services page with full-screen sections
  └── contact/page.tsx            # Contact page with contact form

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
  ├── ContactForm.tsx
  └── ToolsSection.tsx            # Tech icons section in About page

/public
  └── hero-bg.jpg

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

## 🎨 Customization Guide

### 🏷️ Customizing the Logo
Edit the logo in `components/NavBar.tsx`:
```tsx
<Link href="/" className="text-xl font-bold text-black hover:text-gray-700 transition">
  YS. {/* Change this to your logo/brand */}
</Link>
```

### 🎯 Active Page Styling
Modify active page appearance in `components/NavBar.tsx`:
```tsx
// Desktop active state
? "text-white bg-black px-3 py-2 rounded-lg shadow-sm scale-105"

// Mobile active state  
? "text-white bg-black shadow-sm scale-105"
```

### 🌈 Service Color Schemes
Services automatically alternate between light and dark themes:
- **Light theme**: White overlay, black text
- **Dark theme**: Black overlay, white text

Customize in `components/Service.tsx` by modifying the `variant` prop logic.

### 📱 Mobile Breakpoints
Responsive breakpoints use Tailwind's `md:` prefix (768px):
- **Mobile**: `< 768px` - Burger menu, vertical layout
- **Desktop**: `≥ 768px` - Horizontal menu, side-by-side layout

---

## 🔐 Environment Variables

Create a `.env.local` file and include the following:

```env
RESEND_API_KEY=your-resend-api-key
RESEND_SEND_FROM=Your Name <onboarding@resend.dev>
RESEND_SEND_TO=your@email.com
```

These are used by the `ContactForm` to send emails via [Resend](https://resend.com).

---

## 🛠 Tech Stack & Dependencies

### Core Technologies
- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

### Animation & UI
- [Framer Motion](https://www.framer.com/motion/) - Advanced animations with viewport detection
- [Lucide React](https://lucide.dev/) - Modern icon library (Menu, X, Arrow icons)
- [React Icons](https://react-icons.github.io/react-icons/) - Tech stack icons (Next.js, React, etc.)

### Backend & Communication
- [Resend](https://resend.com/) - Email API for contact forms

### Key Hooks & APIs
- `usePathname` - Next.js navigation hook for active page detection
- `useState` - React state management for mobile menu
- `Image` component - Next.js optimized images
- `scrollIntoView` - Native browser API for smooth navigation

---

## 🔧 Recent Improvements & Best Practices

### 🧭 Navigation Enhancements
- **Smart Active State Detection**: Uses Next.js `usePathname()` for accurate page detection
- **Responsive Design**: Desktop horizontal menu transforms into mobile slide-out menu
- **Visual Feedback**: Active pages highlighted with black background and white text
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Performance**: Optimized with CSS transitions and event delegation

### 🎨 Service Section Optimizations
- **Animation Performance**: Fixed viewport detection issues with conditional animations
- **Mobile UX**: Increased touch target areas and repositioned navigation arrows
- **Event Handling**: Proper event propagation control to prevent conflicts
- **Visual Hierarchy**: Alternating light/dark themes for better content separation
- **Smooth Navigation**: Implemented `scrollIntoView` with smooth behavior

### 📱 Mobile-First Improvements
- **Touch-Friendly**: Increased button padding and touch targets
- **Responsive Positioning**: Different positioning for mobile vs desktop
- **Menu Overlay**: Semi-transparent overlay for better mobile menu UX
- **Viewport Considerations**: Optimized for mobile browser address bars

### 🎯 Code Quality
- **TypeScript**: Full type safety with proper interfaces
- **Component Modularity**: Reusable components with customizable props
- **Performance**: Optimized animations and reduced layout shifts
- **SEO Ready**: Environment variables properly configured and .gitignore updated

---

## 📦 Deployment

Deploy your site instantly using [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import your repo on Vercel
3. Add your environment variables in **Project Settings → Environment Variables**
4. Click **Deploy**

---

## 📌 Development Progress

### ✅ Completed Features
- [x] Hero section with background image and CTA
- [x] Service cards and full-screen service sections
- [x] Responsive navigation with logo and burger menu
- [x] Active page indication with visual styling
- [x] Working contact form with Resend API
- [x] About page with tools/tech stack showcase
- [x] Smooth animations with Framer Motion
- [x] Mobile-optimized service navigation
- [x] Alternating color schemes for services
- [x] Event handling and touch optimization
- [x] Environment variables and security setup

### 🔄 Next Steps
- [ ] Improve SEO and meta tags
- [ ] Add loading states and error boundaries
- [ ] Implement blog/portfolio section
- [ ] Add dark mode toggle
- [ ] Performance monitoring and analytics
- [ ] Add more animation variants
- [ ] Implement lazy loading for images
- [ ] Add unit/integration tests

---

## 🧑‍💻 Author

Made with ❤️ by [YannickSevrin](https://github.com/YannickSevrin)

---

## 📄 License

MIT – free to use for personal and commercial projects.