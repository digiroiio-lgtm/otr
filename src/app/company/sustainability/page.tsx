import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sustainability',
  description: "OTR Retreading's environmental commitments and sustainability program.",
};

export default function SustainabilityPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">Sustainability</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Retreading is inherently sustainable. We go further — reducing waste, minimising energy use, and actively measuring our environmental contribution.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { stat: '68%', label: 'Less energy', detail: 'versus new tyre manufacturing per tyre equivalent' },
            { stat: '80%', label: 'Less rubber', detail: 'by weight compared to producing a new tyre' },
            { stat: '20,000+', label: 'Tyres retreaded', detail: 'annually — each one diverted from landfill' },
          ].map((s) => (
            <div key={s.stat} className="text-center p-8 bg-green-50 border border-green-200 rounded-2xl">
              <p className="text-5xl font-black text-green-700 mb-2">{s.stat}</p>
              <p className="text-xl font-bold text-gray-800 mb-2">{s.label}</p>
              <p className="text-gray-500 text-sm">{s.detail}</p>
            </div>
          ))}
        </div>
        <div className="space-y-8">
          {[
            { icon: '♻️', title: 'Circular Economy', desc: 'By restoring tyre casings rather than replacing them, retreading extends the useful life of every tyre — the most effective circular economy solution available to fleet operators.' },
            { icon: '🌱', title: 'ISO 14001:2015 Certified', desc: 'Our Environmental Management System is independently audited and certified. We track waste generation, water use, VOC emissions, and energy consumption across all facilities.' },
            { icon: '⚡', title: 'Energy Efficiency', desc: 'Continuous investment in energy-efficient curing equipment, LED facility lighting, and renewable energy sourcing has reduced our energy intensity by 35% since 2015.' },
          ].map((c) => (
            <div key={c.title} className="bg-white border border-gray-200 rounded-xl p-8 flex gap-6">
              <span className="text-4xl flex-shrink-0">{c.icon}</span>
              <div>
                <h3 className="text-xl font-bold text-industrial-blue mb-2">{c.title}</h3>
                <p className="text-gray-600">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
