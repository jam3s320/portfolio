import React from 'react';
import profilePic from '../assets/profile.jpg'; 
import { FaVolleyballBall, FaBasketballBall, FaDrum } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.headingContainer}>
        <h2 style={styles.headingText}>About Me</h2>
      </div>
      
      <div style={styles.content}>
        {/* Left Side: Profile Image */}
        <div style={styles.imageContainer}>
          <img src={profilePic} alt="James Mallari" style={styles.image} />
        </div>

        {/* Right Side: Text and Hobby Icons */}
        <div style={styles.textContent}>
          <p style={styles.paragraph}>
            👋 Hi, I’m James! I am currently an undergraduate student at Stevens Institute of Technology and majoring in Computer Science with a minor in Cybersecurity. I’ve leaned my concentration towards Software Engineering and I have always enjoyed technology and problem solving my whole life and I want to use those skills in my future career. On the side, I love playing sports like volleyball and basketball, as well as playing the drums. 
          </p>
          
          {/* Hobby Icons Row */}
          <div style={styles.iconRow}>
            <div style={styles.iconCircle}>
              <FaVolleyballBall style={{ color: '#00599C', fontSize: '3rem' }} />
            </div>
            <div style={styles.iconCircle}>
              <FaBasketballBall style={{ color: '#E34F26', fontSize: '3rem' }} />
            </div>
            <div style={styles.iconCircle}>
              <FaDrum style={{ color: '#8b0000', fontSize: '3rem' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Resume Button Container */}
      <div style={styles.buttonContainer}>
        <a 
          href="https://drive.google.com/file/d/19XEWqzcCUlfMaWqy_IEiu6ZqDl91nIeT/view?usp=sharing" 
          target="_blank" 
          rel="noreferrer" 
          style={styles.resumeButton}
        >
          Resume
        </a>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 15% 60px 15%',
    backgroundColor: '#1a1e23',
    color: '#ffffff',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  headingContainer: {
    width: '100%',
    textAlign: 'center',
    marginBottom: '50px'
  },
  headingText: {
    fontSize: '2.5rem',
    margin: '0',
    fontWeight: 'bold',
    color: '#e2e8f0',
    borderBottom: '2px solid #505565',
    paddingBottom: '5px',
    display: 'inline-block'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '60px',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1000px',
    marginBottom: '40px'
  },
  imageContainer: {
    flex: '1 1 300px',
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    maxWidth: '350px',
    borderRadius: '15px',
    border: '3px solid #505565',
    objectFit: 'cover'
  },
  textContent: {
    flex: '2 1 500px',
    display: 'flex',
    flexDirection: 'column'
  },
  paragraph: {
    fontSize: '1.15rem',
    lineHeight: '1.7',
    color: '#cbd5e1',
    margin: '0 0 30px 0'
  },
  iconRow: {
    display: 'flex',
    gap: '25px',
    flexWrap: 'wrap'
  },
  iconCircle: {
    width: '80px',
    height: '80px',
    backgroundColor: '#e2e8f0',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '4px solid #3b4252',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    width: '100%'
  },
  resumeButton: {
    backgroundColor: '#d1d5db', /* Light grey matching the reference button */
    color: '#1a1e23', /* Dark text */
    padding: '12px 36px',
    borderRadius: '25px', /* Rounded pill shape */
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
    display: 'inline-block'
  }
};

export default About;