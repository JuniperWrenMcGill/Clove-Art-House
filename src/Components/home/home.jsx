import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom - this was needed for button to work
import './home.css'; // Import CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="card-container">
        {/* left box content */}
        <div className="left-card">
          <h1>Welcome to [Name of Website]</h1>
          <h2>Where we believe in empowering non-profits through art.</h2>
          <p>At [Art Auction Website Name], we believe in the transformative power of art to inspire, uplift, and create positive change. A portion of the proceeds from every auction goes directly to supporting non-profit organizations dedicated to promoting arts education, cultural enrichment, and community development.</p>
        </div>
        {/* right box content */}
        <div className="right-card">
          <h3>Discover our Premier Auction Collection</h3>
          <Link to="/buy">
            <button className="button">View & Bid</button> 
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;


