import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products match your criteria.</p>;
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;