// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-text">
        &copy; {new Date().getFullYear()} Genet Engenag Organization. All rights reserved. Developed by Muaz
      </span>
    </footer>
  );
}
