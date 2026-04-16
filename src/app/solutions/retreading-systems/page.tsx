import type { Metadata } from 'next';
import IndustrialCTAButton from '@/components/IndustrialCTAButton';

export const metadata: Metadata = {
  title: 'Retreading Systems',
  description: 'Hot and cold OTR tyre retreading systems for mining, construction, and agriculture. Proven processes for maximum casing recovery.',
};

const steps = [
  { step: '01', title: 'Casing Inspection', description: 'Rigorous non-destructive testing including shearography and X-ray analysis to assess casing integrity and retreading suitability.' },
  { step: '02', title: 'Buffing', description: 'Precision computerised buffing removes the old tread to an exact crown radius, ensuring optimal adhesion for the new tread.' },
  { step: '03', title: 'Repair & Skiving', description: 'Damaged areas are identified, prepared, and repaired using high-grade repair units to restore full structural integrity.' },
  { step: '04', title: 'Tread Application', description: 'New tread rubber — either pre-cured cold process or uncured hot process material — is applied with precision alignment.' },
  { step: '05', title: 'Curing', description: 'Controlled heat and pressure in autoclave or press cures the assembly, forming a permanent molecular bond between casing and tread.' },
  { step: '06', title: 'Final Inspection', description: 'Visual, tactile, and instrument-based final quality check before every retread leaves the facility — conforming to ISO 9001:2015.' },
];

export default function RetreadingSystemsPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">Retreading Systems</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Hot and cold retreading processes engineered for the world&apos;s largest and most demanding OTR tyres. Maximise casing recovery, minimise operational cost.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-3xl font-black text-industrial-blue mb-12 text-center">Our 6-Step Retreading Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="relative p-8 bg-white border border-gray-200 rounded-xl hover:border-safety-orange hover:shadow-lg transition-all">
                <span className="text-6xl font-black text-safety-orange/20 absolute top-4 right-4">{s.step}</span>
                <h3 className="text-xl font-bold text-industrial-blue mb-3">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-industrial-blue mb-6">Hot Retreading</h3>
            <ul className="space-y-3 text-gray-600">
              {['Uncured rubber applied directly to casing','Press or autoclave curing at 150–160°C','Ideal for larger OTR sizes (≥33″)','Maximum bond strength for haul truck applications','Custom tread pattern capability'].map(b => (
                <li key={b} className="flex items-start gap-3"><span className="text-safety-orange font-bold mt-0.5">✓</span>{b}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-black text-industrial-blue mb-6">Cold Retreading</h3>
            <ul className="space-y-3 text-gray-600">
              {['Pre-vulcanised tread applied with cushion gum','Autoclave curing at lower temperatures','Consistent tread depth and pattern precision','Faster turnaround for smaller fleets','Wide range of tread patterns available'].map(b => (
                <li key={b} className="flex items-start gap-3"><span className="text-safety-orange font-bold mt-0.5">✓</span>{b}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center">
          <IndustrialCTAButton href="/contact">Discuss Your Retreading Program</IndustrialCTAButton>
        </div>
      </div>
    </div>
  );
}
