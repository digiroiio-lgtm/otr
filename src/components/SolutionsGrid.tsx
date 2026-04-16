import Link from 'next/link';
interface Solution { icon: string; title: string; description: string; href: string; }
interface Props { solutions: Solution[]; }
export default function SolutionsGrid({ solutions }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {solutions.map((s) => (
        <Link key={s.href} href={s.href} className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-safety-orange hover:shadow-lg transition-all">
          <div className="text-4xl mb-4">{s.icon}</div>
          <h3 className="text-lg font-bold text-industrial-blue mb-2 group-hover:text-safety-orange transition-colors">{s.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{s.description}</p>
          <span className="inline-block mt-4 text-safety-orange font-semibold text-sm">Learn More →</span>
        </Link>
      ))}
    </div>
  );
}
