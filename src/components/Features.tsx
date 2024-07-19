// src/components/Features.tsx
import React from "react";

interface Feature {
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-secondary p-6 rounded shadow"
            >
              <h4 className="text-2xl font-bold mb-2">{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
