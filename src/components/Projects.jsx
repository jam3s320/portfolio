import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Orpheus",
      date: "July 2026",
      tech: "QA Testing, UI/UX Design, Frontend Development",
      bullets: [
        "A comprehensive multimedia web application featuring integrated streaming for movies, live TV, and cross-platform music sharing.",
        "Identified bugs and pushed critical system updates during the beta phase of a cross-platform multimedia application to ensure seamless performance prior to public launch.",
        "Designed the primary application icon and standardized pixel channel logos to integrate flawlessly with the platform's dark-themed user interface.",
        "Directed frontend interface refinements through comprehensive user-experience critiques and edits, directly improving layout consistency and the cinematic video player."
      ]
    },
    {
      title: "Trase",
      date: "January 2026",
      tech: "Node.js, React, Vite, Chrome Extension API, JavaScript, HTML/CSS",
      bullets: [
        "Developed a cybersecurity browser extension designed to detect phishing attempts in real-time, utilizing heuristic analysis to identify typosquatting and malicious redirects.",
        "Architected a modular frontend using React and Vite, integrating Manifest V3 service workers to handle background processes and ensure low-latency performance.",
        "Implemented a responsive popup interface that provides instant visual feedback on URL safety, enforcing strict security protocols and seamless user interaction."
      ]
    },
    {
      title: "RPS Geofence App",
      date: "May 2025",
      tech: "Swift, Xcode, Firebase",
      bullets: [
        "Developed a demo sign-in/sign-out Study Hall system integrated with Firebase, leveraging existing school accounts and user data.",
        "Improved the previously implemented Study Hall tab by redesigning its layout and fixing structural and usability issues.",
        "Collaborated in a group-oriented project, dividing tasks among team members and integrating individual components into a cohesive final product.",
        "Implemented object-oriented programming principles such as inheritance to design multiple account types and structure database interactions effectively."
      ]
    }
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.grid}>
        {projects.map((proj, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardHeader}>
              <h3 style={styles.title}>{proj.title}</h3>
              <span style={styles.date}>{proj.date}</span>
            </div>
            <p style={styles.tech}>{proj.tech}</p>
            <ul style={styles.list}>
              {proj.bullets.map((bullet, i) => (
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px'
  },
  card: {
    backgroundColor: '#23282f',
    padding: '25px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: '10px'
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
    color: '#64ffda'
  },
  date: {
    fontSize: '0.9rem',
    color: '#a8b2d1'
  },
  tech: {
    margin: '0 0 15px 0',
    fontSize: '0.9rem',
    fontStyle: 'italic',
    color: '#8892b0'
  },
  list: {
    margin: 0,
    paddingLeft: '20px',
    flexGrow: 1
  },
  listItem: {
    marginBottom: '10px',
    lineHeight: '1.5',
    fontSize: '0.95rem',
    color: '#cbd5e1'
  }
};

export default Projects;