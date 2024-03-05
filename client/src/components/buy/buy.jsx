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
    <div className="App">
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{description}</p>
        <img src={imageURL} alt="Product" className="product-image" />
      </div>
      <div className="bid-section">
        <h3 className="bid-title">Latest Bid: ${price}</h3>
        <input id="bid" placeholder="Place your bid!" className="bid-input" />
        <button onClick={checkBid} className="bid-submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
