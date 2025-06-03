import React from 'react';
import '../styles/Sidebar.css'; // CORRECTED PATH (assuming src/styles/Sidebar.css exists)

const Sidebar = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <aside className="shop-sidebar">
      <div className="filter-group">
        <h4>Categories</h4>
        <ul className="category-list">
          {categories.map(category => (
            <li
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-group">
        <h4>Price Range</h4>
        <input type="range" min="0" max="1000" className="price-slider" />
        <div className="price-range-values">
            <span>$0</span> - <span>$1000</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;