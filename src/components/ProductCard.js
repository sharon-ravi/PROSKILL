import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCard.css'; // CORRECTED PATH (assuming src/styles/ProductCard.css exists)

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image-link">
        <div className="product-image-container">
          <img src={product.imageUrl} alt={product.name} className="product-image" />
        </div>
      </Link>
      <div className="product-info">
        <div>
          <Link to={`/product/${product.id}`} className="product-name-link">
             <h3 className="product-name">{product.name}</h3>
          </Link>
          <div className="product-price-container">
            {product.salePrice ? (
              <>
                <span className="original-price">${product.price}</span>
                <span className="product-price">${product.salePrice}</span>
              </>
            ) : (
              <span className="product-price">${product.price}</span>
            )}
          </div>
        </div>
        <div className="product-actions">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;