import "./globals.css";
import { Inter } from "next/font/google";
import { NavBar as Navbar } from "@/components";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "YS-DEMO | Freelance Showcase Demo",
    template: "%s | YS-DEMO"
  },
  description: "A demonstration freelance showcase website built with Next.js, Tailwind CSS, and Framer Motion. Professional demo featuring modern web development practices.",
  keywords: ["freelance", "web development", "Next.js", "Tailwind CSS", "Framer Motion", "demo", "showcase", "portfolio"],
  authors: [{ name: "YS-DEMO" }],
  creator: "YS-DEMO",
  publisher: "YS-DEMO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "YS-DEMO | Freelance Showcase",
    title: "YS-DEMO | Freelance Showcase Demo",
    description: "A demonstration freelance showcase website built with Next.js, Tailwind CSS, and Framer Motion",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "YS-DEMO Freelance Showcase Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YS-DEMO | Freelance Showcase Demo",
    description: "A demonstration freelance showcase website built with Next.js, Tailwind CSS, and Framer Motion",
    images: ["/images/hero-bg.png"],
    creator: "@YS_DEMO",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "YS-DEMO | Freelance Showcase Demo",
    "description": "A demonstration freelance showcase website built with Next.js, Tailwind CSS, and Framer Motion. Professional demo featuring modern web development practices.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "/sitemap",
      "query-input": "required name=search_term_string"
    },
    "author": {
      "@type": "Organization",
      "name": "YS-DEMO",
      "description": "Demonstration freelance web development showcase"
    },
    "mainEntity": {
      "@type": "WebPage",
      "name": "YS-DEMO Freelance Showcase",
      "description": "Modern freelance website demo featuring Next.js, Tailwind CSS, and professional web development practices"
    }
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Demo Banner */}
        <div className="bg-gradient-to-r from-gray-600 to-black text-white text-center py-2 text-sm">
          <span className="font-medium">🌟 Demo Website</span> - Built with Next.js & Tailwind CSS
        </div>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}