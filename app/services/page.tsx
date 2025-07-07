import { 
  PageHeader, 
  AllServicesSection, 
  FinalCTASection, 
  Footer 
} from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Services",
  description: "Discover demo web development services including responsive web design, modern development, and SEO optimization. Examples of professional service offerings for freelance businesses.",
  keywords: ["demo services", "web development services", "freelance services demo", "web design services", "SEO services", "development offerings"],
  openGraph: {
    title: "Demo Services | YS-DEMO Professional Offerings",
    description: "Explore comprehensive web development services demo featuring modern design, development, and SEO solutions for business growth.",
    images: [
      {
        url: "/images/services/development.png",
        width: 1200,
        height: 630,
        alt: "YS-DEMO Services Demo - Web Development",
      },
    ],
  },
  twitter: {
    title: "Demo Services | YS-DEMO Professional Offerings",
    description: "Explore comprehensive web development services demo featuring modern design, development, and SEO solutions for business growth.",
  },
};

export default function ServicesPage() {
    return (
        <div>
            <PageHeader title="Demo Services" description="Example services page showcasing different service offerings and pricing." />
            <AllServicesSection />
            <FinalCTASection />
            <Footer />
        </div>
    );
  }