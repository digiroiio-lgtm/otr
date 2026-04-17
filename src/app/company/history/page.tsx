import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company History',
  description: 'The history of OTR Retreading — from founding to global operations.',
};

const milestones = [
  { year: '2007', title: 'Founded', desc: 'OTR Retreading established by a team of tyre engineers focused exclusively on off-the-road applications.' },
  { year: '2009', title: 'First ISO Certification', desc: 'Achieved ISO 9001:2008 certification, establishing our quality management framework.' },
  { year: '2011', title: 'Compound R&D Lab Opens', desc: 'Launched dedicated rubber compound research and development facility with full polymer testing capability.' },
  { year: '2014', title: 'First Mining Contract', desc: 'Secured first major open-cut mining retread contract — processing 200+ haul truck tyres per year.' },
  { year: '2016', title: 'International Expansion', desc: 'Opened operations in Europe and Asia-Pacific, serving clients on four continents.' },
  { year: '2019', title: 'ISO Triple Certification', desc: 'Achieved simultaneous certification to ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018.' },
  { year: '2022', title: '500 Fleet Milestone', desc: 'Reached 500 active fleet clients across 35 countries — retreading over 20,000 OTR tyres annually.' },
  { year: '2025', title: 'R&D Expansion', desc: 'Announced major R&D investment including AI-assisted compound formulation and automated NDE inspection systems.' },
];

export default function HistoryPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">Our History</h1>
          <p className="text-xl text-gray-300 max-w-3xl">From a small specialist retreader to a global leader in OTR tyre solutions — our journey built on engineering excellence and client outcomes.</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          <div className="space-y-12">
            {milestones.map((m) => (
              <div key={m.year} className="relative flex gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-safety-orange rounded-full flex items-center justify-center text-white font-black text-sm z-10">
                  {m.year}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl font-bold text-industrial-blue mb-2">{m.title}</h3>
                  <p className="text-gray-600">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
