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
          {/* Left Side: Contact Info */}
          <div style={styles.infoSide}>
            <div style={styles.infoBlock}>
              <FaEnvelope style={styles.icon} />
              <div>
                <h3 style={styles.infoTitle}>Email:</h3>
                <p style={styles.infoText}>jamesmallari130@gmail.com</p>
              </div>
            </div>
            
            <div style={styles.infoBlock}>
              <FaPhoneAlt style={styles.icon} />
              <div>
                <h3 style={styles.infoTitle}>Phone:</h3>
                <p style={styles.infoText}>+1 609-212-8972</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div style={styles.formSide}>
            <div style={styles.inputRow}>
              <input type="text" placeholder="Your name" style={styles.input} />
              <input type="email" placeholder="Your email" style={styles.input} />
            </div>
            <textarea placeholder="Send a message" style={styles.textarea}></textarea>
            <button type="button" style={styles.button}>Send Message</button>
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
    maxWidth: '1000px',
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
    gap: '40px',
    justifyContent: 'space-between'
  },
  infoSide: {
    flex: '1 1 250px',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    justifyContent: 'center'
  },
  infoBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '25px'
  },
  icon: {
    fontSize: '2rem',
    color: '#d1d5db'
  },
  infoTitle: {
    margin: '0 0 5px 0',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#ffffff'
  },
  infoText: {
    margin: 0,
    fontSize: '1rem',
    color: '#e2e8f0'
  },
  formSide: {
    flex: '2 1 450px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  inputRow: {
    display: 'flex',
    gap: '15px'
  },
  input: {
    flex: 1,
    padding: '12px 15px',
    borderRadius: '8px',
    border: '2px solid transparent',
    backgroundColor: '#e2e8f0',
    color: '#333',
    fontSize: '1rem',
    outline: 'none',
    fontFamily: 'inherit'
  },
  textarea: {
    width: '100%',
    padding: '15px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#e2e8f0',
    color: '#333',
    fontSize: '1rem',
    minHeight: '150px',
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'vertical',
    boxSizing: 'border-box'
  },
  button: {
    alignSelf: 'center',
    padding: '12px 35px',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#e2e8f0',
    color: '#1a1e23',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.2s',
  }
};

export default Contact;