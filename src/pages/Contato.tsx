import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contato.css';
import '../styles/Medias.css';

const Contato: React.FC = () => {
  const formularioRef = useRef<HTMLFormElement>(null);
  const [carregando, setCarregando] = useState(false);

  const enviarEmail = async (evento: React.FormEvent) => {
    evento.preventDefault();
    const form = formularioRef.current;
    if (!form) return;

    try {
      setCarregando(true);
      await emailjs.sendForm(
        'service_jyn0tbj',
        'template_5rd050g',
        form,
        'mG0cbOjUjA4WW0R8y'
      );
      alert('Email enviado com sucesso! Obrigado pelo contato.');
      form.reset();
    } catch (erro) {
      alert('Erro ao enviar o email. Por favor, tente novamente.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="contato-container">
      <section className="redes-container">
        <h2 className="redes-titulo">Fale comigo</h2>
        <div className="divider"></div>
        <div className="redes-centro">
          {[
            { href: 'https://www.instagram.com/ylson.santoss/', img: '/Instagram.png', alt: 'Instagram', classe: 'img-instagram' },
            { href: 'https://wa.me/5581998314555', img: '/Whatsapp.png', alt: 'WhatsApp', classe: 'img-whatsapp' },
            { href: 'https://www.linkedin.com/in/ylson-santos/', img: '/Linkedin.png', alt: 'LinkedIn', classe: 'img-linkedin' },
            { href: 'https://github.com/YlsonSantos', img: '/Github.png', alt: 'GitHub', classe: 'img-github' }
          ].map(({ href, img, alt, classe }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer" className="rede-social">
              <img src={img} alt={alt} className={classe} />
            </a>
          ))}
        </div>
      </section>

      <section className="email-container">
        <form ref={formularioRef} onSubmit={enviarEmail} className="email-centro">
          <h3 className="redes-titulo2">Mande email</h3>
          <div className="divider2"></div>
          <div className="form-wrapper">
            <div className="input-group">
              <input type="text" name="name" placeholder="Seu nome" required />
              <input type="email" name="email" placeholder="Seu e-mail" required />
            </div>
            <div className="message-group">
              <textarea name="message" placeholder="Sua mensagem" required />
              <div className="button-wrapper">
                <button type="submit" disabled={carregando}>
                  {carregando ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contato;
