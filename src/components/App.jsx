// src/components/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Content from './Content';
import Navbar from './Navbar';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </Router>
  );
};

export default App;
