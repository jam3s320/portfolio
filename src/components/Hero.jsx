import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" style={styles.heroContainer}>
      <div style={styles.content}>
        <h1 style={styles.title}>James Mallari</h1>
        
        <div style={styles.subtitleContainer}>
          <span style={styles.staticText}>I'm a </span>
          <TypeAnimation
            sequence={[
              'Software Engineer', 2000,
              'Computer Science Student', 2000
            ]}
            wrapper="span"
            speed={50}
            style={styles.typewriter}
            repeat={Infinity}
          />
        </div>

        <div style={styles.iconContainer}>
          <a 
            href="https://drive.google.com/file/d/19XEWqzcCUlfMaWqy_IEiu6ZqDl91nIeT/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer" 
            style={styles.icon} 
            title="Resume"
          >
            <FaFileAlt />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/james-mallari/" 
            target="_blank" 
            rel="noreferrer" 
            style={styles.icon} 
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          
          <a 
            href="https://github.com/jam3s320" 
            target="_blank" 
            rel="noreferrer" 
            style={styles.icon} 
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

// Inline styles for the dark theme
const styles = {
  heroContainer: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '15%',
    backgroundColor: '#1a1e23', 
    color: '#ffffff',
    fontFamily: 'sans-serif',
    position: 'relative',
    zIndex: 10,
    margin: 0
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    marginTop: 0
  },
  subtitleContainer: {
    fontSize: '2rem',
    marginBottom: '20px'
  },
  staticText: {
    fontWeight: 'bold'
  },
  typewriter: {
    color: '#a8b2d1' 
  },
  iconContainer: {
    display: 'flex',
    gap: '25px',
    fontSize: '2rem',
    marginTop: '20px'
  },
  icon: {
    color: '#ffffff',
    textDecoration: 'none',
    transition: 'color 0.2s'
  }
};

export default Hero;