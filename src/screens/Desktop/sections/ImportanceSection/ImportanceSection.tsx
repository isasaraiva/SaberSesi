import React from "react";
import "./ImportanceSection.css";

export const ImportanceSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-[#f3f9f9] py-28 px-4 ">
      <div className="max-w-[1440px] mx-auto">
        <div className="relative w-full max-w-[1181px] mx-auto ">
          <img
            className="w-full h-auto"
            alt="Gráfico da Jornada"
            src="/Grafico da Jornada.png"
          />
        </div>
<div className=" importanceMb mb-16 flex flex-col items-center z-10"> 
  
  <div> <img className="w-20 h-20 mix-blend-multiply" src="team.gif" /></div>
       
        <div className="  importanceTitle flex justify-center ">

          <h2
            className="max-w-[489px] font-semibold text-[#0346c8] text-[49px] text-center tracking-[1.50px] leading-[56px]"
            style={{ fontFamily: "'Neulis Cursive', cursive" }}
          >
            Por que o projeto é importante?
          </h2>
        </div>
</div>


        <div className=" importanceText flex justify-center">
          <p className="max-w-[991px] [font-family:'Libre_Franklin',Helvetica] font-normal text-[#0346c8] text-[27.8px] text-center tracking-[0] leading-[normal]">
            A infância e a adolescência são fases decisivas na construção de
            hábitos que acompanharão a vida adulta. É nesse período que
            escolhas, rotinas e percepções sobre o próprio corpo e bem-estar
            começam a se consolidar. Quando crianças e jovens não têm acesso a
            informações de qualidade, aumentam-se os riscos de problemas de
            saúde que poderiam ser facilmente evitados por meio de educação
            adequada. Por isso, investir na formação em saúde dentro da escola
            significa muito mais do que ensinar conteúdos: é preparar futuros
            adultos mais conscientes, saudáveis e protagonistas das suas
            próprias escolhas capazes de cuidar de si, influenciar positivamente
            quem está ao redor e transformar suas comunidades.
          </p>
        </div>
      </div>
    </section>
  );
};
