import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.headingContainer}>
          <h2 style={styles.headingText}>Contact Me</h2>
        </div>

        <div style={styles.content}>
          <div style={styles.infoBlock}>
            <FaEnvelope style={styles.icon} />
            <div>
              <h3 style={styles.infoTitle}>Email:</h3>
              <a href="mailto:jamesmallari130@gmail.com" style={styles.infoLink}>
                jamesmallari130@gmail.com
              </a>
            </div>
          </div>

          <div style={styles.infoBlock}>
            <FaPhoneAlt style={styles.icon} />
            <div>
              <h3 style={styles.infoTitle}>Phone:</h3>
              <a href="tel:+16092128972" style={styles.infoLink}>
                +1 609-212-8972
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 15%',
    backgroundColor: '#1a1e23',
    color: '#ffffff',
    fontFamily: 'sans-serif',
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: '#2b303a',
    borderRadius: '40px',
    padding: '50px 60px',
    width: '100%',
    maxWidth: '760px',
    boxSizing: 'border-box',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  },
  headingContainer: {
    textAlign: 'center',
    marginBottom: '50px'
  },
  headingText: {
    fontSize: '2.5rem',
    margin: '0',
    borderBottom: '2px solid #8892b0',
    paddingBottom: '10px',
    display: 'inline-block'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '50px',
    justifyContent: 'center'
  },
  infoBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px'
  },
  icon: {
    fontSize: '2rem',
    color: '#d1d5db',
    flexShrink: 0
  },
  infoTitle: {
    margin: '0 0 5px 0',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#ffffff'
  },
  infoLink: {
    fontSize: '1rem',
    color: '#e2e8f0',
    textDecoration: 'none'
  }
};

export default Contact;
