// src/components/CategoryCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.slug}`} className="category-card">
      <img src={category.imageUrl} alt={category.name} className="category-image" />
      <div className="category-overlay">
        <h3 className="category-name">{category.name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;