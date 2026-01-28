import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/ui/button";
import "./HistorySection.css"

export const HistorySection = (): JSX.Element => {
  const curvedTextLetters = [
    {
      char: "F",
      marginTop: "mt-[37.4px]",
      width: "w-[8.96px]",
      height: "h-[23.18px]",
      marginLeft: "ml-[4.7px]",
      rotate: "rotate-[-46.03deg]",
    },
    {
      char: "a",
      marginTop: "mt-[27.9px]",
      width: "w-[8.78px]",
      height: "h-[23.61px]",
      marginLeft: "ml-[1.2px]",
      rotate: "rotate-[-40.18deg]",
    },
    {
      char: "l",
      marginTop: "mt-[20.8px]",
      width: "w-[4.32px]",
      height: "h-[23.93px]",
      marginLeft: "ml-[2.3px]",
      rotate: "rotate-[-35.12deg]",
    },
    {
      char: "a",
      marginTop: "mt-[14.7px]",
      width: "w-[8.5px]",
      height: "h-[24.23px]",
      marginLeft: "ml-[2.9px]",
      rotate: "rotate-[-29.90deg]",
    },
    {
      char: "",
      marginTop: "mt-[9.4px]",
      width: "w-[5.03px]",
      height: "h-[24.49px]",
      marginLeft: "ml-[3.3px]",
      rotate: "rotate-[-24.30deg]",
    },
    {
      char: "D",
      marginTop: "mt-[5.2px]",
      width: "w-[8.28px]",
      height: "h-[24.71px]",
      marginLeft: "ml-[3.7px]",
      rotate: "rotate-[-18.55deg]",
    },
    {
      char: "r",
      marginTop: "mt-[2.0px]",
      width: "w-[6.56px]",
      height: "h-[24.87px]",
      marginLeft: "ml-[4.1px]",
      rotate: "rotate-[-12.22deg]",
    },
    {
      char: ".",
      marginTop: "mt-[0.4px]",
      width: "w-[3.26px]",
      height: "h-[24.96px]",
      marginLeft: "ml-[4.2px]",
      rotate: "rotate-[-7.17deg]",
    },
    {
      char: "",
      marginTop: "mt-[-0.3px]",
      width: "w-[4.88px]",
      height: "h-[24.99px]",
      marginLeft: "ml-[4.3px]",
      rotate: "rotate-[-2.55deg]",
    },
    {
      char: "C",
      marginTop: "mt-[-0.2px]",
      width: "w-[8.95px]",
      height: "h-[24.99px]",
      marginLeft: "ml-[4.4px]",
      rotate: "rotate-[3.71deg]",
    },
    {
      char: "l",
      marginTop: "mt-[1.1px]",
      width: "w-[4.09px]",
      height: "h-[24.92px]",
      marginLeft: "ml-[4.4px]",
      rotate: "rotate-[9.70deg]",
    },
    {
      char: "á",
      marginTop: "mt-[3.7px]",
      width: "w-[9.89px]",
      height: "h-[24.79px]",
      marginLeft: "ml-[4.2px]",
      rotate: "rotate-[15.85deg]",
    },
    {
      char: "u",
      marginTop: "mt-[8.0px]",
      width: "w-[6.68px]",
      height: "h-[24.56px]",
      marginLeft: "ml-[3.8px]",
      rotate: "rotate-[22.54deg]",
    },
    {
      char: "d",
      marginTop: "mt-[13.2px]",
      width: "w-[7.62px]",
      height: "h-[24.3px]",
      marginLeft: "ml-[3.4px]",
      rotate: "rotate-[28.41deg]",
    },
    {
      char: "i",
      marginTop: "mt-[18.5px]",
      width: "w-[3.43px]",
      height: "h-[24.04px]",
      marginLeft: "ml-[3.2px]",
      rotate: "rotate-[33.26deg]",
    },
    {
      char: "o",
      marginTop: "mt-[24.4px]",
      width: "w-[6.97px]",
      height: "h-[23.77px]",
      marginLeft: "ml-[2.8px]",
      rotate: "rotate-[37.77deg]",
    },
    {
      char: "",
      marginTop: "mt-[31.5px]",
      width: "w-[5.31px]",
      height: "h-[23.44px]",
      marginLeft: "ml-[2.2px]",
      rotate: "rotate-[42.55deg]",
    },
    {
      char: "!",
      marginTop: "mt-[38.8px]",
      width: "w-[5.39px]",
      height: "h-[23.12px]",
      marginLeft: "ml-[1.9px]",
      rotate: "rotate-[46.80deg]",
    },
  ];

  const defaultText = 'Ouça como nasceu a ideia do projeto';
  const [buttonText, setButtonText] = useState(defaultText);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    audioRef.current = new Audio('audio.mp3');
    const audio = audioRef.current;

    const handlePlay = () => setButtonText('Pausar reprodução');
    const handleReset = () => setButtonText(defaultText);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);

    audio.addEventListener('playing', handlePlay);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    ['pause', 'ended'].forEach(event => {
      audio.addEventListener(event, handleReset);
    });

    return () => {
      audio.removeEventListener('playing', handlePlay);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      ['pause', 'ended'].forEach(event => {
        audio.removeEventListener(event, handleReset);
      });
      audio.pause();
    };
  }, []);

  const audioPlaying = () => {
    const audio = audioRef.current;
    if (!audio) return
    return !audio.paused
  }

  const resetAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0
  };

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch((err) => console.error(err));
      return;
    }
    audio.pause();
  };

  return (
    <section className="relative w-full bg-[#d5f48c] py-[91px] px-4">
      <div className="max-w-[1440px] mx-auto">
        <div className=" comeco relative mb-[103px] mx-auto max-w-[1149px]">
          <img
            className="w-full h-auto"
            alt="O Começo de Uma Transformação Educacional"
            src="/Secao O comeco.png"
          />
        </div>

        <div className="relative max-w-[1149px] mx-auto">
          <div className=" ariosto flex justify-center mb-[153px]">
            <img src="/drAriosto (1).svg" alt="" />
          </div>
          <div className="flex items-start gap-[20px] mb-[84px]">
            <img
              className="w-[100px] h-[100px] flex-shrink-0"
              alt="Quote right"
              src="/quote-right-1-1.svg"
            />

            <div className=" fraseClaudio flex flex-col gap-8 ">
              <p className="flex-1 [font-family:'Libre_Franklin',Helvetica] font-bold text-[#0346c8] text-[32px] text-right tracking-[0] leading-[normal]">
              O Letramento em Saúde capacita estudantes a transformar
              conhecimento em atitudes saudáveis para a vida toda.
            </p>
            <div className="flex justify-end pt-24">

            <div>
              <img
              className="w-[64px] h-auto object-cover mix-blend-multiply"
              alt="Podcast"
              src="/podcast.gif"
              />
            </div>

            <Button
              onClick={toggleAudio}
              className="bg-[#7248d8] hover:bg-[#7248d8]/90 rounded-[18px] h-[66px] px-[17px] gap-[17px]">
              <span className="[font-family:'Libre_Franklin',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {buttonText}
              </span>
            </Button>

            {audioPlaying() && (
              <>
                <Button
                  onClick={resetAudio}
                  className="ml-2 bg-[#7248d8] hover:bg-[#7248d8]/90 rounded-[18px] h-[66px] px-[17px] gap-[17px]">
                  <span className="[font-family:'Libre_Franklin',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                    Reiniciar
                  </span>
                </Button>
                <span className="self-center ml-4 font-bold text-[#0346c8] text-xl">
                  {formatTime(currentTime)}
                </span>
              </>
            )}
          </div>
            </div>

            <div className="relative w-[297px] h-[318px] flex-shrink-0">
              <img className="w-full h-full" alt="Frame" src="/drClaudio.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
