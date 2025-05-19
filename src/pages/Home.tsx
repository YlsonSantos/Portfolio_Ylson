import { useState } from 'react';
import '../styles/Home.css';
import '../styles/Medias.css';

function Home() {
  const [hovered, setHovered] = useState<'left' | 'right' | null>(null);

  return (
    <section className="home">
      <div
        className={`side left ${
          hovered === 'left' ? 'expand' : hovered === 'right' ? 'dimmed' : ''
        }`}
        onMouseEnter={() => setHovered('left')}
        onMouseLeave={() => setHovered(null)}
      >
        <h2>Biomédico</h2>
      </div>

      <div
        className={`side right ${
          hovered === 'right' ? 'expand' : hovered === 'left' ? 'dimmed' : ''
        }`}
        onMouseEnter={() => setHovered('right')}
        onMouseLeave={() => setHovered(null)}
      >
        <h2>Programador</h2>
      </div>

      <img src="/Ylson.png" alt="Ylson" className="center-image" />
    </section>
  );
}

export default Home;
