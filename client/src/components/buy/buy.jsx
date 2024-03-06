import React, { useEffect, useState } from 'react';
import './buy.css'; // Import CSS file for styling
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3001")

function Auction() {

  //useState lets us update the price once received by backend
  const [price, setPrice] = useState();
  // useState to manage bid, description, title, and image
  const [bid, setBid] = useState("");
  const [description, setDescription] = useState("Step into the captivating world of an exquisite oil painting. The artist's use of yellows infuses the scene with a luminous quality that captivates the eye. This remarkable artwork promises to be a cherished addition to any collection, offering a timeless reminder of the beauty found in moments of quiet reflection");
  const [title, setTitle] = useState("The Straw Hat by Nikos Lytras");
  const [imageURL, setImageURL] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user's login status

  useEffect(() => {
  setIsLoggedIn();
  }, []);

  
  //gets price from server
  socket.on("price", (data) => {
    setPrice(data);
  });

  //simple logic to check if bid amt is greater than price.
  const checkBid = () => {
    let bid = +document.getElementById("bid").value;
    console.log(bid);
    if (bid <= price) {
      alert("Please enter an amount greater than the current price!");
    } else if (bid > price) {
      setPrice(bid);
      socket.emit("newAcceptedBid", bid); //Broadcast the accepted bid so that server can show others in room and update Db.
    }
  }
  return (
    <div className="buy-page">
    <div className="App">
      <div className="product-details-card">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <div className="product-image"/>
      </div>
      <div className="bid-section">
          <h3 className="bid-title">Latest Bid: ${price}</h3>
          {/* Render bid input and submit button only if user is logged in */}
          {isLoggedIn && (
            <>
              <input id="bid" placeholder="Place your bid!" className="bid-input" />
              <button onClick={checkBid} className="bid-submit">Submit</button>
            </>

          )}
          {!isLoggedIn && (
            <p>You are logged out. Please log in to place a bid.</p>
          )}
        </div>
    </div>
    </div>
  );
}

export default Auction;
