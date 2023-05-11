import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
