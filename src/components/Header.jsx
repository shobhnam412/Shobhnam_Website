import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/Logo.png" alt="Shobhnam Logo" />
        <span className="raised-text">Shobhnam</span>
      </div>

      <nav>
        <Link to="/">Home</Link>
        {/* <a href="#">Services</a> */}
        {/* <a href="#">Artists</a> */}
        {/* <a href="#">Booking</a> */}
        <Link to="/about">About us</Link>
        {/* <a href="#">Contact</a> */}
        <Link to="/contact">Contact</Link>
        <h4>Download Our App</h4>
        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="header-download">
          <img src="/images/playstore.png" alt="Download App" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
