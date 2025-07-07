import { PageHeader, Footer } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy [Demo]",
  description: "Demo privacy policy page showcasing professional legal page structure. This is example content for demonstration purposes only and is not legally binding.",
  keywords: ["privacy policy demo", "legal page example", "demo privacy terms", "data protection demo", "website privacy example"],
  openGraph: {
    title: "Privacy Policy Demo | YS-DEMO Legal Pages",
    description: "Explore a professional privacy policy page structure. Demo content showing how to present privacy information on freelance websites.",
  },
  twitter: {
    title: "Privacy Policy Demo | YS-DEMO Legal Pages",
    description: "Explore a professional privacy policy page structure. Demo content showing how to present privacy information on freelance websites.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div>
      <PageHeader
        title="Privacy Policy [DEMO]"
        description="This is a demonstration privacy policy page. Not legally binding."
      />
      
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Demo Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">📋 Demo Content Notice</h2>
            <p className="text-blue-700">
              This is a demonstration privacy policy page. The content below is generic and for showcase purposes only. 
              For a real website, consult with a legal professional to create appropriate policies.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="mb-6">
              This demo website may collect the following types of information:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Personal information you provide through contact forms</li>
              <li>Usage data and analytics (in demo mode, no actual tracking)</li>
              <li>Technical information about your device and browser</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="mb-6">
              In a real website, collected information would be used for:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Responding to your inquiries and requests</li>
              <li>Improving our website and services</li>
              <li>Communicating with you about updates or changes</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
            <p className="mb-6">
              This demo website implements standard security measures including:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Secure HTTPS connections</li>
              <li>Environment variables for sensitive data</li>
              <li>Form validation and sanitization</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Contact Form Demo Mode</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Note:</strong> The contact form on this demo website is in demo mode. 
                No actual emails are sent, and no personal data is stored or processed.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="mb-6">
              This is a demonstration website. For questions about privacy policies for your own website, 
              consult with legal professionals who specialize in data protection and privacy law.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <strong>Last updated:</strong> This demo policy was created as an example and is not legally binding.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 