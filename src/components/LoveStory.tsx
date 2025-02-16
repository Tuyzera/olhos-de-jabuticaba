import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from '../../public/images/1.jpeg'
import img2 from '../../public/images/2.jpeg'
import img3 from '../../public/images/3.jpeg'
import img4 from '../../public/images/4.jpeg'
import img5 from '../../public/images/5.jpeg'
import img6 from '../../public/images/6.jpeg'

const LoveStory = () => {
  const startDate = new Date("2024-11-28T00:00:00"); // Data de início (28/11/2024)

  const [timeElapsed, setTimeElapsed] = useState({
    anos: 0,
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const timeDiff = now - startDate; // Diferença em milissegundos

      const segundos = Math.floor(timeDiff / 1000) % 60;
      const minutos = Math.floor(timeDiff / (1000 * 60)) % 60;
      const horas = Math.floor(timeDiff / (1000 * 60 * 60)) % 24;
      const dias = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) % 30;
      const meses = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30)) % 12;
      const anos = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));

      setTimeElapsed({
        anos,
        meses,
        dias,
        horas,
        minutos,
        segundos,
      });
    };

    const timer = setInterval(() => {
      calculateTime();
    }, 1000);

    return () => clearInterval(timer); // Limpa o intervalo quando o componente for desmontado
  }, [startDate]);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center p-6">
      {/* Seção do carrossel */}
      <div className="relative w-[60%] h-[30rem] max-md:h-[20rem]">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="rounded-lg overflow-hidden"
        >
          <SwiperSlide>
            <img src={img1} alt="Foto 1" className="w-full h-[30rem] max-md:h-[20rem] object-cover rounded-l" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="Foto 2" className="w-full h-[30rem] max-md:h-[20rem] object-cover rounded-l" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="Foto 3" className="w-full h-[30rem] max-md:h-[20rem] object-cover rounded-l" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="Foto 3" className="w-full h-[30rem] max-md:h-[20rem] object-cover rounded-l" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="Foto 3" className="w-full h-[30rem] max-md:h-[20rem] object-cover rounded-l" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="Foto 3" className="w-full h-[30rem] max-md:h-[20rem] object-cover rounded-l" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Seção do texto */}
      <div className="max-w-4xl text-center mt-1">
        <h1 className="text-red-500 text-4xl font-great-vibes mb-4">Arthur e Stephany</h1>
        <p className="text-lg">
        Desde o momento em que conheci você, senti algo único. Você tocou meu coração de uma forma inexplicável. Os sentimentos que tenho por você são surreais e, a cada dia que passa, só crescem ainda mais.
        Sou apaixonado por cada detalhe seu, meu amor. Seu olhar de jabuticaba me deixa sem jeito, seu sorriso encantador me deixa sem palavras. Você brilha de uma forma única. Agradeço todos os dias a Deus por ter trazido você para a minha vida. Ele é a única pessoa que sabe do quanto meu amor por você é forte e único, e tenho certeza de que foi ele quem te enviou para mim. Todos os dias ele me dá sinais de que você é o amor da minha vida, o amor para a minha vida toda.
        Nunca se esqueça de que sou completamente apaixonado por você, minha princesa. Meu amor por você cresce a cada dia. Meu maior sonho é casar com você, construir uma família incrível ao seu lado e viver para sempre contigo, compartilhando todos os momentos e realizando nossos planos. Você é a minha maior certeza na vida, o capítulo mais lindo da minha história e sempre será, meu amor.
        Você é a mulher dos meus sonhos, e não é à toa que todos os dias eu digo que estou vivendo um sonho. Quando olho para você, vejo que tenho tudo na vida. Você é meu mundo, meu tudo, a mãe dos meus filhos e a minha esposa.
        Eu te amo infinitamente e para sempre, minha princesa mais linda do mundo. Pra sempre a gente! 💖
        </p>
      </div>

      {/* Seção do tempo */}
      <div className="mt-8 flex flex-col items-center">
        <h2 className="text-xl font-bold tex-center">Compartilhando momentos há</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
          {Object.entries(timeElapsed).map(([key, value]) => (
            <div key={key} className="bg-gray-800 p-4 rounded-lg text-center">
              <p className="text-3xl font-bold">{value.toString().padStart(2, "0")}</p>
              <p className="text-sm">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center">❤️ Desde 28/11/2024 ❤️</p>
      </div>

      {/* Seção de vídeo */}
      {isPlaying && (
        <div className="mt-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Tx9zMFodNtA?autoplay=1&start=343"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Botão para vídeo */}
      <div className="fixed bottom-0 left-0 right-0 p-0.15 bg-transparent flex justify-center items-center"
        style={{
          backgroundColor: "rgba(26, 28, 30, 0.95)",
          zIndex: 100,
        }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
          alt="Logo YouTube"
          className="cursor-pointer transform transition-transform duration-200 ease-in-out hover:scale-105"
          onClick={handlePlayVideo}
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    </div>
  );
};

export default LoveStory;
