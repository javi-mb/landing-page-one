// src/components/Header.tsx
import React from "react";

interface HeaderProps {
  title: string;
  links: { href: string; label: string }[];
}

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">{title}</h1>
        <nav>
          <ul className="flex space-x-4">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
