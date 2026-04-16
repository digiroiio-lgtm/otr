import type { Metadata } from 'next';
import IndustrialCTAButton from '@/components/IndustrialCTAButton';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the OTR Retreading team. Open positions in engineering, field services, and operations.',
};

const positions = [
  { title: 'Senior Tyre Engineer — R&D', location: 'Perth, Australia', type: 'Full Time', desc: 'Lead compound formulation projects within our R&D laboratory. Requires polymer chemistry background and OTR tyre experience. 8+ years preferred.' },
  { title: 'Field Service Technician — OTR', location: 'Multiple Locations', type: 'Full Time', desc: 'On-site tyre inspection, repair, and fleet management services at mining operations. FIFO available. Tyre industry certification required.' },
  { title: 'Regional Sales Manager — Americas', location: 'Houston, TX / Remote', type: 'Full Time', desc: 'Drive retreading solutions sales across North and South American mining and construction markets. 5+ years B2B industrial sales.' },
];

export default function CareersPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">Careers</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Join a team of tyre engineering specialists driving innovation in industrial retreading. We offer challenging work, global exposure, and industry-leading technical training.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-16">
          {positions.map((p) => (
            <div key={p.title} className="bg-white border border-gray-200 rounded-xl p-8 hover:border-safety-orange hover:shadow-lg transition-all">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-industrial-blue">{p.title}</h3>
                  <div className="flex gap-4 mt-2">
                    <span className="text-sm text-gray-500">📍 {p.location}</span>
                    <span className="text-sm text-gray-500">⏰ {p.type}</span>
                  </div>
                </div>
                <button className="bg-safety-orange text-white font-bold px-6 py-3 rounded hover:bg-orange-700 transition-colors">Apply Now</button>
              </div>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-black text-industrial-blue mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-gray-600 mb-6">We&apos;re always looking for talented people. Send us your CV and we&apos;ll be in touch when the right opportunity arises.</p>
          <IndustrialCTAButton href="/contact">Send Your CV</IndustrialCTAButton>
        </div>
      </div>
    </div>
  );
}
