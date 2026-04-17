import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: shobhnam412@gmail.com</p>
          <p>Phone: +91 9559508108</p>
          <p>Address: Kalyanpur Kanpur, Uttar Pradesh</p>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul className="footer-services">
            <li><a href="#">Ramleela Booking</a></li>
            <li><a href="#">Sunderkand Booking</a></li>
            <li><a href="#">Bhajan Sandhya</a></li>
            <li><a href="#">Bhagwat Katha</a></li>
            <li><a href="#">Rudrabhishek</a></li>
            <li><a href="#">Other Services</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Download Our App</h3>
          <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="playstore-btn">
            <img src="/images/playstore.png" alt="Google Play" />
          </a>

          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

      </div>

      <p className="copyright">
        © 2026 Shobhnam.in | India's first artist platform
      </p>
    </footer>
  );
}

export default Footer;
