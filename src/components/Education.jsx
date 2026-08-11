import React from 'react';
/* Make sure the filenames here perfectly match what you named them in your assets folder! */
import stevensLogo from '../assets/stevens.png'; 
import rutgersLogo from '../assets/rutgers.png';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Stevens Institute of Technology - Hoboken, NJ",
      date: "August 2025 - May 2029",
      logo: stevensLogo, /* Using the imported local image */
      bullets: [
        { label: "Minor", text: "Cybersecurity" },
        { label: "Courses", text: "Discrete Mathematics, Data Structures & Algorithms, Computer Architecture & Organization" },
        { label: "Activities", text: "Filipino Association at Stevens Tech (FAST), Society of Asian Scientists and Engineers (SASE), Volleyball Club, Blueprint" }
      ]
    },
    {
      degree: "High School Diploma",
      school: "Rutgers Preparatory School",
      date: "September 2021 - May 2025",
      logo: rutgersLogo, /* Using the imported local image */
      bullets: [
        { label: "Experience", text: "RPS Geofence App Developer (Study Hall System)" }
      ]
    }
  ];

  return (
    <section id="education" style={styles.section}>
      <h2 style={styles.headingText}>Education</h2>
      
      <div style={styles.timeline}>
        {educationData.map((item, index) => (
          <div key={index} style={styles.timelineItem}>
            <div style={styles.logoContainer}>
              <img src={item.logo} alt={`${item.school} logo`} style={styles.logo} />
            </div>
            
            <div style={styles.card}>
              <h3 style={styles.degree}>{item.degree}</h3>
              <p style={styles.school}>{item.school}</p>
              <p style={styles.date}>{item.date}</p>
              
              <ul style={styles.list}>
                {item.bullets.map((bullet, i) => (
                  <li key={i} style={styles.listItem}>
                    <strong>{bullet.label}:</strong> {bullet.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '100px 15%',
    backgroundColor: '#1a1e23',
    color: '#ffffff',
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  headingText: {
    fontSize: '2.5rem',
    margin: '0 0 50px 0',
    fontWeight: 'bold',
    color: '#e2e8f0'
  },
  timeline: {
    position: 'relative',
    paddingLeft: '40px',
    borderLeft: '3px solid #e2e8f0',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    width: '100%',
    maxWidth: '900px'
  },
  timelineItem: {
    position: 'relative',
    width: '100%',
  },
  logoContainer: {
    position: 'absolute',
    left: '-62px', 
    top: '20px',
    width: '40px',
    height: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 0 4px #1a1e23, 0 0 0 6px #505565',
    overflow: 'hidden'
  },
  logo: {
    width: '100%', 
    height: '100%',
    objectFit: 'contain',
    borderRadius: '50%'
  },
  card: {
    backgroundColor: '#272b34',
    padding: '30px',
    borderRadius: '8px',
    borderBottom: '3px solid #e2e8f0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
  },
  degree: {
    fontSize: '1.5rem',
    margin: '0 0 5px 0',
    color: '#e2e8f0',
    fontWeight: 'bold'
  },
  school: {
    fontSize: '1rem',
    margin: '0 0 5px 0',
    color: '#cbd5e1'
  },
  date: {
    fontSize: '0.9rem',
    margin: '0 0 20px 0',
    color: '#a8b2d1'
  },
  list: {
    margin: 0,
    paddingLeft: '20px'
  },
  listItem: {
    marginBottom: '8px',
    lineHeight: '1.5',
    color: '#cbd5e1',
    fontSize: '0.95rem'
  }
};

export default Education;