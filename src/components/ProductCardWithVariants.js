// src/components/ProductCardWithVariants.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductCardWithVariants.css';

const ProductCardWithVariants = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.imageUrl);
  const [selectedColor, setSelectedColor] = useState(product.colors.length > 0 ? product.colors[0] : null);

  const handleColorSwatchHover = (colorImageUrl) => {
    if (colorImageUrl) {
      setCurrentImage(colorImageUrl);
    }
  };

  const handleColorSwatchLeave = () => {
    setCurrentImage(product.imageUrl); // Revert to main product image
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (color.image) {
        setCurrentImage(color.image);
    }
  }

  return (
    <div className="p-card">
      <Link to={`/product/${product.id}`} className="p-card-image-link"> {/* Link to product detail page */}
        <div className="p-card-image-container">
          <img src={currentImage} alt={product.name} className="p-card-image" />
        </div>
      </Link>
      <div className="p-card-info">
        {product.colors && product.colors.length > 0 && (
          <div className="p-card-color-swatches">
            {product.colors.map(color => (
              <button
                key={color.code}
                className={`color-swatch ${selectedColor && selectedColor.code === color.code ? 'selected' : ''} ${color.stock === 0 ? 'out-of-stock' : ''}`}
                title={`${color.name} ${color.stock === 0 ? '(Out of Stock)' : ''}`}
                style={{ backgroundColor: color.cssColor || `#${color.code}` }} // Assuming color codes are hex or you have a cssColor field
                onMouseEnter={() => handleColorSwatchHover(color.image)}
                onMouseLeave={handleColorSwatchLeave}
                onClick={() => handleColorSelect(color)}
                disabled={color.stock === 0}
              >
                <span className="sr-only">{color.name}</span>
                {color.stock === 0 && <span className="swatch-oos-slash"></span>}
              </button>
            ))}
          </div>
        )}
        <Link to={`/product/${product.id}`}>
            <h3 className="p-card-name">{product.name}</h3>
        </Link>
        <p className="p-card-price">${product.price.toFixed(2)}</p>
        <Link to={`/product/${product.id}?color=${selectedColor?.code || ''}`} className="p-card-button">
          Select Options
        </Link>
      </div>
    </div>
  );
};

export default ProductCardWithVariants;