import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar" style={{minWidth:'100vw'}}>
      <div className="logo">Retailer</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalogue">Catalogue</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;