import './App.css'; // Importing your CSS file
import Navbar from './components/Navbar'; // Importing the Navbar component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom
import AboutMe from './components/AboutMe'; // Importing the AboutMe component
import Homepage from './components/Homepage'; // Importing the Homepage component
import Footer from './components/Footer'; // Importing the Footer component
import Login from './components/Login'; // Importing the Login component
import Lotpage from './components/LotPage'; // Importing the LotPage component
import OwnerDashboard from './components/OwnerDashboard'; // Importing the OwnerDashboard component
import Sell from './components/Sell'; // Importing the Sell component
import Signup from './components/SignUp'; // Importing the SignUp component
import UserDashboard from './components/UserDashboard'; // Importing the UserDashboard component

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar component */}
      <Routes> {/* Routes component to define all the routes */}
        <Route exact path="/" element={<Homepage />} /> {/* Route for the homepage */}
        <Route exact path="/About" element={<AboutMe />} /> {/* Route for the About page */}
        <Route exact path="/Login" element={<Login />} /> {/* Route for the Login page */}
        <Route exact path="/Lotpage" element={<Lotpage />} /> {/* Route for the Lotpage */}
        <Route exact path="/OwnerDashboard" element={<OwnerDashboard />} /> {/* Route for the OwnerDashboard */}
        <Route exact path="/Sell" element={<Sell />} /> {/* Route for the Sell page */}
        <Route exact path="/Signup" element={<Signup />} /> {/* Route for the Signup page */}
        <Route exact path="/UserDashboard" element={<UserDashboard />} /> {/* Route for the UserDashboard */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer /> {/* Footer component */}
    </Router>
  );
}

export default App;
