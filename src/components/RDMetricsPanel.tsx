export default function RDMetricsPanel() {
  const metrics = [
    { value: '15+', label: 'Years of Research' },
    { value: '50+', label: 'Compound Formulations' },
    { value: '12', label: 'Patents Filed' },
  ];
  return (
    <div className="bg-industrial-blue rounded-2xl p-10 text-white">
      <h3 className="text-2xl font-black mb-8 text-center">R&amp;D Capabilities</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <p className="text-5xl font-black text-safety-orange mb-2">{m.value}</p>
            <p className="text-gray-300 font-medium">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
