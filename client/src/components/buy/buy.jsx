import React, { useEffect, useState } from 'react';
import './buy.css'; // Import CSS file for styling

// WE WILL NEED TO REFACTOR THIS WHEN THE DB IS DEFINED 

function Buy() {
  const [lots, setLots] = useState([]);

  // Simulated fetch of auction lots from the database
  useEffect(() => {
    // Assuming we will have a function to fetch lots from the backend
    const fetchLots = async () => {
      try {
        // Make a fetch request to get auction lots from backend
        const response = await fetch('backend_endpoint');
        if (!response.ok) {
          throw new Error('Failed to fetch auction lots');
        }
        // Parse the JSON response
        const data = await response.json();
        // Update the state with the fetched lots
        setLots(data);
      } catch (error) {
        console.error(error);
        // Handle errors
      }
    };

    // Call the fetchLots function
    fetchLots();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleBidClick = (lotId) => {
    // Redirect to the page dedicated to the clicked lot
    console.log(`Bid button clicked for lot with ID: ${lotId}`);
  };

  return (
    <div className="buy-page">
      {/* Map through the lots array and render each lot */}
      {lots.map((lot) => (
        <div key={lot.id} className="lot-container">
          <img src={lot.image_url} alt={lot.description} className="lot-image" />
          <p className="lot-description">{lot.description}</p>
          {/* Pass the lot ID to handleBidClick when the bid button is clicked */}
          <button className="bid-button" onClick={() => handleBidClick(lot.id)}>Bid</button>
        </div>
      ))}
    </div>
  );
}

export default Buy;
