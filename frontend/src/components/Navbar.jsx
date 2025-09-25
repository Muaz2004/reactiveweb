import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const token = localStorage.getItem('access_token');

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>

      {token ? (
        <>
          <Link to="/projects">Projects</Link>
          <Link to="/donate">Donation</Link>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/logout">Logout</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}

      <span className="language">Language: 🇪🇹 🇸🇦 🇺🇸</span>
    </nav>
  );
}
