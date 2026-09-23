import React from 'react';
/* Importing the local images from your assets folder */
import stevensLogo from '../assets/stevens.png';
import tenzorLogo from '../assets/tenzor.png';

const Experience = () => {
  const experienceData = [
    {
      role: "Technology Support Analyst",
      company: "Stevens Institute of Technology",
      location: "Hoboken, NJ",
      date: "August 2026 – Present",
      logo: stevensLogo,
      bullets: [
        "Deliver in-person technical assistance and IT services to students and faculty, successfully resolving 50+ support tickets weekly with high satisfaction rates.",
        "Diagnose and troubleshoot computer hardware and software infrastructure, ensuring thousands of users are seamlessly onboarded to campus technology systems.",
        "Authored and refined technical troubleshooting guides, directly contributing to a 20\% reduction in average ticket resolution times."
      ]
    },
    {
      role: "Music & Tech Lab Monitor",
      company: "Stevens Institute of Technology",
      location: "Hoboken, NJ",
      date: "April 2026 – May 2026",
      logo: stevensLogo,
      bullets: [
        "Directed access control for the Music & Tech Lab, verifying authorizations and guiding users through the room reservation process via Microsoft Bookings.",
        "Spearheaded inventory management for the equipment closet, taking accountability for the distribution and secure return of specialized audio gear and instruments.",
        "Maintained meticulous daily logs of facility usage and collaborated with team members to ensure a clean, organized, and welcoming environment for all users."
      ]
    },
    {
      role: "Software Engineer",
      company: "Tenzor LLC",
      location: "Brigantine, NJ",
      date: "Nov. 2025 – Dec. 2025",
      logo: tenzorLogo,
      bullets: [
        "Engineered the startup's core authentication flow by building the sign-in and sign-up interfaces with JavaScript/TypeScript and Better Auth for robust session handling.",
        "Architected the backend data structure using Prisma, designing a maintainable and scalable database schema to handle core API requests."
      ]
    }
  ];

  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.headingText}>Experience</h2>
      
      <div style={styles.timeline}>
        {experienceData.map((item, index) => (
          <div key={index} style={styles.timelineItem}>
            <div style={styles.logoContainer}>
              <img src={item.logo} alt={`${item.company} logo`} style={styles.logo} />
            </div>
            
            <div style={styles.card}>
              <h3 style={styles.role}>{item.role}</h3>
              <p style={styles.company}>{item.company} | {item.location}</p>
              <p style={styles.date}>{item.date}</p>
              
              <ul style={styles.list}>
                {item.bullets.map((bullet, i) => (
                  <li key={i} style={styles.listItem}>{bullet}</li>
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
  role: {
    fontSize: '1.5rem',
    margin: '0 0 5px 0',
    color: '#e2e8f0',
    fontWeight: 'bold'
  },
  company: {
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

export default Experience;