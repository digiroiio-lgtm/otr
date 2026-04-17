import type { Metadata } from 'next';
import CertificationsBanner from '@/components/CertificationsBanner';

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'OTR Retreading holds ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications.',
};

const certDetails = [
  {
    code: 'ISO 9001:2015',
    title: 'Quality Management System',
    color: 'border-blue-500',
    badge: 'bg-blue-600',
    desc: "The world's most recognised quality management standard. Our ISO 9001:2015 certification covers all retreading processes, compound manufacture, and field service operations.",
    scope: 'Retreading of off-the-road tyres including inspection, buffing, repair, tread application, curing, and final inspection.',
    benefits: ['Consistent process quality across all facilities','Documented procedures and work instructions','Regular internal and external audits','Continual improvement framework'],
  },
  {
    code: 'ISO 14001:2015',
    title: 'Environmental Management System',
    color: 'border-green-500',
    badge: 'bg-green-600',
    desc: 'Certified environmental management covering waste, emissions, water, and energy use across all OTR Retreading facilities.',
    scope: 'All operational activities at retreading facilities including chemical storage, waste management, energy use, and VOC emissions.',
    benefits: ['Systematic environmental risk management','Measured reduction in energy and waste','Regulatory compliance assurance','Annual sustainability reporting'],
  },
  {
    code: 'ISO 45001:2018',
    title: 'Occupational Health & Safety',
    color: 'border-yellow-500',
    badge: 'bg-yellow-600',
    desc: 'Comprehensive OH&S management covering all operational roles including field service technicians working in mining and construction environments.',
    scope: 'All workplace activities, including field services, manufacturing, laboratory operations, and office environments.',
    benefits: ['Systematic hazard identification and control','Worker participation in safety management','Incident investigation and prevention','FIFO and remote site safety protocols'],
  },
];

export default function CertificationsPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">Certifications</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Triple ISO certification — independently audited and verified by internationally accredited certification bodies.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-8">
          {certDetails.map((c) => (
            <div key={c.code} className={`bg-white border-l-4 ${c.color} border border-gray-200 rounded-xl p-8`}>
              <div className="flex flex-wrap justify-between items-start gap-6 mb-6">
                <div>
                  <span className={`inline-block ${c.badge} text-white font-bold px-4 py-2 rounded-lg mb-3`}>{c.code}</span>
                  <h2 className="text-2xl font-black text-industrial-blue">{c.title}</h2>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{c.desc}</p>
              <p className="text-sm text-gray-500 mb-4"><strong>Certification Scope:</strong> {c.scope}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {c.benefits.map(b => <li key={b} className="flex items-center gap-2 text-sm text-gray-700"><span className="text-safety-orange">✓</span>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <CertificationsBanner />
    </div>
  );
}
