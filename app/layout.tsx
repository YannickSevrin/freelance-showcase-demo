import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { NavBar as Navbar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "YS-DEMO | Freelance Showcase Demo",
  description: "A demonstration freelance showcase website built with Next.js, Tailwind CSS, and Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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