interface Props { metric: string; title: string; description: string; industry: string; }
export default function CaseStudyCard({ metric, title, description, industry }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-industrial-blue p-6">
        <span className="text-5xl font-black text-safety-orange">{metric}</span>
      </div>
      <div className="p-6">
        <span className="inline-block bg-safety-orange/10 text-safety-orange text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">{industry}</span>
        <h3 className="text-xl font-bold text-industrial-blue mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
