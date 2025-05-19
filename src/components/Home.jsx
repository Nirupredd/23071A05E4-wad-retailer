import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page" style={{minWidth:'70vw'}}>
      <div className="hero-section">
        <h1>Welcome to Retailer</h1>
        <p>Your one-stop shop for all your needs</p>
        <Link to="/catalogue" className="cta-button">Shop Now</Link>
      </div>
      
      <div className="featured-section" style={{minWidth:'100vw'}}>
        <h2>Featured Products</h2>
        <div className="featured-products" style={{minWidth:'100vw'}}>
          {/* Mock featured products */}
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Featured Product 1" />
            <h3>Featured Product 1</h3>
            <p>$19.99</p>
            <Link to="/catalogue">View Details</Link>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Featured Product 2" />
            <h3>Featured Product 2</h3>
            <p>$29.99</p>
            <Link to="/catalogue">View Details</Link>
          </div>
          <div className="product-card">
            <img src="https://via.placeholder.com/150" alt="Featured Product 3" />
            <h3>Featured Product 3</h3>
            <p>$39.99</p>
            <Link to="/catalogue">View Details</Link>
          </div>
        </div>
      </div>
      
      <div className="about-section">
        <h2>About Us</h2>
        <p>Retailer is a modern e-commerce platform offering a wide range of products at competitive prices. We pride ourselves on excellent customer service and fast shipping.</p>
      </div>
    </div>
  );
}

export default Home;