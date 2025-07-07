import { 
  HeroSection, 
  InfoSection, 
  MiniServiceCard as MiniServicesSection, 
  ProjectsPreviewSection, 
  FinalCTASection, 
  Footer 
} from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "YS-DEMO freelance showcase - A demonstration website featuring modern web development services, demo projects, and professional portfolio examples built with Next.js and Tailwind CSS.",
  keywords: ["freelance demo", "web development showcase", "Next.js portfolio", "modern web design", "Tailwind CSS demo"],
  openGraph: {
    title: "YS-DEMO | Modern Freelance Showcase Demo",
    description: "Explore a professional freelance showcase website demo featuring modern web development practices, responsive design, and interactive components.",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "YS-DEMO Freelance Showcase Homepage",
      },
    ],
  },
  twitter: {
    title: "YS-DEMO | Modern Freelance Showcase Demo",
    description: "Explore a professional freelance showcase website demo featuring modern web development practices, responsive design, and interactive components.",
  },
};

export default function Home() {

  return (
       <div>
        <HeroSection />
        <MiniServicesSection />
        <InfoSection />
        <ProjectsPreviewSection />
        <FinalCTASection />
        <Footer />
       </div>
  );
}
