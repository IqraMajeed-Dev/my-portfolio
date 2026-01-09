
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';   
import AboutMe from './components/AboutMe';  
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />       
      <AboutMe />     
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
