import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/Logo.png" alt="Shobhnam Logo" />
        <span className="raised-text">Shobhnam</span>
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Artists</a>
        <a href="#">Booking</a>
        <a href="#">Contact</a>
        <h4>Download Our App</h4>
        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="header-download">
          <img src="/images/playstore.png" alt="Download App" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
