import type { Metadata } from 'next';
import IndustrialCTAButton from '@/components/IndustrialCTAButton';

export const metadata: Metadata = {
  title: 'OTR Field Services',
  description: 'On-site OTR tyre inspection, maintenance, and fleet management services for mining, construction, and agricultural operations.',
};

export default function OTRServicesPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">OTR Field Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">On-site inspection, preventative maintenance, and tyre lifecycle management services that maximise casing recovery and reduce unplanned downtime.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: '🔍', title: 'Fleet Inspection Programs', description: 'Scheduled on-site inspection of your entire OTR fleet. Our certified inspectors assess tread depth, sidewall condition, bead integrity, and retreading suitability — providing written reports for every tyre.' },
            { icon: '📊', title: 'Tyre Management Consulting', description: 'Data-driven tyre lifecycle management. We analyse your fleet data to identify cost reduction opportunities, optimal rotation intervals, and casing recovery potential.' },
            { icon: '🛠️', title: 'On-Site Repair Services', description: 'Rapid response repair services for in-field tyre damage. Our teams handle crown repairs, sidewall injuries, and bead damage using certified repair materials.' },
          ].map((s) => (
            <div key={s.title} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-industrial-blue mb-3">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="bg-industrial-blue rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Reduce Tyre Downtime?</h2>
          <p className="text-gray-300 mb-8">Contact us to discuss a field services program tailored to your operation.</p>
          <IndustrialCTAButton href="/contact">Schedule an Inspection</IndustrialCTAButton>
        </div>
      </div>
    </div>
  );
}
