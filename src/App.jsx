import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: '#1a1e23', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;