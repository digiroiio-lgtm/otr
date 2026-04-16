import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Technical guides, blog articles, and data sheets for OTR tyre retreading professionals.',
};

export default function ResourcesPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">Resources</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Technical guides, industry insights, and downloadable data sheets to help you make informed decisions about OTR tyre retreading.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { href: '/resources/blog', icon: '📰', title: 'Blog', desc: 'Industry news, technology updates, and best practice articles from our retreading experts.' },
            { href: '/resources/guides', icon: '📖', title: 'Technical Guides', desc: 'In-depth guides covering retreading processes, tyre management, and fleet economics.' },
            { href: '/resources/technical-data-sheets', icon: '📋', title: 'Technical Data Sheets', desc: 'Downloadable compound specifications, equipment datasheets, and product certifications.' },
          ].map((r) => (
            <Link key={r.href} href={r.href} className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-safety-orange hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">{r.icon}</div>
              <h2 className="text-2xl font-black text-industrial-blue mb-3 group-hover:text-safety-orange transition-colors">{r.title}</h2>
              <p className="text-gray-600">{r.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
