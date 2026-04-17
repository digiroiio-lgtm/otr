import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Data Sheets',
  description: 'Downloadable technical data sheets for OTR retreading compounds, equipment, and materials.',
};

const sheets = [
  { code: 'TDS-HF-001', name: 'HF-100 Hot Cure Tread Compound', type: 'Compound', rev: 'Rev 4', date: 'Jan 2025' },
  { code: 'TDS-HF-002', name: 'HF-200 Mining Grade Tread Compound', type: 'Compound', rev: 'Rev 2', date: 'Nov 2024' },
  { code: 'TDS-CC-001', name: 'CC-300 Cushion Gum (3mm)', type: 'Compound', rev: 'Rev 5', date: 'Jan 2025' },
  { code: 'TDS-CC-002', name: 'CC-400 High-Tack Cushion Gum (4mm)', type: 'Compound', rev: 'Rev 3', date: 'Oct 2024' },
  { code: 'TDS-EQ-001', name: 'OTR-2000 CNC Buffing Machine', type: 'Equipment', rev: 'Rev 1', date: 'Dec 2024' },
  { code: 'TDS-EQ-002', name: 'ACT-500 Autoclave System', type: 'Equipment', rev: 'Rev 2', date: 'Sep 2024' },
];

export default function TechDataSheetsPage() {
  return (
    <div className="py-20">
      <div className="bg-industrial-blue py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-black text-white mb-6">Technical Data Sheets</h1>
          <p className="text-xl text-gray-300">Complete product specifications, test data, and application guidelines for all OTR Retreading products.</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-6 py-4 text-sm font-bold text-gray-500 uppercase tracking-wider">Code</th>
                <th className="text-left px-6 py-4 text-sm font-bold text-gray-500 uppercase tracking-wider">Product Name</th>
                <th className="text-left px-6 py-4 text-sm font-bold text-gray-500 uppercase tracking-wider">Type</th>
                <th className="text-left px-6 py-4 text-sm font-bold text-gray-500 uppercase tracking-wider">Revision</th>
                <th className="text-left px-6 py-4 text-sm font-bold text-gray-500 uppercase tracking-wider">Updated</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sheets.map((s) => (
                <tr key={s.code} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm text-safety-orange font-bold">{s.code}</td>
                  <td className="px-6 py-4 font-medium text-industrial-blue">{s.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{s.type}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{s.rev}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{s.date}</td>
                  <td className="px-6 py-4"><button className="text-safety-orange font-semibold text-sm hover:underline">Download PDF</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
