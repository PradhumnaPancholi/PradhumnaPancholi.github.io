import './App.css';

import React from 'react';

import About from './components/About';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <ProjectList/>
    </div>
  );
}

export default App;
