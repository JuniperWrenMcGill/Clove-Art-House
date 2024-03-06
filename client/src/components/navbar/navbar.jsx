import React from 'react';
import './navbar.css'; // Import CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/buy">Buy</a></li>
        <li className="logo">Clove Art House</li> {/* Added class for styling */}
        <li><a href="/sell">Sell</a></li>
        <li><a href="/impact">Impact</a></li>
        <li><a href="/account">Account</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
