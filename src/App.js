import React from 'react';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Body />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
