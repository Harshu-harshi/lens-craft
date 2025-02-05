import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import StylesOfShoots from './components/StylesOfShoots';
import StyleDetails from './pages/StyleDetails'; // Import StyleDetails
import Testimonies from './components/Testimonies';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/styles" element={<StylesOfShoots />} />
        <Route path="/styles/:id" element={<StyleDetails />} /> {/* Add route for StyleDetails */}
        <Route path="/testimonies" element={<Testimonies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
