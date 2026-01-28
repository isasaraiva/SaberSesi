import React from "react";
import "./HeroSection.css";

export const HeroSection = (): JSX.Element => {
  return (
    <section className=" hero-pai relative w-full bg-[#0346c8] py-16 px-8 overflow-hidden" id="inicio">
      <div className="relative max-w-[1440px] mx-auto min-h-[862px]">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-start">
          <div className="flex flex-col mt-10">
            <h1 className="[font-family:'Neulis_Cursive-SemiBold',Helvetica] font-semibold text-[#d5f48c] p-16 text-[49px] tracking-[1.50px] leading-[56px] max-w-[683px] hero-title">
              Um movimento chamado{" "}
              <span className="text-[#c391ea] ">SABER</span> que transforma conhecimento em atitudes de cuidado,
              ensinando nossos alunos a cuidar de si, do outro e da comunidade.
            </h1>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end ">
           
            <img
              className=" hero-img-heart pt-12 relative z-10 left-36 top-10 w-[130%] max-w-[784px] h-auto"
              alt="Frame"
              src="/vectorCoracao2.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
