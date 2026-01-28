import React from 'react';
import './TrilhaSection.css';

export const TrilhaSection = (): JSX.Element => {
    const [carouselIndexes, setCarouselIndexes] = React.useState([0, 0, 0, 0]);
    // Imagens de cada carrossel separadas
    const carousels = [
        [
            'cardAlim1.svg',
            'cardAlim2.svg',
            'cardAlim3.svg',
            'cardAlim4.svg',
            'cardAlim5.svg',
            'cardAlim6.svg',
        ],
        [
            'cardSeg1.svg',
            'cardSeg2.svg',
            'cardSeg3.svg',
            'cardSeg4.svg',
            'cardSeg5.svg',
            'cardSeg6.svg',
            'cardSeg7.svg',
            'cardSeg8.svg',
            'cardSeg9.svg',
        ],
        [
            'cardMen1.svg',
            'cardMen2.svg',
            'cardMen3.svg',
            'cardMen4.svg',
            'cardMen5.svg',
            'cardMen6.svg',
            'cardMen7.svg',
            'cardMen8.svg',
            'cardMen9.svg',
            'cardMen10.svg'
        ],
        [
            'cardAtiv1.svg',
            'cardAtiv2.svg',
            'cardAtiv3.svg',
            'cardAtiv4.svg',
            'cardAtiv5.svg',
            'cardAtiv6.svg',
            'cardAtiv7.svg',
            
        ],
    ];
    const handleCarouselClick = (carouselIdx: number) => {
        setCarouselIndexes(prev => {
            const newIndexes = [...prev];
            newIndexes[carouselIdx] = (newIndexes[carouselIdx] + 1) % carousels[carouselIdx].length;
            return newIndexes;
        });
    };
    const handleDotClick = (carouselIdx: number, imgIdx: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setCarouselIndexes(prev => {
            const newIndexes = [...prev];
            newIndexes[carouselIdx] = imgIdx;
            return newIndexes;
        });
    };
    return (
        <section className="trilha-section w-full bg-[#9a1fff] py-16 px-8 overflow-hidden" id="trilhaPedagogica">
            <div className="relative max-w-[1440px] mx-auto min-h-[1162px]">
                <div className="flex justify-center items-center h-full">
                    <img src="/tituloTrilha.svg" alt="" />
                </div>
                <div
                    style={{
                        textAlign: 'center',
                        color: 'white',
                        padding: '60px 150px 0 150px',
                        fontSize: '27px',
                    }}
                >
                    <p>
                        A Trilha Pedagógica do Projeto de Letramento em Saúde foi desenvolvida para guiar educadores na implementação de oficinas e atividades educativas que promovem o letramento em saúde entre crianças e adolescentes da rede SESI. Cada eixo temático apresenta objetivos de aprendizagem, competências, metodologias, espaços de aprendizagem e recursos bibliográficos cuidadosamente selecionados.
                    </p>
                    <p style={{ padding: '50px' }}>
                        <span style={{ color: '#84E2F7' }}>Unidades Piloto: </span>
                        <span>Escola SESI SENAI Maracanaú, Parangaba e Centro</span>
                    </p>
                </div>
                <div className="flex flex-row gap-5 mt-8">
                    {[0, 1, 2, 3].map((carouselIdx) => (
                        <div 
                            key={carouselIdx}
                            className=" h-[450px] flex-1 rounded flex items-center justify-center cursor-pointer flex-col"
                            style={{ padding: '0 20px' }}
                            onClick={() => handleCarouselClick(carouselIdx)}
                        >
                            <img 
                                src={carousels[carouselIdx][carouselIndexes[carouselIdx]]} 
                                alt="" 
                                style={{ width: '100%', height: '100%', objectFit: 'contain', flex: 1 }} 
                            />
                            <div className="flex justify-center mt-4 gap-2">
                                {carousels[carouselIdx].map((_, idx) => (
                                    <span
                                        key={idx}
                                        style={{
                                            display: 'inline-block',
                                            width: 12,
                                            height: 12,
                                            borderRadius: '50%',
                                            background: idx === carouselIndexes[carouselIdx] ? '#9a1fff' : '#e0e0e0',
                                            border: idx === carouselIndexes[carouselIdx] ? '2px solid #84E2F7' : '2px solid #e0e0e0',
                                            cursor: 'pointer',
                                            transition: 'background 0.2s, border 0.2s',
                                        }}
                                        onClick={e => handleDotClick(carouselIdx, idx, e)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};