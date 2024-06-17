import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Summary from './pages/Summary';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/summary/:id" element={<Summary />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


