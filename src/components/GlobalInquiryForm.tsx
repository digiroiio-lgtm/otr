'use client';
import { useState } from 'react';
export default function GlobalInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <p className="text-2xl font-bold text-green-700 mb-2">Thank you!</p>
        <p className="text-green-600">Your inquiry has been received. Our team will respond within 24 hours.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
          <input required type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-safety-orange" placeholder="John Smith" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
          <input required type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-safety-orange" placeholder="john@company.com" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
          <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-safety-orange" placeholder="Your Company" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
          <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-safety-orange" placeholder="+1 234 567 8900" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
          <input required type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-safety-orange" placeholder="United States" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type *</label>
          <select required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-safety-orange">
            <option value="">Select type...</option>
            <option>Retreading Systems</option>
            <option>Tyre Machinery</option>
            <option>OTR Services</option>
            <option>Technical Compounds</option>
            <option>General Inquiry</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
        <textarea required rows={5} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-safety-orange" placeholder="Describe your requirements, fleet size, application, etc." />
      </div>
      <button type="submit" className="bg-safety-orange text-white font-bold px-10 py-4 rounded shadow-cta hover:bg-orange-700 transition-colors w-full md:w-auto">
        Send Inquiry
      </button>
    </form>
  );
}
