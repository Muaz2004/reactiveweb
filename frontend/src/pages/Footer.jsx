// src/pages/Footer.jsx
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/donate">Donation</Link>
        <Link to="/volunteer">Volunteer</Link>
      </div>
      <div className="footer-rights">
        &copy; {new Date().getFullYear()} Genet Engenag Organization. All rights reserved.
      </div>
    </footer>
  );
}
