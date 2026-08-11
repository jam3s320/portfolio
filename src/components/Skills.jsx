import React from 'react';
import { FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { 
  SiJavascript, 
  SiCplusplus, 
  SiPython, 
  SiTypescript, 
  SiSwift, 
  SiNextdotjs,
  SiFirebase
} from 'react-icons/si';

const Skills = () => {
  const skillsData = [
    { name: 'Javascript', icon: <SiJavascript color="#F7DF1E" />, id: 1 },
    { name: 'HTML', icon: <FaHtml5 color="#E34F26" />, id: 2 },
    { name: 'CSS', icon: <FaCss3Alt color="#1572B6" />, id: 3 },
    { name: 'Java', icon: <FaJava color="#E76F00" />, id: 4 },
    { name: 'C++', icon: <SiCplusplus color="#00599C" />, id: 5 },
    { name: 'Python', icon: <SiPython color="#3776AB" />, id: 6 },
    { name: 'Typescript', icon: <SiTypescript color="#3178C6" />, id: 7 },
    { name: 'Swift', icon: <SiSwift color="#F05138" />, id: 8 },
    { name: 'React', icon: <FaReact color="#61DAFB" />, id: 9 },
    { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" />, id: 10 },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" />, id: 11 },
    { name: 'Firebase', icon: <SiFirebase color="#FFCA28" />, id: 12 },
  ];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.headingText}>Skills</h2>
      
      <div style={styles.grid}>
        {skillsData.map(skill => (
          <div key={skill.id} style={styles.card}>
            <div style={styles.iconContainer}>
              {skill.icon}
            </div>
            <span style={styles.skillName}>{skill.name}</span>
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
    alignItems: 'center'
  },
  headingText: {
    fontSize: '2.5rem',
    margin: '0 0 50px 0',
    borderBottom: '2px solid #505565', 
    paddingBottom: '5px',
    fontWeight: 'bold',
    display: 'inline-block'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 140px))',
    gap: '20px',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '700px'
  },
  card: {
    backgroundColor: '#272b34', 
    borderRadius: '35px', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '140px',
    height: '140px',
    transition: 'transform 0.2s ease',
  },
  iconContainer: {
    fontSize: '4.5rem',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  skillName: {
    fontSize: '1rem',
    color: '#d1d5db',
    fontWeight: '400'
  }
};

export default Skills;