// src/components/Footer.jsx
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h4>About SDP</h4>
            <p>
              The Social Democratic Party is dedicated to building a just,
              democratic, and prosperous Pakistan where every citizen enjoys
              equality, education, and opportunities for growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/vision" className="footer-link">Our Vision</Link></li>
              <li><Link to="/team" className="footer-link">Our Team</Link></li>
              <li><Link to="/join" className="footer-link">Join Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3 mb-4">
            <h4>Contact Us</h4>
            <p>📍 233-A, Street#4, F-10/3, Islamabad, Pakistan</p>
            <p>📞 (051) 4718112</p>
            <p>✉️ sdp.pakistan24@gmail.com</p>
          </div>

          {/* Social Icons */}
          <div className="col-md-2 mb-4">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom text-center">
          <p>© {new Date().getFullYear()} Social Democratic Party | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
