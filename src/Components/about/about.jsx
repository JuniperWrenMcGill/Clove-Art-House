import React from 'react';
import './about.css'; // Import the CSS file

function About() {
  return (
    <div className="about-container">
    <div className="about-card-container">
      <h1 className="about-title">Welcome to [Art Auction Website Name]</h1>
      <p className="about-text">At [Art Auction Website Name], we're passionate about art and making a difference. Our platform brings together local artists and collectors, to support a worthy cause while celebrating creativity from around the world.</p>
      <h2 className="about-subtitle">Explore, Bid, Make a Difference</h2>
      <p className="about-text">Browse our curated collection of stunning artworks from emerging artists spanning various styles, mediums, and genres. From captivating paintings to exquisite sculptures, there's something for every taste and preference.Participate in our live auctions to bid on your favorite pieces and secure a masterpiece to adorn your home or office. With each bid, you're not just acquiring art—you're also making a meaningful contribution to the cause.</p>
      <h2 className="about-subtitle">Join Our Community</h2>
      <p className="about-text"> Whether you're an art enthusiast, a seasoned collector, or someone looking to make a difference, we invite you to join our vibrant community. Connect with fellow art lovers, discover new talents, and be part of something truly special.Start your journey with [Art Auction Website Name] today and experience the joy of art while making a difference in the world.</p>
    </div>
    </div>
  );
}

export default About;
