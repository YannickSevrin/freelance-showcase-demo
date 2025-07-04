import { PageHeader, Footer } from "@/components";

export default function LegalPage() {
  return (
    <div>
      <PageHeader
        title="Legal Notice [DEMO]"
        description="This is a demonstration legal notice page. Not legally binding."
      />
      
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Demo Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">📋 Demo Content Notice</h2>
            <p className="text-blue-700">
              This is a demonstration legal notice page. The content below is generic and for showcase purposes only. 
              For a real website, consult with a legal professional to create appropriate legal notices.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Website Information</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <p className="mb-2"><strong>Website:</strong> YS-DEMO Freelance Showcase</p>
              <p className="mb-2"><strong>Purpose:</strong> Demonstration of web development skills</p>
              <p className="mb-2"><strong>Status:</strong> Demo/Example Website</p>
              <p className="mb-2"><strong>Contact:</strong> This is a demo - no real contact information</p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Demo Website Disclaimer</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Important:</strong> This website is a demonstration project. No real business operates behind this site. 
                All content, services, and contact information are fictional and for showcase purposes only.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Technical Information</h2>
            <p className="mb-6">
              This demo website is built with modern web technologies:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li><strong>Framework:</strong> Next.js 15 with App Router</li>
              <li><strong>Styling:</strong> Tailwind CSS</li>
              <li><strong>Animations:</strong> Framer Motion</li>
              <li><strong>Language:</strong> TypeScript</li>
              <li><strong>Hosting:</strong> Suitable for Vercel deployment</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Demo Features</h2>
            <p className="mb-6">
              This showcase demonstrates:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Responsive design for all devices</li>
              <li>Modern animations and transitions</li>
              <li>Professional navigation system</li>
              <li>Contact form with demo mode</li>
              <li>Project portfolio system</li>
              <li>Service showcase pages</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="mb-6">
              This demo website contains:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Original code and design implementation</li>
              <li>Example content created for demonstration</li>
              <li>Placeholder images and sample data</li>
              <li>Open-source libraries and frameworks</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Data and Privacy</h2>
            <p className="mb-6">
              This demo website:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Does not collect or store personal data</li>
              <li>Contact form is in demo mode (no emails sent)</li>
              <li>No analytics or tracking implemented</li>
              <li>No cookies used for data collection</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="mb-6">
              This is a demonstration website. No real services are provided, no actual business relationships 
              are formed, and no legal obligations are created through the use of this demo site.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <strong>Last updated:</strong> This demo legal notice was created as an example and is not legally binding.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 