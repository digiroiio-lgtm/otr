import type { Metadata } from 'next';
import HeroSplitValue from '@/components/HeroSplitValue';
import SolutionsGrid from '@/components/SolutionsGrid';
import DiagonalSection from '@/components/DiagonalSection';
import IndustrialCTAButton from '@/components/IndustrialCTAButton';
import CertificationsBanner from '@/components/CertificationsBanner';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OTR Retreading | Industrial Tyre Solutions for Mining & Construction',
  description: 'Leading retreading systems, OTR tyre machinery, and technical compounds for mining, construction, and agricultural fleets. Cut tyre costs by 40%.',
  openGraph: {
    title: 'OTR Retreading | Industrial Tyre Solutions',
    description: 'Retreading systems, OTR machinery, and compounds engineered for demanding applications.',
    url: 'https://otrretreading.com',
    images: [{ url: '/og-home.jpg', width: 1200, height: 630, alt: 'OTR Retreading' }],
  },
};

const solutions = [
  { icon: '🔄', title: 'Retreading Systems', description: 'Hot and cold retreading processes engineered for maximum casing recovery and performance.', href: '/solutions/retreading-systems' },
  { icon: '⚙️', title: 'Tyre Machinery', description: 'Industrial tyre building and processing equipment for high-volume retreading operations.', href: '/solutions/tyre-machinery' },
  { icon: '🚜', title: 'OTR Services', description: 'On-site inspection, maintenance, and field service programs for off-the-road fleets.', href: '/solutions/otr-services' },
  { icon: '🧪', title: 'Technical Compounds', description: 'Proprietary rubber compounds and semi-finished materials for superior retread performance.', href: '/solutions/technical-compounds' },
];

const quickFAQs = [
  { question: 'How much can retreading save compared to buying new tyres?', answer: 'OTR retreading typically delivers 40–60% cost savings versus new tyre replacement, depending on tyre size, application, and casing quality. Many mining operations recover costs within the first retreading cycle.' },
  { question: 'Which tyre sizes and applications can be retreaded?', answer: 'We support a wide range of OTR sizes from 20.5R25 up to 59/80R63. Our processes are validated for mining haul trucks, loaders, graders, scrapers, and agricultural equipment.' },
  { question: 'What quality certifications does OTR Retreading hold?', answer: 'OTR Retreading is certified to ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), and ISO 45001:2018 (Occupational Health & Safety), ensuring consistent, audited processes.' },
];

export default function HomePage() {
  return (
    <>
      <HeroSplitValue />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-industrial-blue mb-4">Our Competitive Edge</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Decades of specialisation in off-the-road tyre retreading, backed by rigorous engineering and globally certified processes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { stat: '40%', label: 'Cost Reduction', detail: 'Average savings vs new OTR tyre replacement across all fleet types' },
              { stat: '2×', label: 'Tyre Life', detail: 'Extended service life achieved through our precision buffing and compound technology' },
              { stat: 'ISO 9001:2015', label: 'Certified', detail: 'International quality management certification ensuring consistent process excellence' },
            ].map((item) => (
              <div key={item.stat} className="text-center p-8 border border-gray-100 rounded-2xl hover:border-safety-orange hover:shadow-lg transition-all">
                <p className="text-5xl font-black text-safety-orange mb-2">{item.stat}</p>
                <p className="text-xl font-bold text-industrial-blue mb-3">{item.label}</p>
                <p className="text-gray-500 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-industrial-blue mb-4">Complete Retreading Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From retreading systems to field services, we support every aspect of your tyre lifecycle management.</p>
          </div>
          <SolutionsGrid solutions={solutions} />
        </div>
      </section>
      <DiagonalSection bg="bg-safety-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Transform Your Fleet Economics</h2>
          <p className="text-xl mb-10 text-orange-100">Join 500+ fleets worldwide cutting tyre costs and extending tyre life with OTR Retreading.</p>
          <IndustrialCTAButton href="/contact" className="bg-white text-safety-orange hover:bg-gray-100">Request a Quote Today</IndustrialCTAButton>
        </div>
      </DiagonalSection>
      <CertificationsBanner />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-black text-industrial-blue">Latest Resources</h2>
            <Link href="/resources" className="text-safety-orange font-semibold hover:underline">View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { tag: 'Guide', title: "OTR Tyre Retreading: The Complete Fleet Manager's Guide", date: 'March 2025', excerpt: 'Everything you need to know about implementing a retreading program for your off-the-road fleet.' },
              { tag: 'Blog', title: 'How Mining Operations Are Cutting Tyre Costs by 45%', date: 'February 2025', excerpt: 'A deep dive into how leading mining companies are leveraging retreading to dramatically reduce operating costs.' },
              { tag: 'Data Sheet', title: 'HF-Series Hot Cure Compound Technical Specifications', date: 'January 2025', excerpt: 'Full technical data for our flagship hot-cure rubber compound, including tensile strength and wear resistance data.' },
            ].map((r) => (
              <article key={r.title} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6">
                  <span className="inline-block bg-industrial-blue/10 text-industrial-blue text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">{r.tag}</span>
                  <p className="text-xs text-gray-400 mb-2">{r.date}</p>
                  <h3 className="text-lg font-bold text-industrial-blue mb-2">{r.title}</h3>
                  <p className="text-gray-600 text-sm">{r.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-industrial-blue mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-10">Quick answers to common questions about OTR retreading.</p>
          <FAQAccordion items={quickFAQs} />
          <div className="text-center mt-8">
            <Link href="/faq" className="text-safety-orange font-semibold hover:underline">See all FAQs →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
