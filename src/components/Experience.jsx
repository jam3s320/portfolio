import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Tenzor LLC",
      role: "Software Engineer",
      date: "Nov. 2025 – Dec. 2025",
      location: "Brigantine, NJ",
      bullets: [
        "Engineered the startup's core authentication flow by building the sign-in and sign-up interfaces with JavaScript/TypeScript and Better Auth for robust session handling.",
        "Architected the backend data structure using Prisma, designing a maintainable and scalable database schema to handle core API requests."
      ]
    },
    {
      company: "Stevens Institute of Technology",
      role: "Music & Tech Lab Monitor",
      date: "April 2026 – May 2026",
      location: "Hoboken, NJ",
      bullets: [
        "Directed access control for the Music & Tech Lab, verifying authorizations and guiding users through the room reservation process via Microsoft Bookings.",
        "Spearheaded inventory management for the equipment closet, taking accountability for the distribution and secure return of specialized audio gear and instruments.",
        "Maintained meticulous daily logs of facility usage and collaborated with team members to ensure a clean, organized, and welcoming environment for all users."
      ]
    }
  ];

  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.heading}>Experience</h2>
      <div style={styles.container}>
        {experiences.map((exp, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.headerRow}>
              <h3 style={styles.role}>{exp.role}</h3>
              <span style={styles.date}>{exp.date}</span>
            </div>
            <h4 style={styles.company}>{exp.company} | {exp.location}</h4>
            <ul style={styles.list}>
              {exp.bullets.map((bullet, i) => (
                <li key={i} style={styles.listItem}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '80px 15%',
    backgroundColor: '#1a1e23',
    color: '#ffffff',
    fontFamily: 'sans-serif'
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '40px',
    borderBottom: '2px solid #a8b2d1',
    paddingBottom: '10px',
    display: 'inline-block'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  },
  card: {
    backgroundColor: '#23282f',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  },
  role: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#64ffda' 
  },
  date: {
    fontSize: '1rem',
    color: '#a8b2d1'
  },
  company: {
    margin: '0 0 15px 0',
    fontSize: '1.2rem',
    fontWeight: 'normal'
  },
  list: {
    margin: 0,
    paddingLeft: '20px'
  },
  listItem: {
    marginBottom: '10px',
    lineHeight: '1.6',
    color: '#cbd5e1'
  }
};

export default Experience;