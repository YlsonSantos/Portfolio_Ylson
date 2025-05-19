import '../styles/Loader.css';
import '../styles/Medias.css';
import { useState, useEffect } from 'react';

const codeLines = [
  'const ylson = "Desenvolvedor Full Stack";',
  'function carregarApp() {',
  '  console.log("Iniciando aplicação...");',
  '}',
  '// Carregando recursos essenciais...',
];

export default function Loader() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    if (lineIndex >= codeLines.length) return;

    let currentLine = codeLines[lineIndex];
    let charIndex = 0;

    setDisplayedText('');
    setTyping(true);

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + currentLine.charAt(charIndex));
      charIndex++;

      if (charIndex === currentLine.length) {
        clearInterval(interval);
        setTyping(false);
        setTimeout(() => setLineIndex(lineIndex + 1), 800);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [lineIndex]);

  return (
    <div className="loader-overlay-modern">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="buttons">
            <span className="close" />
            <span className="minimize" />
            <span className="maximize" />
          </div>
          <div className="title">ylson@portfolio: ~</div>
        </div>
        <div className="terminal-content">
          {codeLines.slice(0, lineIndex).map((line, i) => (
            <div key={i} className="terminal-line">
              <span className="prompt">{"$ "}</span>
              {line}
            </div>
          ))}
          {lineIndex < codeLines.length && (
            <div className="terminal-line">
              <span className="prompt">$ </span>
              <span>{displayedText}</span>
              {typing && <span className="cursor" />}
            </div>
          )}
          {lineIndex === codeLines.length && (
            <div className="loading-bar-wrapper">
              <div className="loading-bar" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
