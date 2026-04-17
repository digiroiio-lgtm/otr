'use client';
import { useState } from 'react';
interface FAQItem { question: string; answer: string; }
interface Props { items: FAQItem[]; }
export default function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-industrial-blue hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{item.question}</span>
            <span className="text-safety-orange text-xl">{open === i ? '−' : '+'}</span>
          </button>
          {open === i && (
            <div className="px-6 py-4 text-gray-600 border-t border-gray-200 bg-gray-50">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
