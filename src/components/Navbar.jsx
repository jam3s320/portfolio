import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navList}>
        <li><a href="#home" style={styles.link}>Home</a></li>
        <li><a href="#experience" style={styles.link}>Experience</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed', /* Keeps it glued to the screen */
    top: 0,
    right: 0,
    padding: '30px 50px',
    zIndex: 100 /* Ensures it stays on top of everything else */
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '40px',
    margin: 0,
    padding: 0
  },
  link: {
    color: '#a8b2d1',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'color 0.2s',
    cursor: 'pointer'
  }
};

export default Navbar;