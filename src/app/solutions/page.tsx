import type { Metadata } from 'next';
import SolutionsGrid from '@/components/SolutionsGrid';
import IndustrialCTAButton from '@/components/IndustrialCTAButton';

export const metadata: Metadata = {
  title: 'Retreading Solutions',
  description: 'Complete OTR retreading solutions including retreading systems, tyre machinery, field services, and technical compounds.',
};

const solutions = [
  { icon: '🔄', title: 'Retreading Systems', description: 'Hot and cold retreading processes engineered for maximum casing recovery and optimal performance in the most demanding applications.', href: '/solutions/retreading-systems' },
  { icon: '⚙️', title: 'Tyre Machinery', description: 'Industrial tyre building, buffing, and processing equipment engineered for high-volume retreading operations.', href: '/solutions/tyre-machinery' },
  { icon: '🚜', title: 'OTR Services', description: 'On-site inspection, maintenance planning, and field service programs for off-the-road tyre fleets.', href: '/solutions/otr-services' },
  { icon: '🧪', title: 'Technical Compounds', description: 'Proprietary rubber compounds, cushion gum, and semi-finished materials for superior retread bonding and durability.', href: '/solutions/technical-compounds' },
];

export default function SolutionsPage() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-industrial-blue mb-6">Complete OTR Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">From retreading systems and tyre machinery to field services and technical compounds — everything your fleet needs to maximise tyre life and minimise cost.</p>
        </div>
        <SolutionsGrid solutions={solutions} />
        <div className="mt-20 bg-industrial-blue rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-black mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">Our engineering team works directly with fleet operators to develop tailored retreading programs. Contact us to discuss your specific requirements.</p>
          <IndustrialCTAButton href="/contact">Get Expert Advice</IndustrialCTAButton>
        </div>
      </div>
    </div>
  );
}
