import { PageHeader, Footer } from "@/components";
import Link from "next/link";

export default function SitemapPage() {
  return (
    <div>
      <PageHeader
        title="Site Map [DEMO]"
        description="Complete structure and navigation of this demonstration website."
      />
      
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          
          {/* Demo Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">🗺️ Demo Site Map</h2>
            <p className="text-blue-700">
              This page shows the complete structure of the demonstration website, 
              including all pages and features available for exploration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Main Pages */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">📱 Main Pages</h3>
              
              <div className="space-y-3">
                <Link href="/" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <h4 className="font-semibold">🏠 Home</h4>
                  <p className="text-sm text-gray-600">Hero section, services overview, featured projects</p>
                </Link>

                <Link href="/about" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <h4 className="font-semibold">👤 About This Demo</h4>
                  <p className="text-sm text-gray-600">Demo profile and tech stack showcase</p>
                </Link>

                <Link href="/projects" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <h4 className="font-semibold">🗂️ Demo Projects</h4>
                  <p className="text-sm text-gray-600">Sample project portfolio (12 example projects)</p>
                </Link>

                <Link href="/services" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <h4 className="font-semibold">🎨 Demo Services</h4>
                  <p className="text-sm text-gray-600">Full-screen service sections with navigation</p>
                </Link>

                <Link href="/contact" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <h4 className="font-semibold">📧 Demo Contact</h4>
                  <p className="text-sm text-gray-600">Contact form in demo mode (no emails sent)</p>
                </Link>
              </div>
            </div>

            {/* Legal Pages */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4">⚖️ Legal Pages [Demo]</h3>
              
              <div className="space-y-3">
                <Link href="/privacy" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <h4 className="font-semibold">🔒 Privacy Policy</h4>
                  <p className="text-sm text-gray-600">Example privacy policy (not legally binding)</p>
                </Link>

                <Link href="/terms" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <h4 className="font-semibold">📜 Terms of Service</h4>
                  <p className="text-sm text-gray-600">Example terms of service (not legally binding)</p>
                </Link>

                <Link href="/legal" className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                  <h4 className="font-semibold">📋 Legal Notice</h4>
                  <p className="text-sm text-gray-600">Example legal notice (not legally binding)</p>
                </Link>

                <Link href="/sitemap" className="block p-4 border border-gray-200 rounded-lg bg-gray-100">
                  <h4 className="font-semibold">🗺️ Site Map</h4>
                  <p className="text-sm text-gray-600">This page - complete site structure</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Technical Features */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">⚡ Demo Features & Technologies</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">🎨 Design Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Responsive design</li>
                  <li>• Mobile burger menu</li>
                  <li>• Smooth animations</li>
                  <li>• Active page detection</li>
                  <li>• Hover effects</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">🛠️ Technologies</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Next.js 15</li>
                  <li>• Tailwind CSS</li>
                  <li>• Framer Motion</li>
                  <li>• TypeScript</li>
                  <li>• React Icons</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">🔧 Demo Functions</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Contact form demo mode</li>
                  <li>• Project portfolio system</li>
                  <li>• Service navigation</li>
                  <li>• Component architecture</li>
                  <li>• Environment config</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Demo Instructions */}
          <div className="mt-12 bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-4">🚀 How to Explore This Demo</h3>
            <div className="text-green-700 space-y-2">
              <p>• <strong>Navigate freely:</strong> All pages are functional and safe to explore</p>
              <p>• <strong>Test the contact form:</strong> It's in demo mode - no emails will be sent</p>
              <p>• <strong>Check responsive design:</strong> Try different screen sizes</p>
              <p>• <strong>Explore animations:</strong> Hover effects and smooth transitions throughout</p>
              <p>• <strong>View the code:</strong> This is open for learning and inspiration</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
} 