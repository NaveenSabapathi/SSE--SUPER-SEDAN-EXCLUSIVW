"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How is the vehicle valuation calculated?",
    answer:
      "Our valuation algorithm analyzes multiple factors including regional demand patterns, ownership history, mileage, service records, current resale market trends, and comparable listings in your area. We combine real-time market data with historical transaction data to provide accurate, fair valuations.",
  },
  {
    question: "Do you inspect cars listed outside SSE?",
    answer:
      "Yes, we offer professional third-party inspection assistance for any pre-owned sedan, regardless of where it's listed. Our certified inspectors conduct comprehensive 200+ point evaluations covering mechanical condition, exterior, interior, electrical systems, and documentation verification.",
  },
  {
    question: "Can you help with interstate RTO transfers?",
    answer:
      "Absolutely. Our premium brokerage service includes end-to-end documentation assistance, which covers interstate RTO transfer processes. We handle everything from NOC procurement to number plate transfers, making cross-state vehicle purchases seamless.",
  },
  {
    question: "Is the appraisal completely free?",
    answer:
      "Yes, the initial market valuation through our platform is completely free. You'll receive an accurate price estimate based on current market conditions at no cost. Premium services like detailed inspections and brokerage assistance are available as optional paid services.",
  },
  {
    question: "Can I sell my sedan directly through SSE?",
    answer:
      "Yes, we facilitate direct sales through our platform. Sellers can list their sedans, receive verified valuations, and connect with qualified buyers. Our team provides negotiation support and handles the documentation process to ensure a smooth, transparent transaction.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 sm:py-24 bg-background"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-textMain mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-textMuted">
            Everything you need to know about our sedan services.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <article key={index} role="listitem">
              <div className="border border-borderMuted rounded-xl overflow-hidden">
                {/* Question header */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left bg-surface hover:bg-surface/80 transition-colors touch-target"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className="text-base sm:text-lg font-medium text-textMain">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 text-textMuted transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 py-5 text-textMuted leading-relaxed border-t border-borderMuted bg-background/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-textMuted mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-accentBlue hover:text-accentGold transition-colors font-medium"
          >
            Contact our team
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
