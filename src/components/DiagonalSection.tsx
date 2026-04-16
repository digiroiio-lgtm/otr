interface Props { bg?: string; children: React.ReactNode; className?: string; }
export default function DiagonalSection({ bg = 'bg-safety-orange', children, className = '' }: Props) {
  return (
    <section className={`relative py-24 ${bg} ${className}`} style={{ clipPath: 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)' }}>
      {children}
    </section>
  );
}
