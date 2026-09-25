import React, { useState, useEffect } from 'react';
import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  // 1. Initialize tsParticles directly, bypassing the React wrapper
  useEffect(() => {
    loadSlim(tsParticles).then(() => {
      tsParticles.load({
        id: "tsparticles-canvas",
        options: {
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 120,
          particles: {
            color: { value: "#8892b0" }, 
            links: {
              color: "#8892b0",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1.2, 
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 50, 
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }
      });
    });
  }, []);

  // 2. Built-in typing effect state
  const [text, setText] = useState('');
  const phrases = ['software engineer', 'computer science student'];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // 3. Typing effect logic
  useEffect(() => {
    const typeDelay = isDeleting ? 50 : 100;
    const currentPhrase = phrases[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setText(currentPhrase.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeDelay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section id="home" style={styles.section}>
      {/* Background Div for Core tsParticles */}
      <div id="tsparticles-canvas" style={styles.particles}></div>

      {/* The Foreground Content */}
      <div style={styles.content}>
        <h1 style={styles.name}>James Mallari</h1>
        <h2 style={styles.subtitle}>
          I'm a <span style={styles.typer}>{text}</span><span style={styles.cursor}>|</span>
        </h2>
        
        <div style={styles.icons}>
          <a href="https://drive.google.com/file/d/1UXlipNbSb1yGdq9m0AnEHrRipSIzl5Qe/view?usp=sharing" target="_blank" rel="noreferrer" style={styles.iconLink}>
            <FaFileAlt />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" style={styles.iconLink}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/jam3s320" target="_blank" rel="noreferrer" style={styles.iconLink}>
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '15%',
    backgroundColor: '#1a1e23', 
    color: '#ffffff',
    overflow: 'hidden'
  },
  particles: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1 
  },
  content: {
    position: 'relative',
    zIndex: 2, 
    fontFamily: 'sans-serif'
  },
  name: {
    fontSize: '4.5rem',
    margin: '0 0 10px 0',
    fontWeight: 'bold',
    color: '#e2e8f0'
  },
  subtitle: {
    fontSize: '2rem',
    margin: '0 0 20px 0',
    color: '#a8b2d1',
    fontWeight: 'normal'
  },
  typer: {
    color: '#ffffff' 
  },
  cursor: {
    fontWeight: 'bold',
    color: '#a8b2d1',
    opacity: 0.8
  },
  icons: {
    display: 'flex',
    gap: '20px',
    fontSize: '1.5rem',
    marginTop: '10px'
  },
  iconLink: {
    color: '#d1d5db',
    transition: 'color 0.2s',
    cursor: 'pointer',
    textDecoration: 'none'
  }
};

export default Hero;