import './App.css';

import React from 'react';

import About from './components/About';
import ContactForm from './components/ContactForm';
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
      <ContactForm/>
    </div>
  );
}

export default App;
