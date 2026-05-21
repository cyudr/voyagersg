import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Itinerary from './pages/Itinerary';
import Preferences from './pages/Preferences';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
