import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaInjector from '@/components/SchemaInjector';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about OTR tyre retreading, processes, quality, and cost savings.',
};

const faqs = [
  { question: 'How much can I save by retreading instead of buying new OTR tyres?', answer: 'Typical savings are 40–60% of the equivalent new tyre cost. The exact saving depends on tyre size, application severity, and casing condition. Our ROI calculators, available on request, allow you to model savings based on your specific fleet data.' },
  { question: 'How many times can an OTR tyre casing be retreaded?', answer: 'Most OTR casings in good condition can be retreaded 2–3 times. Some large mining tyres (e.g., 40.00R57) may be retreaded 3–4 times if they are operating in controlled applications and are maintained well between retreads. Casing integrity is assessed at every retread cycle.' },
  { question: 'What is the difference between hot retreading and cold retreading?', answer: 'Hot retreading applies uncured rubber directly to the casing and cures it in a press or autoclave at 150–160°C. Cold retreading applies pre-vulcanised tread rubber with cushion gum and cures at lower temperatures. Hot retreading is preferred for large OTR sizes; cold retreading offers faster turnaround for smaller sizes.' },
  { question: 'Are retreaded tyres as safe as new tyres?', answer: 'Yes, when properly manufactured by a certified retreader. Our retreads conform to the same international standards as new tyres (ISO 10498 for OTR retreads). All aircraft tyres are retreaded — a fact that underlines the safety credentials of the process when done correctly.' },
  { question: 'How long does the retreading process take?', answer: 'Turnaround depends on volume and current capacity. Typical turnaround is 5–10 business days from receipt of casing to dispatch of retreaded tyre. We offer expedited turnaround for critical fleet requirements.' },
  { question: 'What tyre sizes can OTR Retreading handle?', answer: 'We process OTR sizes from 20.5R25 up to 59/80R63 — covering the full range from compact loaders to the largest mining haul trucks. Our buffing and curing equipment is specifically designed for large-format OTR tyres.' },
  { question: 'Can all tyres be retreaded?', answer: 'No. A thorough casing inspection is required before retreading. Tyres with significant structural damage, bead failure, or severe sidewall injury may be rejected. Our inspection process follows OTRACO and TRIB guidelines and results in a written inspection report for every tyre assessed.' },
  { question: 'What warranty do retreaded tyres carry?', answer: 'All retreads carry our standard 12-month or X,XXX-hour operational warranty covering manufacturing defects. Warranty terms are specified in our supply agreement and vary by application class.' },
  { question: 'Do you offer on-site services at mining operations?', answer: 'Yes. Our field service technicians provide on-site tyre inspection, repair, and management programs at mining and construction sites. FIFO rotations and site-specific inductions are standard. Contact us to discuss a site service arrangement.' },
  { question: 'What certifications does OTR Retreading hold?', answer: 'OTR Retreading holds ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Occupational Health & Safety). All certifications are independently audited by an accredited third-party certifying body.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <SchemaInjector schema={faqSchema} />
      <div className="py-20">
        <div className="bg-industrial-blue py-20 mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-black text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 max-w-3xl">Everything you need to know about OTR tyre retreading, our processes, and how we can help your fleet.</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </>
  );
}
