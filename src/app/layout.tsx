import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Link from 'next/link';

export const metadata: Metadata = {
  title: {
    default: 'OTR Retreading | Industrial Tyre Solutions',
    template: '%s | OTR Retreading',
  },
  description: 'OTR Retreading delivers world-class retreading systems, OTR tyre machinery, and technical rubber compounds for mining, construction, and agricultural fleets.',
  metadataBase: new URL('https://otrretreading.com'),
  openGraph: {
    siteName: 'OTR Retreading',
    type: 'website',
    locale: 'en_US',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OTR Retreading',
  url: 'https://otrretreading.com',
  description: 'Industrial OTR tyre retreading systems, machinery, and technical compounds.',
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', availableLanguage: 'English' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="bg-industrial-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
              <div>
                <h3 className="text-xl font-black mb-4">OTR Retreading</h3>
                <p className="text-gray-400 text-sm leading-relaxed">World-class retreading solutions for the most demanding industrial applications.</p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-safety-orange uppercase text-xs tracking-widest">Solutions</h4>
                <ul className="space-y-2">
                  {([['Retreading Systems','/solutions/retreading-systems'],['Tyre Machinery','/solutions/tyre-machinery'],['OTR Services','/solutions/otr-services'],['Technical Compounds','/solutions/technical-compounds']] as [string, string][]).map(([l,h])=>(
                    <li key={h}><Link href={h} className="text-gray-400 hover:text-white text-sm transition-colors">{l}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-safety-orange uppercase text-xs tracking-widest">Resources</h4>
                <ul className="space-y-2">
                  {([['Blog','/resources/blog'],['Guides','/resources/guides'],['Data Sheets','/resources/technical-data-sheets']] as [string, string][]).map(([l,h])=>(
                    <li key={h}><Link href={h} className="text-gray-400 hover:text-white text-sm transition-colors">{l}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-safety-orange uppercase text-xs tracking-widest">Company</h4>
                <ul className="space-y-2">
                  {([['About','/company'],['History','/company/history'],['Sustainability','/company/sustainability'],['Careers','/company/careers'],['R&D Lab','/company/research-development-lab'],['Certifications','/company/certifications']] as [string, string][]).map(([l,h])=>(
                    <li key={h}><Link href={h} className="text-gray-400 hover:text-white text-sm transition-colors">{l}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} OTR Retreading. All rights reserved.</p>
              <div className="flex gap-6 text-gray-500 text-sm">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Twitter</a>
                <a href="#" className="hover:text-white transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

