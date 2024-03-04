import React from 'react';
import './impact.css'; // Import the CSS file

const ImpactPage = () => {
  // Function to handle button click and redirect to another page
  const handleButtonClick = () => {
    window.location.href = 'https://example.com'; // Replace with the actual URL
  };

  return (
    <div className="impact-page">
      <div className="impact-left-card">
        <h1 className="impact-title">Auction Proceeds Benefit the Featured Non-Profit:</h1>
        <h2 className="impact-subtitle">Carolina Food Relief Initiative</h2>
        <p className="impact-text">The Carolina Food Relief Initiative is dedicated to combating food insecurity and hunger in communities across North Carolina. Established in 2012, this organization is driven by the belief that every individual deserves access to nutritious food, regardless of their circumstances.</p>
        <p className="impact-text">Join in the mission to nourish our neighbors and build a hunger-free North Carolina where everyone has access to nutritious food and the opportunity to thrive.</p>
      </div>
      <div className="impact-right-card">
        {/* this needs to be made functional */}
        <p className="impact-text-right">To learn more about this organization, please visit their website to explore their mission, programs, and impact, as well as opportunities to get involved or support their cause.</p>
        <button className="impact-button" onClick={handleButtonClick}>Visit their website</button>
      </div>
    </div>
  );
};

export default ImpactPage;
