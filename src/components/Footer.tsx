import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <p className="footer-text">© 2025 Ylson Santos. Todos os direitos reservados.</p>
      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
