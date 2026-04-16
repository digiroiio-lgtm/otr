export default function CertificationsBanner() {
  const certs = [
    { code: 'ISO 9001:2015', label: 'Quality Management' },
    { code: 'ISO 14001:2015', label: 'Environmental Management' },
    { code: 'ISO 45001:2018', label: 'Occupational Health & Safety' },
  ];
  return (
    <div className="bg-gray-50 border-y border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Internationally Certified</p>
        <div className="flex flex-wrap justify-center gap-8">
          {certs.map((c) => (
            <div key={c.code} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-industrial-blue flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <p className="font-bold text-industrial-blue">{c.code}</p>
                <p className="text-xs text-gray-500">{c.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
