import type { Metadata } from 'next';
import SchemaInjector from '@/components/SchemaInjector';
import IndustrialCTAButton from '@/components/IndustrialCTAButton';

export const metadata: Metadata = {
  title: 'Technical Rubber Compounds',
  description: 'Proprietary rubber compounds and semi-finished materials for OTR retreading. Hot cure, cold process, and cushion gum products.',
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProductCollection',
  name: 'OTR Technical Compounds',
  description: 'Rubber compounds for OTR tyre retreading applications',
  brand: { '@type': 'Brand', name: 'OTR Retreading' },
};

const products = [
  { code: 'HF-Series', name: 'Hot Cure Tread Compound', desc: 'High-durability rubber compound for hot retreading. Excellent cut and chip resistance for mining haul roads.', props: ['Hardness: 65±3 Shore A','Tensile strength: ≥18 MPa','Elongation at break: ≥400%','Abrasion resistance: Grade A'] },
  { code: 'CC-Series', name: 'Cold Process Cushion Gum', desc: 'Tacky uncured cushion gum for cold process retreading. Superior adhesion in all temperature conditions.', props: ['Gauge: 2mm, 3mm, 4mm','Tack: Class 1 (highest)','Shelf life: 18 months','Cure temp: 115–125°C'] },
  { code: 'SF-Series', name: 'Sidewall & Repair Compound', desc: 'Flexible rubber compound for repair and sidewall protection applications.', props: ['Excellent flex fatigue resistance','UV and ozone resistant','Available in black and coloured','Extruded strips or sheet form'] },
];

export default function TechnicalCompoundsPage() {
  return (
    <>
      <SchemaInjector schema={productSchema} />
      <div className="py-20">
        <div className="bg-industrial-blue py-20 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-black text-white mb-6">Technical Rubber Compounds</h1>
            <p className="text-xl text-gray-300 max-w-3xl">50+ proprietary rubber compound formulations developed over 15 years of OTR retreading research. Consistent performance. Verified quality.</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 mb-16">
            {products.map((p) => (
              <div key={p.code} className="bg-white border border-gray-200 rounded-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <span className="inline-block bg-safety-orange text-white text-xs font-bold px-3 py-1 rounded mb-3">{p.code}</span>
                  <h3 className="text-2xl font-bold text-industrial-blue mb-3">{p.name}</h3>
                  <p className="text-gray-600">{p.desc}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">Key Properties</p>
                  <ul className="space-y-2">
                    {p.props.map(prop => <li key={prop} className="text-sm text-gray-700 flex items-start gap-2"><span className="text-safety-orange">•</span>{prop}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-6">Request full technical data sheets or discuss custom compound development.</p>
            <IndustrialCTAButton href="/contact">Request Data Sheets</IndustrialCTAButton>
          </div>
        </div>
      </div>
    </>
  );
}
