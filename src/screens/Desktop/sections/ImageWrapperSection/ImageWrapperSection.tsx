import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import "./ImageWrapperSection.css";

const thematicAxes = [
  {
    icon: "/storiesartboard-7-copy-27.svg",
    title: "Alimentação",
    description: "Nutrição consciente e leitura crítica de rótulos",
    iconWidth: "w-[144px]",
    iconHeight: "h-[144px]",
  },
  {
    icon: "/frame-168.svg",
    title: "Saúde Mental",
    description: "Bem-estar emocional e gestão da saúde mental",
    iconWidth: "w-[81px]",
    iconHeight: "h-[107px]",
  },
  {
    icon: "/frame-170.svg",
    title: "Saúde e Segurança do Trabalho",
    description: "Prevenção de acidentes e percepção de risco",
    iconWidth: "w-[88px]",
    iconHeight: "h-[92px]",
  },
  {
    icon: "/frame-172.svg",
    title: "Exercício Físico",
    description: "Combate ao sedentarismo e promoção da atividade física",
    iconWidth: "w-[111px]",
    iconHeight: "h-[95px]",
  },
];

const targetAudiences = [
  "Estudantes do Ensino Fundamental e Médio",
  "Professores e Educadores",
  "Famílias dos alunos e comunidade s escolares locais",
];

export const ImageWrapperSection = (): JSX.Element => {
	return (
		<section
			className="relative w-full bg-[#84e2f7] overflow-hidden py-16 px-4"
			id="eixosTematicos"
		>
			<img
				className="absolute w-[129.10%] h-[127.43%] top-[-4.90%] left-0 pointer-events-none"
				alt="Vector"
				src="/vector-1.svg"
			/>

			<div className="relative max-w-[1440px] mx-auto ">
				<h2 className="text-center [font-family:'Neulis_Cursive',cursive] font-semibold text-[#0346c8] text-[32px] tracking-[0] leading-[26px] mb-12">
					Eixos Temáticos
				</h2>

				<div className="mb-12 justify-center flex">
					<img
						className="w-[80%]"
						src="eixosTematicos.png"
						alt=""
					/>
				</div>

				<div className="mb-24 pt-10">
					<h2 className="text-center [font-family:'Neulis_Cursive',cursive] font-bold text-[#0346c8] text-[32px] tracking-[0] leading-normal mb-12">
						Público-Alvo
					</h2>

					<div className=" colTextPublic flex flex-col lg:flex-row items-center justify-center gap-8 px-8">
						<div className="flex-1 max-w-[255px] ">
							<p className="textoPublico [font-family:'Libre_Franklin',Helvetica] font-bold text-[#0346c8] tracking-[0] leading-normal text-left lg:text-right">
								{targetAudiences[0]}
							</p>
						</div>

						<div className="flex-shrink-0">
							<img
								className="w-[372px] h-52"
								alt="Target Audience"
								src="/frame-175.svg"
							/>
						</div>

						<div className="flex-1 max-w-[302px] flex flex-col gap-4">
							<p className="textoPublico [font-family:'Libre_Franklin',Helvetica] font-bold text-[#0346c8]  tracking-[0] leading-normal">
								{targetAudiences[1]}
							</p>
							<p className="textoPublico [font-family:'Libre_Franklin',Helvetica] font-bold text-[#0346c8] tracking-[0] leading-normal">
								{targetAudiences[2]}
							</p>
						</div>
					</div>
				</div>

			
			</div>
		</section>
	);
};
