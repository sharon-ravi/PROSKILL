// src/components/RelatedProducts.js
import React from 'react';
import ProductCardWithVariants from './ProductCardWithVariants'; // Reuse your product card
import '../styles/RelatedProducts.css';

const RelatedProducts = ({ products, title }) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="related-products-section">
      <h2>{title || "Related Products"}</h2>
      <div className="related-products-grid">
        {products.map(product => (
          <ProductCardWithVariants key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;