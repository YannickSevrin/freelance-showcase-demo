
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} YannickSevrin. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}