// src/components/Hero.tsx
import React from "react";

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({
  headline,
  subheadline,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="bg-primary text-white text-center py-20">
      <h2 className="text-4xl font-bold mb-4">{headline}</h2>
      <p className="text-xl mb-8">{subheadline}</p>
      <a href={ctaLink} className="bg-accent text-primary py-2 px-4 rounded">
        {ctaText}
      </a>
    </section>
  );
};

export default Hero;
