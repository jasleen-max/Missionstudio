
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SocialMediaPage from './components/SocialMediaPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SocialMediaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
