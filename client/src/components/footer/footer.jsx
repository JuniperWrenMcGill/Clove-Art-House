import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        <Link to="/owner-account">Owner Login</Link> || @ 2024 Temp name. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

