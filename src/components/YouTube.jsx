import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const YouTube = () => {
  const bullets = [
    "Have been creating drum content and drum covers since 2020 in a variety of genres of music.",
    "Leaned more towards rock, pop, punk, pop punk, punk rock, and church.",
    "Developed video editing, mixing, mastering, audio technical skills, and DAW skills doing YouTube and social media content creation.",
    "Gained experience in social media marketing and content creation through YouTube, Instagram, and TikTok.",
    "Learned how to use a variety of different microphones, audio interfaces, and recording techniques for different instruments and vocals.",
    "Gained experience in live production for events and performances."
  ];

  return (
    <section id="youtube" style={styles.section}>
      <h2 style={styles.heading}>YouTube Channel</h2>
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <a
            href="https://www.youtube.com/@jam3s320"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.titleGroup}
          >
            <FaYoutube style={styles.icon} />
            <h3 style={styles.title}>Drum Covers &amp; Content</h3>
          </a>
          <span style={styles.date}>March 2020 - Present</span>
        </div>
        <ul style={styles.list}>
          {bullets.map((bullet, i) => (
            <li key={i} style={styles.listItem}>{bullet}</li>
          ))}
        </ul>
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
    gap: '15px',
    flexWrap: 'wrap',
    marginBottom: '15px'
  },
  titleGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none',
    cursor: 'pointer'
  },
  icon: {
    fontSize: '1.6rem',
    color: '#ff0000',
    flexShrink: 0
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
  list: {
    margin: 0,
    paddingLeft: '20px'
  },
  listItem: {
    marginBottom: '10px',
    lineHeight: '1.5',
    fontSize: '0.95rem',
    color: '#cbd5e1'
  }
};

export default YouTube;
