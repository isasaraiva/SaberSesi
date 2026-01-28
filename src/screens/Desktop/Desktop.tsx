import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { HeroSection } from "./sections/HeroSection";
import { HistorySection } from "./sections/HistorySection";
import { IllustrationSection } from "./sections/IllustrationSection";
import { ImageWrapperSection } from "./sections/ImageWrapperSection";
import { ImportanceSection } from "./sections/ImportanceSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { ProjectOverviewSection } from "./sections/ProjectOverviewSection";
import { TrilhaSection } from "./sections/TrilhaSection";
import { GameSection } from "./sections/GameSection/GameSection";
import { ProdutosSection } from "./sections/ProdutosSection/ProdutosSection"; 
import "./Desktop.css";

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-white w-full flex flex-col">
      <NavigationBarSection />
      <div className="">
        <HeroSection />
        <HistorySection />
        <ImportanceSection />
        <ProjectOverviewSection />
        <IllustrationSection />
        <ImageWrapperSection />
        <TrilhaSection />
        <GameSection />
        <ProdutosSection />
       
        <ContentWrapperSection />
      </div>

      <footer className="w-full h-[122px] bg-[#397bff] relative">
        <div className="footer-content absolute top-4 pb-8 left-8 w-[351px] h-[42px] bg-[#397bff]">
          <div>
            <img
              className="footer-logo z-10"
              alt="Partner logo 1"
              src="/group-9.png"
            />
          </div>
          <div className="flex flex-col pt-2">
            <p className="footer-text [font-family:'Libre_Franklin',Helvetica] font-normal text-[#c5b3ff] text-[20px] tracking-[0] pt-0 leading-[normal]">
              Quer saber mais?
            </p>
            <p className="footer-text [font-family:'Libre_Franklin',Helvetica] font-normal text-[#cbec85] text-[16px] tracking-[0] pt-0 leading-[normal]">
              Entre em contato conosco:
            </p>
            <a
              href="mailto:suportecis@sfiec.org.br"
              className="footer-text [font-family:'Libre_Franklin',Helvetica] font-normal text-[#fafbf7] text-[16px] tracking-[0] pt-0 leading-[normal] underline cursor-pointer"
            >
              inovacaosesi@sfiec.org.br
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
