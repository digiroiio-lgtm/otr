import type { Metadata } from 'next';
import GlobalInquiryForm from '@/components/GlobalInquiryForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact OTR Retreading for retreading systems, machinery, field services, or technical compound inquiries.',
};

const regions = [
  { name: 'Americas', email: 'americas@otrretreading.com', phone: '+1 713 555 0100', address: 'Houston, TX, United States' },
  { name: 'Europe & Africa', email: 'europe@otrretreading.com', phone: '+44 20 7555 0100', address: 'London, United Kingdom' },
  { name: 'Asia-Pacific', email: 'apac@otrretreading.com', phone: '+61 8 9555 0100', address: 'Perth, WA, Australia' },
];

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Whether you need a quote, technical advice, or want to discuss a fleet retreading program — our team is ready to help.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {regions.map((r) => (
            <div key={r.name} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-safety-orange transition-colors">
              <h3 className="text-xl font-black text-industrial-blue mb-4">{r.name}</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>📧 <a href={`mailto:${r.email}`} className="hover:text-safety-orange">{r.email}</a></p>
                <p>📞 {r.phone}</p>
                <p>📍 {r.address}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-10">
          <h2 className="text-3xl font-black text-industrial-blue mb-8">Send an Inquiry</h2>
          <GlobalInquiryForm />
        </div>
      </div>
    </div>
  );
}
