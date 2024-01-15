import './App.css'
import React, { useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [navHeight, setNavHeight] = useState(0);
  const handleScrollToSection = (sectionId) => {
    const position = document.getElementById(sectionId).offsetTop - navHeight;
    // Using animateScroll from react-scroll
    scroll.scrollTo(position, {
      smooth: 'true',
    });
  };
  return (
    <div className="bg-gray-100">
      <NavBar setNavHeight={setNavHeight} scrollTo={handleScrollToSection}/>
      <Home scrollTo={handleScrollToSection} />
      <About scrollTo={handleScrollToSection} />
      <Projects scrollTo={handleScrollToSection} />
      <Skills scrollTo={handleScrollToSection} />
      <Contact />
    </div>
  )
}

export default App
