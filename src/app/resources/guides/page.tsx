import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Guides',
  description: 'In-depth OTR retreading guides for fleet managers and retreading professionals.',
};

const guides = [
  { tag: 'Fleet Management', title: "The Complete Fleet Manager's Guide to OTR Retreading", pages: 48, desc: 'Everything from casing selection criteria to retreading program economics. Includes ROI calculator worksheets.' },
  { tag: 'Process', title: 'Hot vs Cold Retreading: Choosing the Right Process for Your Application', pages: 24, desc: 'A technical comparison of hot cure and cold process retreading, with application matrices for different tyre types and uses.' },
  { tag: 'Quality', title: 'OTR Casing Inspection Standards: A Field Reference', pages: 32, desc: 'Illustrated reference guide for inspectors covering all major tyre types, damage categories, and retreat/reject criteria.' },
];

export default function GuidesPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">Technical Guides</h1>
          <p className="text-xl text-gray-300">In-depth technical guides written by retreading specialists for fleet managers and operations professionals.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((g) => (
            <div key={g.title} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-industrial-blue p-8 text-white">
                <span className="text-safety-orange text-xs font-semibold uppercase tracking-wider">{g.tag}</span>
                <h3 className="text-xl font-bold mt-2">{g.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{g.desc}</p>
                <p className="text-xs text-gray-400 mb-4">{g.pages} pages</p>
                <button className="w-full bg-safety-orange text-white font-bold py-3 rounded hover:bg-orange-700 transition-colors">Download Guide</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
