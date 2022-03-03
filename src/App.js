import React from 'react';
import './App.css';

import Main from "./views/Main";
import About from './views/About';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <About />
    </div>
  );
}

export default App;
