import type { Metadata } from 'next';
import IndustrialCTAButton from '@/components/IndustrialCTAButton';

export const metadata: Metadata = {
  title: 'Tyre Machinery & Equipment',
  description: 'Industrial tyre building and retreading machinery for high-volume OTR operations. Buffing machines, autoclaves, shearography systems.',
};

const categories = [
  { icon: '🔧', title: 'Buffing Machines', items: ['CNC-controlled radial buffing','Multi-axis programmatic crown profiling','OTR sizes up to 63″','Automated rasp selection'] },
  { icon: '🏭', title: 'Autoclave Systems', items: ['Chamber diameters from 2m to 5m','Fully automated pressure/temperature control','Multi-tyre batch capacity','Steam or hot-air curing options'] },
  { icon: '📡', title: 'Inspection Equipment', items: ['Shearography NDE systems','X-ray imaging for casings','Ultrasonic flaw detection','Digital inspection reporting'] },
  { icon: '🔩', title: 'Tread Application', items: ['Pre-cure tread laying machines','Extrusion lines for hot-process material','Precision splice systems','Tread width management'] },
];

export default function TyreMachineryPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">Tyre Machinery &amp; Equipment</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Industrial-grade retreading equipment engineered for reliability, precision, and high-volume production. Supporting operations from 5 to 500+ tyres per day.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((c) => (
            <div key={c.title} className="bg-white border border-gray-200 rounded-xl p-8 hover:border-safety-orange hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="text-2xl font-bold text-industrial-blue mb-4">{c.title}</h3>
              <ul className="space-y-2">
                {c.items.map(item => <li key={item} className="flex items-center gap-2 text-gray-600 text-sm"><span className="text-safety-orange">→</span>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black text-industrial-blue mb-4">Complete Turnkey Solutions</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">We supply and commission complete retreading plant fit-outs, from single machines to full production facilities. Includes installation, commissioning, and operator training.</p>
          <IndustrialCTAButton href="/contact">Request Equipment Quote</IndustrialCTAButton>
        </div>
      </div>
    </div>
  );
}
