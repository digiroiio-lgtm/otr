'use client';
import Link from 'next/link';
interface Props { href: string; children: React.ReactNode; className?: string; }
export default function IndustrialCTAButton({ href, children, className = '' }: Props) {
  return (
    <Link href={href} className={`inline-block bg-safety-orange text-white font-bold px-8 py-4 rounded shadow-cta hover:bg-orange-700 transition-colors ${className}`}>
      {children}
    </Link>
  );
}
