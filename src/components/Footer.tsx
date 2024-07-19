// src/components/Footer.tsx
import React from "react";

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <footer className="bg-primary text-white p-4">
      <div className="container mx-auto text-center">
        <p>{text}</p>
      </div>
    </footer>
  );
};

export default Footer;
