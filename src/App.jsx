import './App.css'
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [navHeight, setNavHeight] = useState(0);
  return (
    <div>
      <NavBar setNavHeight={setNavHeight}/>
      <Home navHeight={navHeight}/>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
