import React, { useEffect, useState } from 'react';
import './buy.css'; // Import CSS file for styling
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3001")

function App() {
  
  //useState lets us update the price once received by backend
  const [price, setPrice] = useState();
  // useState to manage bid, description, title, and image
    const [bid, setBid] = useState("");
    const [description, setDescription] = useState("test");
    const [title, setTitle] = useState("test");
    const [imageURL, setImageURL] = useState("");

  //gets price from server
  socket.on("price", (data) => {
    setPrice(data);
  });

  //simple logic to check if bid amt is greater than price.
  const checkBid = () => {
    const bid = document.getElementById("bid").value;
    if (bid <= price){
        alert("Please enter an amount greater than the current price!");
    } else if(bid > price){
      setPrice(bid);
      socket.emit("newAcceptedBid", bid); //Broadcast the accepted bid so that server can show others in room and update Db.
    }

  }
  return (
    <div className="App">
    <div className="product-details">
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <img src={imageURL} alt="Product" className="product-image" />
    </div>
    <div className="bid-section">
      <h3 className="bid-title">Latest Bid: ${price}</h3>
      <input id="bid" value={bid} placeholder="Place your bid!" className="bid-input" />
      <button className="bid-submit">Submit</button>
    </div>
  </div>
);
}

export default App;


// function Buy() {
//   const [lots, setLots] = useState([]);

//   // Simulated fetch of auction lots from the database
//   useEffect(() => {
//     // Assuming we will have a function to fetch lots from the backend
//     const fetchLots = async () => {
//       try {
//         // Make a fetch request to get auction lots from backend
//         const response = await fetch('backend_endpoint');
//         if (!response.ok) {
//           throw new Error('Failed to fetch auction lots');
//         }
//         // Parse the JSON response
//         const data = await response.json();
//         // Update the state with the fetched lots
//         setLots(data);
//       } catch (error) {
//         console.error(error);
//         // Handle errors
//       }
//     };

//     // Call the fetchLots function
//     fetchLots();
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   const handleBidClick = (lotId) => {
//     // Redirect to the page dedicated to the clicked lot
//     console.log(`Bid button clicked for lot with ID: ${lotId}`);
//   };

//   return (
//     <div className="buy-page">
//       {/* Map through the lots array and render each lot */}
//       {lots.map((lot) => (
//         <div key={lot.id} className="lot-container">
//           <img src={lot.image_url} alt={lot.description} className="lot-image" />
//           <p className="lot-description">{lot.description}</p>
//           {/* Pass the lot ID to handleBidClick when the bid button is clicked */}
//           <button className="bid-button" onClick={() => handleBidClick(lot.id)}>Bid</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Buy;
