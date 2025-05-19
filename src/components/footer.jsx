import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Retailer App. All rights reserved.</p>
        <div className="footer-links">
          <a href="/contact">Contact Us</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;