import React from "react";
import "./NavigationBarSection.css";

const navLinks = [
  { text: "Inicio", active: true },
  { text: "O Projeto", active: false },
  { text: "Eixos Temáticos", active: false },
  { text: "Trilha Pedagogica", active: false },
];

const partnerLogos = [
  {
    src: "/logosesis",
    alt: "Partner logo 1",
    width: "w-[21.22%]",
    height: "h-[18.06%]",
  },

  
];

export const NavigationBarSection = (): JSX.Element => {
  const [selectedNav, setSelectedNav] = React.useState<string>("Inicio");

  const handleNavClick = (linkText: string) => {
    setSelectedNav(linkText);
    if (linkText === "O Projeto") {
      const section = document.getElementById("project-overview");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        
      }
    }
     if (linkText === "Eixos Temáticos") {
      const section = document.getElementById("eixosTematicos");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        
      }
    }
     if (linkText === "Inicio") {
      const section = document.getElementById("inicio");
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        
      }
    }
    if (linkText === "Trilha Pedagogica") {
      const section = document.getElementById("trilhaPedagogica"); 
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        
      }
    }
  };
  return (
   <nav className="fixed top-0 left-0 z-50 w-full bg-[#397bff] px-4 py-3 sm:px-10">
  <div className="flex items-center justify-between w-full mx-auto overflow-x-hidden h-20">

    {/* LOGO ESQUERDA */}
    <img
      className=" logosaber w-auto h-20 flex-shrink-0 overflow-hidden"
      src="/testeLogoSaber.svg"
      alt="logo"
      
    />

    {/* LINKS — RESPONSIVOS E SEM SCROLL */}
    <div className="linksNav flex flex-col sm:flex-row gap-20 sm:gap-6 justify-center items-center flex-grow">
      {navLinks.map((link, index) => (
        <div
          key={index}
          onClick={() => handleNavClick(link.text)}
          className={`cursor-pointer ${
            selectedNav === link.text
              ? "font-bold text-[#d5f48c]"
              : "text-[#ededed]"
          }`}
        >
          {link.text}
        </div>
      ))}
    </div>

    {/* LOGO DIREITA */}
    <img
      className="h-8 sm:h-14 object-contain flex-shrink-0"
      src="/iniciativasesi.png"
      alt="parceiro"
    />
  </div>
</nav>




  );
};

