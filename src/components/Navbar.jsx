import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#education" style={styles.link}>Education</a></li>
        <li><a href="#experience" style={styles.link}>Experience</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#skills" style={styles.link}>Skills</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    right: 0,
    padding: '30px 50px',
    zIndex: 100 
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '40px',
    margin: 0,
    padding: 0
  },
  link: {
    color: '#d1d5db',
    textDecoration: 'none',
    fontSize: '1.25rem', /* Slightly larger to match the image proportions */
    fontFamily: 'Georgia, "Times New Roman", serif', /* Applies the elegant serif font */
    fontWeight: 'normal', /* Removes the previous bold weight */
    transition: 'color 0.2s',
    cursor: 'pointer'
  }
};

export default Navbar;