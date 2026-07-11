import './App.css';
import './MediaQueries.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import About from './Pages/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Creneaux from './Pages/Creneaux';
import Formules from './Pages/Formules';
import Inscriptions from './Pages/Inscriptions';
import Testimonial from './Pages/Testimonial';
import Contact from './Pages/Contact';
import Donation from './Pages/Donation';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/TermsConditions';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/creneaux-gymnases" element={<Creneaux />} />
          <Route path="/formules-tarifs" element={<Formules />} />
          <Route path="/inscription" element={<Inscriptions />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/don" element={<Donation />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;