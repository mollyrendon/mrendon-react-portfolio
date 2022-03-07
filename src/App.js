import React from 'react';
import './App.css';

import Main from "./views/Main";
import About from './views/About';
import Projects from './views/Projects';
import Contact from "./views/Contact";
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
