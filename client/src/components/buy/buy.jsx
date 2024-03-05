import React, { useEffect, useState } from 'react';
import './buy.css'; // Import CSS file for styling
import io from 'socket.io-client'
const socket = io.connect("http://localhost:3001")

function Auction() {

  //useState lets us update the price once received by backend
  const [price, setPrice] = useState();
  // useState to manage bid, description, title, and image
  const [bid, setBid] = useState("");
  const [description, setDescription] = useState("Step into the captivating world of an exquisite oil painting that exudes warmth and serenity. At the heart of the canvas stands a solitary figure, a gentleman adorned in a distinguished hat, lost in contemplation. The artist's masterful use of yellows, ranging from soft ochres to vibrant golds, infuses the scene with a luminous quality that captivates the eye. As light and shadow dance across the canvas, the depth and realism of the composition are enhanced, drawing the viewer deeper into the tranquil atmosphere. This piece invites you to immerse yourself in its rich hues and ponder the mysteries hidden within its depths. This remarkable artwork promises to be a cherished addition to any collection, offering a timeless reminder of the beauty found in moments of quiet reflection");
  const [title, setTitle] = useState("The Straw Hat by Nikos Lytras");
  const [imageURL, setImageURL] = useState("");
  //gets price from server
  socket.on("price", (data) => {
    setPrice(data);
  });

  //simple logic to check if bid amt is greater than price.
  const checkBid = () => {
    const bid = document.getElementById("bid").value;
    if (bid <= price) {
      alert("Please enter an amount greater than the current price!");
    } else if (bid > price) {
      setPrice(bid);
      socket.emit("newAcceptedBid", bid); //Broadcast the accepted bid so that server can show others in room and update Db.
    }

  }
  return (
    <div className="App">
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <div className="product-image" />
      </div>
      <div className="bid-section">
        <h3 className="bid-title">Latest Bid: ${price}</h3>
        <input id="bid" value={bid} placeholder="Place your bid!" className="bid-input" />
        <button onClick={checkBid} className="bid-submit">Submit</button>
      </div>
    </div>
  );
}

export default Auction;
