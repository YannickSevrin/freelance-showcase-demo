"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="shadow-md px-8 py-4 flex gap-6">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;