// src/pages/index.tsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  const headerLinks = [
    { href: "#", label: "Inicio" },
    { href: "#features", label: "Características" },
    { href: "#faq", label: "Preguntas Frecuentes" },
    { href: "#contact", label: "Contacto" },
  ];

  const featuresData = [
    {
      title: "Característica 1",
      description: "Descripción de la característica 1.",
    },
    {
      title: "Característica 2",
      description: "Descripción de la característica 2.",
    },
    {
      title: "Característica 3",
      description: "Descripción de la característica 3.",
    },
  ];

  const faqData = [
    {
      question: "¿Qué es este producto?",
      answer: "Este producto es una gran solución para tus necesidades.",
    },
    {
      question: "¿Cómo funciona?",
      answer:
        "Funciona de manera impecable integrándose con tus sistemas existentes.",
    },
    {
      question: "¿Hay una prueba gratuita?",
      answer:
        "Sí, ofrecemos una prueba gratuita de 14 días para nuevos usuarios.",
    },
  ];

  return (
    <div>
      <Header title="Logo pagina" links={headerLinks} />
      <Hero
        headline="Bienvenido al template de Opengrow"
        subheadline="Este es el template numero uno de opengrow, usandolo para una landing page."
        ctaText="Comenzar"
        ctaLink="#"
      />
      <Features features={featuresData} />
      <FAQ items={faqData} />
      <Footer text="© 2024 Mi Página de Aterrizaje. Todos los derechos reservados." />
    </div>
  );
};

export default Home;
