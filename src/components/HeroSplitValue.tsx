import IndustrialCTAButton from './IndustrialCTAButton';
export default function HeroSplitValue() {
  const stats = [
    { value: '40%', label: 'Average cost reduction vs new tyres' },
    { value: '2×', label: 'Extended tyre service life' },
    { value: '500+', label: 'Fleet clients worldwide' },
  ];
  return (
    <div className="flex flex-col lg:flex-row min-h-[600px]">
      <div className="flex-1 bg-industrial-blue flex flex-col justify-center px-8 lg:px-16 py-20">
        <span className="text-safety-orange font-semibold text-sm uppercase tracking-widest mb-4">OTR Retreading Solutions</span>
        <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
          Maximize Fleet<br />
          <span className="text-safety-orange">Performance.</span><br />
          Minimize Cost.
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg">
          Industry-leading retreading systems, OTR tyre machinery, and technical compounds engineered for the world&apos;s most demanding mining, construction, and agricultural applications.
        </p>
        <div className="flex flex-wrap gap-4">
          <IndustrialCTAButton href="/contact">Request a Quote</IndustrialCTAButton>
          <a href="/solutions" className="inline-block border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white hover:text-industrial-blue transition-colors">
            Explore Solutions
          </a>
        </div>
      </div>
      <div className="flex-1 bg-gray-900 flex flex-col justify-center px-8 lg:px-16 py-20">
        <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest mb-8">Performance Metrics</p>
        <div className="space-y-8">
          {stats.map((s) => (
            <div key={s.label} className="border-l-4 border-safety-orange pl-6">
              <p className="text-5xl font-black text-white mb-1">{s.value}</p>
              <p className="text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
