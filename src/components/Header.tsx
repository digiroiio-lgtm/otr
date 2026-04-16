'use client';
import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Solutions', href: '/solutions' },
  { label: 'Resources', href: '/resources' },
  { label: 'Company', href: '/company' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="bg-industrial-blue text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-black tracking-tight hover:text-safety-orange transition-colors">
            OTR Retreading
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-gray-300 hover:text-white font-medium text-sm transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-safety-orange text-white font-bold px-5 py-2 rounded hover:bg-orange-700 transition-colors text-sm">
              Request a Quote
            </Link>
          </nav>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="block py-2 text-gray-300 hover:text-white font-medium" onClick={() => setMobileOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="inline-block mt-3 bg-safety-orange text-white font-bold px-5 py-2 rounded text-sm" onClick={() => setMobileOpen(false)}>
              Request a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
