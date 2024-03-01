import './App.css'; // Importing your CSS file
import Navbar from './components/navbar/navbar'; // Importing the Navbar component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom
import AboutUs from './components/aboutUs/aboutUs'; // Importing the AboutMe component
import Homepage from './components/homepage/homepage'; // Importing the Homepage component
import Footer from './components/footer/footer'; // Importing the Footer component
import Login from './components/login/login'; // Importing the Login component
import LotPage from './components/lotPage/lotPage'; // Importing the LotPage component
import OwnerDashboard from './components/ownerDashboard/ownerDashboard'; // Importing the OwnerDashboard component
import Sellers from './components/sellers/sellers'; // Importing the Sell component
import Signup from './components/signUp/signUp'; // Importing the SignUp component
import UserDashboard from './components/userDashboard/userDashboard'; // Importing the UserDashboard component
import Buy from './components/buy/buy';
import Contact from './components/customerSupport/customerSupport';



function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar component */}
      <Routes> {/* Routes component to define all the routes */}
        <Route exact path="/" element={<Homepage />} /> {/* Route for the homepage */}
        <Route exact path="/About" element={<AboutUs />} /> {/* Route for the About page */}
        <Route exact path="/Account" element={<Login />} /> {/* Route for the Login page */}
        <Route exact path="/Bid" element={<LotPage />} /> {/* Route for the Lotpage */}
        <Route exact path="/OwnerDashboard" element={<OwnerDashboard />} /> {/* Route for the OwnerDashboard */}
        <Route exact path="/Sell" element={<Sellers />} /> {/* Route for the Sell page */}
        <Route exact path="/Signup" element={<Signup />} /> {/* Route for the Signup page */}
        <Route exact path="/UserDashboard" element={<UserDashboard />} /> {/* Route for the UserDashboard */}
        <Route exact path="/Buy" element={<Buy />} /> {/* Route for the Sell page */}
        <Route exact path="/Contact" element={<Contact/>} /> {/* Route for the Sell page */}      
      
        {/* Add more routes as needed */}
        
      </Routes>
      <Footer /> {/* Footer component */}
    </Router>
  );
}

export default App;

// lets try this again