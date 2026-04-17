import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'OTR retreading industry news, technology updates, and expert insights.',
};

const posts = [
  { date: 'March 15, 2025', tag: 'Industry', title: 'How Mining Operations Are Cutting Tyre Costs by 45% Through Systematic Retreading', excerpt: "We surveyed 50 mining operations across three continents and found that those with structured retreading programs consistently achieve 40–50% tyre cost reductions. Here's how they do it." },
  { date: 'February 8, 2025', tag: 'Technology', title: "Shearography NDE: Why it's Now the Gold Standard for OTR Casing Inspection", excerpt: 'Non-destructive evaluation has transformed how we assess casing quality. Learn how shearography identifies hidden delamination that X-ray alone misses, reducing retread failures.' },
  { date: 'January 22, 2025', tag: 'Sustainability', title: 'The Environmental Case for Retreading: 68% Less Energy Than New Tyre Production', excerpt: 'Life cycle analysis confirms that retreading is one of the most effective circular economy practices available to heavy industry. The numbers are compelling.' },
];

export default function BlogPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">Blog</h1>
          <p className="text-xl text-gray-300">Industry insights, technology updates, and best practices from our retreading specialists.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {posts.map((p) => (
            <article key={p.title} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-safety-orange/10 text-safety-orange text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">{p.tag}</span>
                <span className="text-gray-400 text-sm">{p.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-industrial-blue mb-3">{p.title}</h2>
              <p className="text-gray-600">{p.excerpt}</p>
              <button className="mt-4 text-safety-orange font-semibold hover:underline">Read More →</button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
