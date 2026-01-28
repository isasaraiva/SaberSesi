import React from "react";
import "./ContentWrapperSection.css";

export const ContentWrapperSection = (): JSX.Element => {
  return (
    <section className=" contentWrapper relative w-full bg-[#c5b3ff] py-[180px] px-4">
      <div className="container mx-auto max-w-7xl">
        <div className=" contentWrapper-pai flex flex-col items-center justify-center gap-8">
          <div className="flex items-start justify-center w-full max-w-5xl gap-8">
            <img
              className=" imgContentWrapper w-[353px] h-[353px] flex-shrink-0"
              alt="Quote right"
              src="/quote-right-1.svg"
            />

            <div className=" textContentWrapper flex flex-col items-center justify-center flex-1 gap-4">
              <p className="[font-family:'Neulis_Cursive-SemiBold',Helvetica] font-semibold text-white text-5xl text-center tracking-[0] leading-[61.0px]">
                O ser humano é aquilo que a educação faz dele.
              </p>

              <p className="[font-family:'Neulis_Cursive-SemiBold',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-8">
                Immanuel Kant
              </p>
            </div>

            <img
              className=" imgGroup w-[183px] h-[179px] flex-shrink-0"
              alt="Group"
              src="/group-9.png"
            />
          </div>

          <img
            className="relative w-full h-auto max-w-4xl pl-20"
            alt="Frame"
            src="/frame-177.svg"
          />
        </div>
      </div>
    </section>
  );
};
