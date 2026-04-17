import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Testimonials from './components/Testimonials';
import Artists from './components/Artists';
import RecentBookings from './components/RecentBookings';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Aboutus from './components/Aboutus';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Hero />
          <Services />
          <ServiceDetails />
          <Testimonials />
          <Artists />
          {/* <RecentBookings /> */}
          <Footer />
        </>
      } />
      <Route path="/about" element={
        <>
          <Header />
          <Aboutus />
          <Footer />
        </>
      } />
      <Route path="/contact" element={
        <>
          <Header />
          <Contact />
          <Footer />
        </>
      } />
    </Routes>
  );
}

export default App;
