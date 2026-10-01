import { useState } from 'react';

const faqs = [
  {
    q: "How long does delivery take?",
    a: "Usually 2-4 business days within Bangladesh.",
  },
  {
    q: "Do you offer Cash on Delivery?",
    a: "Yes, Cash on Delivery is available nationwide.",
  },
  {
    q: "Can I return a product?",
    a: "If the product is unopened and unused, returns are accepted within 3 days.",
  },
  {
    q: "Are the fragrances original?",
    a: "Yes, all our products are 100% authentic.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-10 py-10">
      <h2 className="text-2xl font-bold mb-6 text-blue-300">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-3 max-w-2xl">
        {faqs.map((item, i) => (
          <div key={i} className="border border-gray-800 rounded-lg p-4">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left font-medium text-blue-300 flex justify-between"
            >
              {item.q}
              <span>{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <p className="text-blue-400 mt-2 text-sm">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;