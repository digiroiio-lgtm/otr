import type { Metadata } from 'next';
import CaseStudyCard from '@/components/CaseStudyCard';
import IndustrialCTAButton from '@/components/IndustrialCTAButton';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real-world results from OTR retreading programs in mining, construction, and agricultural fleets.',
};

const caseStudies = [
  {
    metric: '47%',
    title: 'Open-Cut Mining Operation Cuts Tyre Spend Nearly in Half',
    description: 'A major Australian iron ore producer retreaded 180 haul truck tyres per year through our program. By combining our HF-200 compound and systematic casing inspection, they achieved a 47% reduction in total tyre cost per hour versus their previous new-tyre-only approach.',
    industry: 'Mining',
  },
  {
    metric: '2.3×',
    title: 'Construction Fleet Extends Loader Tyre Life by 130%',
    description: 'A Southeast Asian construction contractor running 65 wheel loaders implemented our cold-process retreading program for L5 loader tyres. Average retreaded tyre life reached 2.3× the new tyre baseline, with zero in-field retread failures over 18 months.',
    industry: 'Construction',
  },
  {
    metric: '€1.2M',
    title: 'European Agricultural Co-op Saves €1.2M Annually',
    description: 'A European agricultural cooperative operating 400+ tractors and combine harvesters implemented our retreading program for IF and VF tyres. Annual tyre cost savings of €1.2M were achieved, with retreads demonstrating equivalent field performance to new premium tyres.',
    industry: 'Agriculture',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">Case Studies</h1>
          <p className="text-xl text-gray-300 max-w-3xl">Real results from real fleets. Documented cost savings and performance outcomes from retreading programs across mining, construction, and agriculture.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.title} {...cs} />
          ))}
        </div>
        <div className="bg-gray-50 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-black text-industrial-blue mb-4">Ready to Write Your Case Study?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Contact us to discuss a retreading program for your fleet. We&apos;ll provide a detailed ROI analysis before you commit.</p>
          <IndustrialCTAButton href="/contact">Get Your ROI Analysis</IndustrialCTAButton>
        </div>
      </div>
    </div>
  );
}
