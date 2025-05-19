import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Experiencias from './pages/Experiencias';
import Contato from './pages/Contato';

function AppContent() {
  const location = useLocation();
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    setCarregando(true);
    const timeout = setTimeout(() => {
      setCarregando(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {carregando && <Loader />}
      <div
        className="app-wrapper"
        style={{
          display: carregando ? 'none' : 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          transition: 'opacity 0.5s ease',
        }}
      >
        <Navbar />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/experiencias" element={<Experiencias />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
