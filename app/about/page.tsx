import { 
  PageHeader, 
  AboutIntroSection, 
  FinalCTASection, 
  Footer, 
  ToolsSection 
} from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about this demo freelance showcase website. Discover the modern web development technologies, design patterns, and best practices used in this Next.js demonstration project.",
  keywords: ["about demo", "web development demo", "Next.js about page", "developer profile demo", "portfolio about section"],
  openGraph: {
    title: "About | YS-DEMO Freelance Showcase",
    description: "Discover the story behind this demo freelance website and explore modern web development practices showcased in this Next.js project.",
    images: [
      {
        url: "/images/about/portrait.png",
        width: 1200,
        height: 630,
        alt: "About YS-DEMO - Developer Profile Demo",
      },
    ],
  },
  twitter: {
    title: "About | YS-DEMO Freelance Showcase",
    description: "Discover the story behind this demo freelance website and explore modern web development practices showcased in this Next.js project.",
  },
};

export default function About() {
    return (
        <div>
            <PageHeader title="About This Demo" description="This is a demonstration showcase website built with Next.js, showcasing modern web development techniques." />
            <AboutIntroSection />
            <ToolsSection />
            <FinalCTASection />
            <Footer />
        </div>
    );
  }