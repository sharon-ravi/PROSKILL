// src/components/ProductFilterSidebar.js
import React, { useState } from 'react';
import '../styles/ProductFilterSidebar.css';

const AccordionItem = ({ title, options, filterKey, activeFilter, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!options || options.length === 0) {
    return null; // Don't render if no options for this filter
  }

  return (
    <div className="accordion-item">
      <button className="accordion-title" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        {title.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} {/* Format title */}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          <ul>
            {/* Option to clear this specific filter */}
            <li
              onClick={() => onFilterChange(filterKey, '')}
              className={!activeFilter ? 'active-filter-option' : ''}
            >
              All
            </li>
            {options.map(option => (
              <li
                key={option}
                onClick={() => onFilterChange(filterKey, option)}
                className={activeFilter === option ? 'active-filter-option' : ''}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


const ProductFilterSidebar = ({ filters, staticFilterLabels, activeFilters, onFilterChange }) => {
  // Order of filters as desired
  const filterOrder = ['productType', 'gender', 'industry', 'features', 'productRange', 'job'];

  return (
    <aside className="product-filter-sidebar">
      <h3>Refine Your Search</h3>
      {filterOrder.map(key => {
        // Use the display name from staticFilterLabels (like "PRODUCT TYPE")
        // but the options from the dynamic `filters` prop
        const displayName = Object.keys(staticFilterLabels).find(k => k.toLowerCase() === key.toLowerCase());
        if (displayName && filters[key]) {
          return (
            <AccordionItem
              key={key}
              title={key} // Or a more user-friendly title map
              options={filters[key]}
              filterKey={key}
              activeFilter={activeFilters[key]}
              onFilterChange={onFilterChange}
            />
          );
        }
        return null;
      })}
    </aside>
  );
};

export default ProductFilterSidebar;