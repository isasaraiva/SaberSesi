import React from "react";  
import "./ProdutosSection.css";

export const ProdutosSection = (): JSX.Element => {
  return (
    <section className="produtos-section" id="produtosSection">
      <div>
        <img src="/tituloProdutos.svg" alt="Título dos Produtos" />
      </div>
      <h2 className="h2 [font-family:'Neulis_Cursive',cursive]"> Produtos</h2>
      <div style={{ maxWidth: "560px" }}>
        <p className="text-produtos">Explore nossa gama de produtos educacionais projetados para facilitar o aprendizado e engajar os alunos.</p>
      </div>
    </section>
  );
};