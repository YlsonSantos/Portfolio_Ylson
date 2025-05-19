import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import '../styles/Medias.css';

const Navbar: React.FC = () => {
  const navegar = useNavigate();

  const rotas = [
    { caminho: '/sobre', texto: 'Sobre mim' },
    { caminho: '/experiencias', texto: 'Experiências' },
    { caminho: '/contato', texto: 'Contato' },
  ];

  const irParaHome = () => navegar('/');

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div
          className="logo-container"
          onClick={irParaHome}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && irParaHome()}
        >
          <img src="/Y-logo.png" alt="Logo Ylson" className="logo-image" />
        </div>

        <ul className="navbar-list">
          {rotas.map(({ caminho, texto }) => (
            <li key={caminho}>
              <NavLink
                to={caminho}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {texto}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
