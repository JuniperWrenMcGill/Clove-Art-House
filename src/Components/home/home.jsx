import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './home.css'; // Import CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <div className="card-container">
        <div className="left-card">
          <h2>Welcome to [Name of Website]</h2>
          <p>Where we believe in empowering non-profits through art.</p>
          <p>At [Art Auction Website Name], we believe in the transformative power of art to inspire, uplift, and create positive change. A portion of the proceeds from every auction goes directly to supporting non-profit organizations dedicated to promoting arts education, cultural enrichment, and community development.</p>
        </div>
        <div className="right-card">
          {/* Content for the second card */}
          <h3>Discover our Premier Auction Collection</h3>
          <Link to="/buy">
            <button className="button">View & Bid</button> {/* Wrap the link inside a button */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;


