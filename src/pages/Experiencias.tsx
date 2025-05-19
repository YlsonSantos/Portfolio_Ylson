import React, { useState } from "react";
import "../styles/Experiencias.css";
import "../styles/Medias.css";

const Experiencias: React.FC = () => {
  const [modalAberto, setModalAberto] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState<string | null>(
    null
  );

  const projetos = [
    {
      nome: "Librarium",
      imagem: "/Librarium1.png",
      video: "/Librarium.mp4",
      descricao:
        "Librarium é uma plataforma para gerenciar livros e autores, criada em um desafio front-end. Oferece funcionalidades de CRUD para livros e autores com interface limpa e intuitiva. Inclui cadastro, visualização detalhada e exclusão, com dados salvos localmente no navegador. Usa React, Radix UI, CSS puro e Local Storage para persistência.",
      tecnologias: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          alt: "React",
          title: "React",
        },
        {
          src: "https://avatars.githubusercontent.com/u/78741812?s=200&v=4",
          alt: "Radix UI",
          title: "Radix UI",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
          alt: "CSS",
          title: "CSS",
        },
        {
          src: "https://cdn-icons-png.flaticon.com/512/3416/3416072.png",
          alt: "Local Storage",
          title: "Local Storage",
        },
      ],
      github: "https://github.com/YlsonSantos/Projeto-Librarium.git",
      site: "https://librarium-kappa.vercel.app",
    },
    {
      nome: "Workshop",
      imagem: "/Workshop1.png",
      video: "/Workshop.mp4",
      descricao: `Aplicação web para monitorar a participação dos colaboradores em workshops, desenvolvida com React e TypeScript, que exibe listas de colaboradores e workshops realizados, apresentando gráficos com a quantidade de workshops por colaborador e a distribuição de participantes por evento, facilitando o acompanhamento das atividades com uma interface clara e interativa, ideal para análise e rastreio de engajamento`,
      tecnologias: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
          alt: "React",
          title: "React",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
          alt: "TypeScript",
          title: "TypeScript",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
          alt: "CSS",
          title: "CSS/SCSS",
        },
      ],
      github: "https://github.com/YlsonSantos/Workshops.git",
      site: null,
    },
    {
      nome: "Pague Bem Brasil",
      imagem: "/PagueBem1.png",
      video: "/PagueBem.mp4",
      descricao:
        "Desenvolvimento de um site moderno e intuitivo para a Pague Bem Brasil, líder em soluções financeiras digitais, realizado no Cesar School. O projeto tem como foco fortalecer a marca, aprimorar a experiência do usuário e aumentar a conversão de leads, garantindo que o site reflita a posição de destaque da empresa no mercado. A plataforma foi planejada para ser responsiva, de fácil navegação e integrada com ferramentas analíticas, oferecendo recursos interativos que atendem às necessidades dos diferentes públicos da empresa.",
tecnologias: [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "React",
      title: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      alt: "Next.js",
      title: "Next.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
      title: "TypeScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
      title: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
      title: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS",
      title: "Tailwind CSS",
    },
  ],
      github: "https://github.com/YlsonSantos/Pague-Bem-Brasil.git",
      site: "https://paguebem.vercel.app",
    },
    {
      nome: "FlappyC",
      imagem: "/FlappyC2.png",
      video: "/FlappyC.mp4",
      descricao:
        "FlappyC é um jogo no terminal inspirado no Flappy Bird, desenvolvido na disciplina de Programação Imperativa e Funcional do CESAR School. O jogador controla um pássaro que deve evitar canos e o chão, usando a tecla espaço para subir enquanto a gravidade o faz descer. A dificuldade aumenta com o tempo e a pontuação cresce ao passar pelos canos. O jogo possui menu para iniciar, ver pontuação e sair, além de ranking de melhores scores. Foi implementado em C, usando a biblioteca cli-lib, e compilado com gcc.",
      tecnologias: [
        {
          src: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
          alt: "C",
          title: "C",
        },
      ],
      github: "https://github.com/YlsonSantos/FlappyC.git",
      site: null,
    },
  ];

  const abrirModal = (nome: string) => {
    setProjetoSelecionado(nome);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProjetoSelecionado(null);
  };

  const modalProjeto = projetos.find((p) => p.nome === projetoSelecionado);
  return (
    <div className="experiencias-wrapper">
      <section className="sessao formacao">
        <h2 className="titulo">Formações</h2>
        <div className="formacao-grid">
          <div className="card-curso">
            <div className="imagem-container ufpe-bg">
              <img src="/UFPE.png" alt="UFPE" />
            </div>
            <div className="conteudo">
              <h3>Biomedicina</h3>
              <p>Universidade Federal de Pernambuco</p>
            </div>
          </div>

          <div className="card-curso">
            <div className="imagem-container cesar-bg">
              <img src="/Cesar.png" alt="Cesar School" />
            </div>
            <div className="conteudo">
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <p>Cesar School</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sessao skills">
        <h2 className="titulo">Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Linguagens de Programação</h3>
            <div className="icons-list">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                height="80"
                alt="Python"
                title="Python"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                height="80"
                alt="JavaScript"
                title="JavaScript"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                height="80"
                alt="Java"
                title="Java"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                height="80"
                alt="C"
                title="C"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                height="80"
                alt="TypeScript"
                title="TypeScript"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                height="80"
                alt="HTML5"
                title="HTML5"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                height="80"
                alt="CSS3"
                title="CSS3"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                height="80"
                alt="C#"
                title="C#"
              />
            </div>
          </div>

          <div className="skill-category">
            <h3>Frameworks e Ferramentas</h3>
            <div className="icons-list">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                height="80"
                alt="React"
                title="React"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                height="80"
                alt="Node.js"
                title="Node.js"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                height="80"
                alt="Spring"
                title="Spring"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                height="80"
                alt="Tailwind CSS"
                title="Tailwind CSS"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                height="80"
                alt="Git"
                title="Git"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                height="80"
                alt="GitHub"
                title="GitHub"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                height="80"
                alt="Figma"
                title="Figma"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg"
                height="80"
                alt="Canva"
                title="Canva"
              />
            </div>
          </div>

          <div className="skill-category">
            <h3>Banco de Dados</h3>
            <div className="icons-list">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                height="80"
                alt="MySQL"
                title="MySQL"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                height="80"
                alt="PostgreSQL"
                title="PostgreSQL"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sessao projetos">
        <h2 className="titulo">Projetos</h2>
        <div className="projetos-container">
          {projetos.map((proj) => (
            <div
              key={proj.nome}
              className="projeto-card"
              style={{ backgroundImage: `url(${proj.imagem || ""})` }}
              onClick={() => abrirModal(proj.nome)}
            >
              <div className="overlay" />
              <h3 className="projeto-nome">{proj.nome}</h3>
            </div>
          ))}
        </div>

        {modalAberto && modalProjeto && (
          <div className="modal-fundo" onClick={fecharModal}>
            <div
              className="modal-conteudo"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-fechar" onClick={fecharModal}>
                &times;
              </button>

              <div className="modal-parte esquerda">
                {modalProjeto.video && (
                  <div className="video-container">
                    <video controls muted>
                      <source src={modalProjeto.video} type="video/mp4" />
                      Seu navegador não suporta vídeo.
                    </video>
                  </div>
                )}
              </div>

              <div className="modal-parte esquerda">
                <div className="projeto-informacoes">
                  <h2 className="projeto-titulo">{modalProjeto.nome}</h2>
                  <p className="projeto-resumo">{modalProjeto.descricao}</p>
                </div>

                <div className="projeto-detalhes">
                  <div className="projeto-tecnologias">
                    {modalProjeto.tecnologias?.map((tec) => (
                      <img
                        key={tec.title}
                        src={tec.src}
                        height="40"
                        alt={tec.alt}
                        title={tec.title}
                      />
                    ))}
                  </div>

                  <div className="projeto-botoes">
                    {modalProjeto.github && (
                      <a
                        href={modalProjeto.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="botao-projeto">GitHub</button>
                      </a>
                    )}
                    {modalProjeto.site && (
                      <a
                        href={modalProjeto.site}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="botao-projeto">Site</button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Experiencias;
