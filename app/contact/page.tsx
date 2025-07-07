import { ContactForm, Footer, PageHeader } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo Contact",
  description: "Try our demo contact form with real-time validation and demo mode functionality. Perfect example of a professional contact form implementation for freelance websites.",
  keywords: ["demo contact form", "contact page demo", "freelance contact", "web form demo", "contact us demo"],
  openGraph: {
    title: "Demo Contact | YS-DEMO Get in Touch",
    description: "Experience a fully functional demo contact form with modern design and user-friendly validation. Test out professional contact form features.",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "YS-DEMO Contact Form Demo",
      },
    ],
  },
  twitter: {
    title: "Demo Contact | YS-DEMO Get in Touch",
    description: "Experience a fully functional demo contact form with modern design and user-friendly validation. Test out professional contact form features.",
  },
};

export default function ContactPage() {
    return (
        <div>
            <PageHeader title="Demo Contact Form" description="Test the contact form - it's in demo mode and won't send real emails." />
            <ContactForm />
            <Footer />
        </div>
    );
  }