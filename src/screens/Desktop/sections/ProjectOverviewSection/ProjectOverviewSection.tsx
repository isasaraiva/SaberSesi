import { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";
import "./ProjectOverviewSection.css";

const objectives = [
  {
    text: "Formentar o letramento em saúde entre crianças e adolescentes da Rede SESI",
  },
  {
    text: "Desenvolver oficinas educativas, produtos digitais e ações interativas",
  },
  {
    text: "Promover autonomia e multiplicação do conhecimento para além do ambiente escolar",
  },
];

export const ProjectOverviewSection = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="project-overview" className="relative w-full bg-[#387bfe] py-8 px-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="sobre-pai flex-1 lg:max-w-[600px] lg:ml-[132px]">
            <div className="sobreImgTitulo mb-8 pt-10" >
              <img src="sobreOsaber.png" alt="" />
            </div>

            <div className=" sobreTexto-pai mt-24 mb-12">
              <div className=" mb-6">
                <h3 className="sobreTitulo [font-family:'Neulis_Cursive-SemiBold',Helvetica] font-semibold text-[#d5f48c] text-[32px] tracking-[0] leading-[36px]">
                  O impacto comunitário no presente e no futuro
                </h3>
              </div>
              <p className="text-center md:text-left lg:text-left sobreTexto [font-family:'Libre_Franklin',Helvetica] font-semibold text-[#c5b3ff] tracking-[0] leading-[normal] text-3xl">
                Essa geração de jovens terá domínio de seus hábitos e poderá ter
                uma vida mais saudável quando forem adultos. Porém, eles também
                se tornam agentes ativos dentro de seus círculos sociais desde
                já, influenciando positivamente família e amigos e comunidade.
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-end">
            <Badge className="bg-[#0346c8] text-[#c5b3ff] hover:bg-[#0346c8] [font-family:'Libre_Franklin',Helvetica] font-semibold text-base px-8 py-4 mb-6 rounded-none">
              Projeto piloto aprovado no âmbito do Edital Conexão SESI nº
              01/2025
            </Badge>
            <img
              className="w-full max-w-[518px] h-auto"
              alt="Frame"
              src="/menino (2).svg"
            />
          </div>
        </div>

        <div className="lg:ml-[132px] mb-12">
          <div className="relative inline-block mb-20">
            <h3 className="[font-family:'Neulis_Cursive-SemiBold',Helvetica] font-semibold text-[#ffe885] text-[32px] tracking-[0] leading-[26px] whitespace-nowrap">
              Objetivos
            </h3>
            <img
              className="absolute -bottom-5 left-0 w-full h-auto"
              alt="Vector"
              src="/vector-14.svg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1163px]">
            {objectives.map((objective, index) => (
              <div key={index} className="flex flex-col items-start">
                <img
                  className="w-[107px] h-[110px] mb-4"
                  alt="Adesivo amarelo"
                  src="/adesivo-09-amarelo.svg"
                />
                <p className="[font-family:'Libre_Franklin',Helvetica] font-semibold text-[#84e2f7] text-2xl tracking-[0] leading-[normal]">
                  {objective.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center px-4 lg:px-[130px] mt-16 hidden lg:block md:block">
          <Card 
            className="w-full max-w-[1176px] rounded-[40px] border-0 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <CardContent className="p-0">
              <img
                className="w-full h-[450px] transition-opacity duration-300"
                alt="Pattern texto"
                src={isHovered ? "/cardRoxo.png" : "/CardBranco.png"}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};