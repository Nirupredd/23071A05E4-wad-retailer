import React, { useState, useEffect } from 'react';

function Catalogue() {
  const [products, setProducts] = useState([]);
  
  // Mock data - replace with actual API call
  useEffect(() => {
    setProducts([
      { id: 1, name: 'Product 1', price: 19.99, image: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Product 2', price: 29.99, image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 3', price: 39.99, image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Product 4', price: 49.99, image: 'https://via.placeholder.com/150' },
    ]);
  }, []);

  const addToCart = (product) => {
    // Add to cart logic
    console.log('Added to cart:', product);
  };

  return (
    <div className="catalogue-page">
      <h2>Product Catalogue</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;