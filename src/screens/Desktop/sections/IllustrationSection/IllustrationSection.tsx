import React from "react";
import "./IllustrationSection.css";

export const IllustrationSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#0346c8] py-[183px] px-[83px]">
      <div className="absolute w-[40px] h-[40px] top-[355px] right-[326px] bg-white rounded-[20px]" />

      <img
        className="absolute w-[168px] h-[193px] top-[264px] right-[140px]"
        alt="Star"
        src="/star-6-1.svg"
      />

      <div className="absolute w-[70px] h-[70px] top-[259px] right-[286px] bg-[#ffd505] rounded-[35px]" />

      <div className="relative max-w-[1182px] mx-auto">
        <img
          className="mb-[101px] w-[257px] h-[110px]"
          alt="Frame"
          src="/frame-163.svg"
        />

        <div className="mb-[59px] [font-family:'Neulis_Cursive-SemiBold',Helvetica] font-semibold text-[#ffe885] text-[32px] tracking-[0] leading-[26px]">
          Pilares
        </div>

        <div className="[font-family:'Libre_Franklin',Helvetica] font-medium text-white text-2xl text-justify leading-[38.4px] tracking-[0]">
          O projeto estrutura-se em três pilares integrados:
          <br />
          <br />
          <span className="relative inline-block">
            Tecnológico
            <img
              className="absolute top-[28px] left-0 w-[154px] h-4"
              alt="Vector"
              src="/vector-10.svg"
            />
          </span>
          : Uso estratégico de ferramentas digitais, plataformas online (Agenda
          Edu, Microsoft Teams), realidade virtual e inteligência artificial
          para criar e disseminar conteúdo de forma inovadora e escalável.
          <br />
          <br />
          <span className="relative inline-block">
            Mão na Massa
            <img
              className="absolute top-[28px] left-0 w-[178px] h-[23px]"
              alt="Vector"
              src="/vector-11.svg"
            />
          </span>
          : Atividades práticas onde os alunos criam produtos educacionais
          (podcasts, vídeos, HQs, redações), promovendo o protagonismo
          estudantil e transformando-os de receptores passivos em criadores
          ativos de conhecimento.
          <br />
          <br />
          <span className="relative inline-block">
            Instrucional
            <img
              className="absolute top-[24px] left-0 w-[152px] h-[26px]"
              alt="Vector"
              src="/vector-12.svg"
            />
          </span>
          : Desenvolvimento de conteúdo formativo de alta qualidade através de
          oficinas, palestras e materiais de apoio para capacitar educadores e
          aprofundar conhecimentos em saúde.
        </div>
      </div>
    </section>
  );
};
