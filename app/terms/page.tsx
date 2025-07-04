import { PageHeader, Footer } from "@/components";

export default function TermsPage() {
  return (
    <div>
      <PageHeader
        title="Terms of Service [DEMO]"
        description="This is a demonstration terms of service page. Not legally binding."
      />
      
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Demo Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">📋 Demo Content Notice</h2>
            <p className="text-blue-700">
              This is a demonstration terms of service page. The content below is generic and for showcase purposes only. 
              For a real website, consult with a legal professional to create appropriate terms.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
            <p className="mb-6">
              By accessing and using this demo website, you acknowledge that this is a demonstration site 
              built for showcasing web development skills and not a real business service.
            </p>

            <h2 className="text-2xl font-bold mb-4">Description of Service</h2>
            <p className="mb-6">
              This demo website provides:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Examples of modern web development techniques</li>
              <li>Demonstration of responsive design and animations</li>
              <li>Sample portfolio and service pages</li>
              <li>Non-functional contact form (demo mode only)</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Demo Mode Limitations</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Important:</strong> This website is in demo mode. No actual services are provided, 
                no real transactions occur, and no personal data is processed or stored.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="mb-6">
              This demo website showcases:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Original code and design implementations</li>
              <li>Open-source technologies and frameworks</li>
              <li>Example content for demonstration purposes</li>
              <li>Placeholder images and sample data</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
            <p className="mb-6">
              This demo website is built with:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>Next.js 15 (React framework)</li>
              <li>Tailwind CSS (styling)</li>
              <li>Framer Motion (animations)</li>
              <li>TypeScript (type safety)</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Contact and Support</h2>
            <p className="mb-6">
              This is a demonstration website. The contact form is in demo mode and does not send actual emails. 
              For questions about creating similar websites, consult with web development professionals.
            </p>

            <h2 className="text-2xl font-bold mb-4">Modifications to Terms</h2>
            <p className="mb-6">
              These demo terms may be updated to reflect changes in the demonstration content or 
              to showcase different legal page structures.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <p className="text-gray-700 text-sm">
                <strong>Last updated:</strong> This demo terms page was created as an example and is not legally binding.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 