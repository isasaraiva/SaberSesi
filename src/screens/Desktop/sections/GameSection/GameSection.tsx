import React from "react";
import "./GameSection.css";

export const GameSection = (): JSX.Element => {
  return (
    <section className="game-section">
      <div>
        <img src="/tituloGamificando.svg" alt="Título do Jogo" />
      </div>
      <h2 className="h2 [font-family:'Neulis_Cursive',cursive]" > Ensinando de forma lúdica</h2>
    <div style={{ maxWidth: "560px" }} >
        <p className="text-game">O kit de ferramentas educacional vira uma ferramenta poderosa, perfeita para levar à sala de aula e mostrar de forma visual e lúdica a importância de cada área</p>
    </div>
    
    </section>
  );
};
