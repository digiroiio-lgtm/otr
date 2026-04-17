import type { Metadata } from 'next';
import CertificationsBanner from '@/components/CertificationsBanner';

export const metadata: Metadata = {
  title: 'About OTR Retreading',
  description: "Learn about OTR Retreading's mission, values, and commitment to delivering world-class industrial tyre solutions.",
};

export default function CompanyPage() {
  return (
    <div>
      <div className="bg-industrial-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">About OTR Retreading</h1>
          <p className="text-xl text-gray-300 max-w-3xl">A global leader in off-the-road tyre retreading technology, delivering measurable value to mining, construction, and agricultural fleets worldwide.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {[
            { title: 'Our Mission', icon: '🎯', text: 'To maximise the value of every OTR tyre casing through precision retreading processes, proprietary compounds, and expert field services — reducing cost, extending life, and minimising environmental impact.' },
            { title: 'Our Vision', icon: '🌍', text: 'A world where every retreatable OTR tyre is retreaded, reducing global rubber consumption, lowering fleet operating costs, and building a more sustainable extractive industry.' },
            { title: 'Our Values', icon: '⚡', text: 'Engineering excellence, uncompromising quality, environmental responsibility, and partnership with our clients. We succeed when your fleet succeeds.' },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <div className="text-5xl mb-4">{v.icon}</div>
              <h2 className="text-2xl font-black text-industrial-blue mb-4">{v.title}</h2>
              <p className="text-gray-600 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-2xl p-12 mb-12">
          <h2 className="text-3xl font-black text-industrial-blue mb-6">Why OTR Retreading?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">Founded by tyre engineers with decades of OTR experience, OTR Retreading was built from the ground up to address the specific challenges of large-format mining and construction tyres. We don&apos;t adapt passenger car retreading — we engineer for OTR.</p>
              <p className="text-gray-600 leading-relaxed">Our compound R&amp;D programme has produced 50+ proprietary formulations, 12 filed patents, and a body of technical knowledge unmatched in the retreading sector.</p>
            </div>
            <div>
              <ul className="space-y-3">
                {['Purpose-built OTR retreading processes','In-house compound R&D laboratory','Global network of field service technicians','ISO 9001, 14001, and 45001 certified','500+ active fleet clients across 35 countries'].map(p => (
                  <li key={p} className="flex items-center gap-3 text-gray-700"><span className="text-safety-orange font-bold text-xl">✓</span>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <CertificationsBanner />
    </div>
  );
}
