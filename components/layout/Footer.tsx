import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 mb-6">
          
          {/* Demo Notice */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2">YS-DEMO</p>
            <p className="text-sm text-gray-400">
              Demonstration freelance showcase website<br />
              Built with Next.js & Tailwind CSS
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-2">Navigation</h4>
              <div className="flex flex-col space-y-1 text-sm">
                <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
                <Link href="/projects" className="text-gray-400 hover:text-white transition">Projects</Link>
                <Link href="/about" className="text-gray-400 hover:text-white transition">About</Link>
                <Link href="/services" className="text-gray-400 hover:text-white transition">Services</Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-2">Legal [Demo]</h4>
              <div className="flex flex-col space-y-1 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link>
                <Link href="/legal" className="text-gray-400 hover:text-white transition">Legal Notice</Link>
                <Link href="/site-map" className="text-gray-400 hover:text-white transition">Site Map</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} YS-DEMO. This is a demonstration website - not a real business.
            </p>
            <p className="text-xs">
              🌟 Built with Next.js, Tailwind CSS, Framer Motion & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}