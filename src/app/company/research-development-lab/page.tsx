import type { Metadata } from 'next';
import RDMetricsPanel from '@/components/RDMetricsPanel';
import IndustrialCTAButton from '@/components/IndustrialCTAButton';

export const metadata: Metadata = {
  title: 'Research & Development Lab',
  description: "OTR Retreading's R&D laboratory — 15+ years developing proprietary rubber compounds and retreading technology.",
};

export default function RDLabPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">Research &amp; Development Lab</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Our compound laboratory is the foundation of every retread we produce. 15+ years of focused OTR compound research gives our products a measurable performance edge.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <RDMetricsPanel />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-black text-industrial-blue mb-6">Laboratory Capabilities</h2>
            <ul className="space-y-4">
              {[
                'Full polymer characterisation and rheometry',
                'Dynamic mechanical analysis (DMA)',
                'Accelerated wear testing on OTR test tracks',
                'Thermal analysis (DSC, TGA)',
                'Adhesion and peel strength testing to ISO standards',
                'Full compound quality control QC lab',
              ].map(c => <li key={c} className="flex items-start gap-3 text-gray-700"><span className="text-safety-orange font-bold mt-0.5">→</span>{c}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-black text-industrial-blue mb-6">Research Focus Areas</h2>
            <div className="space-y-4">
              {[
                { area: 'Cut & Chip Resistance', desc: 'Developing next-generation tread compounds for high-severity mining haul road applications.' },
                { area: 'Adhesion Systems', desc: 'Optimising cushion gum and bonding systems for maximum retread durability across temperature extremes.' },
                { area: 'Sustainable Materials', desc: 'Investigating bio-based and recycled content polymers that meet OTR performance requirements.' },
              ].map(r => (
                <div key={r.area} className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-industrial-blue mb-1">{r.area}</h4>
                  <p className="text-sm text-gray-600">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">
          <IndustrialCTAButton href="/contact">Partner With Our R&amp;D Team</IndustrialCTAButton>
        </div>
      </div>
    </div>
  );
}
