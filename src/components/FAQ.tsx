// src/components/FAQ.tsx
import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  return (
    <section className="py-20 bg-accent text-white">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">
          Preguntas Frecuentes
        </h3>
        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white text-accent p-6 rounded shadow"
            >
              <h4 className="text-2xl font-bold mb-2">{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
