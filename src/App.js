import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing the Routes component

import Home from './components/home/home';
import Buy from './components/buy/buy';
import About from './components/about/about';
import Sellers from './components/sellers/sellers';
import Impact from './components/impact/impact';
import Account from './components/account/account';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes> {/* Wrap your Route components with Routes */}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/buy" element={<Buy/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/sell" element={<Sellers/>} />
            <Route exact path="/impact" element={<Impact/>} />
            <Route exact path="/account" element={<Account/>} />

            {/* Add more routes for other pages */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
