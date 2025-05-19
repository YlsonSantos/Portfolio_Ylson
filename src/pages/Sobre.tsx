import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/Sobre.css";
import "../styles/Medias.css";

const Sobre: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById("matrix") as HTMLCanvasElement | null;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 16;
    let columns = Math.floor(window.innerWidth / fontSize);
    let drops = Array(columns).fill(1);
    const letters = ["0", "1"];
    const colors = ["#000000", "#222222", "#444444", "#666666", "#888888"];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    };

    const draw = () => {
      ctx.fillStyle = "rgba(245, 222, 179, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      drops.forEach((drop, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];

        ctx.fillStyle = color;
        ctx.fillText(text, i * fontSize, drop * fontSize);

        if (drop * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    resizeCanvas();

    const intervalId = setInterval(draw, 50);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="sobre-container">
      <canvas id="matrix"></canvas>
      <motion.div
        className="conteudo"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Sobre mim</h1>

        <motion.p
          className="texto flex-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="texto-principal">
            Me chamo Ylson Santos, tenho 25 anos e sou natural de Olinda, onde nasci
            e cresci. Desde pequeno sempre fui muito curioso e dedicado aos estudos,
            uma característica que me acompanhou até a faculdade, onde me graudei
            em Biomedicina e agora estou na minha segunda graduação, Análise e
            Desenvolvimento de Sistemas. Hoje, além da minha formação acadêmica,
            busco expandir meus horizontes e me reinventar, encarando cada etapa
            da vida como uma chance de aprender e crescer.
          </span>
          <img src="/Ylson1.jpeg" alt="Foto de Ylson Santos" className="foto1" />
        </motion.p>

        <motion.p
          className="texto flex-container-reverse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          Minha vida pessoal é pautada pelo carinho e pela conexão com a família e os amigos,
          que são minha base e fonte constante de apoio e inspiração. Valorizo os momentos simples,
          as conversas sinceras e o convívio que fortalece os laços, acredito que são esses relacionamentos
          que dão sentido à jornada. Gosto também de me dedicar a atividades que me tragam equilíbrio e alegria,
          seja uma boa leitura, uma pedalada ou um passeio ao ar livre, tudo isso me ajuda a manter o foco
          e a motivação para seguir em frente.
          <img
            src="/Ylson-biomedico.jpeg"
            alt="Foto do Ylson como biomédico"
            className="foto2"
          />
        </motion.p>

        <motion.p
          className="texto flex-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Mesmo com os desafios que aparecem no caminho, vejo cada experiência como uma chance de crescer,
          seja na vida acadêmica, pessoal ou profissional, estou sempre aberto a aprender coisas novas e
          pronto para encarar o que vier com determinação e coração aberto, quero construir uma trajetória
          que faça sentido pra mim, baseada no esforço e na vontade de melhorar sempre, aproveitando o presente
          e sonhando com um futuro cheio de propósito e significado.
          <img src="/Ylson-familia.jpeg" alt="Foto da família do Ylson" className="foto3" />
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Sobre;
