// src/pages/CategoryPage.js
import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { allProducts, categoryDetails, filterOptions } from '../data/products'; // Your mock data
import ProductFilterSidebar from '../components/ProductFilterSidebar';
import ProductCardWithVariants from '../components/ProductCardWithVariants';
import RelatedProducts from '../components/RelatedProducts'; // New component
import '../styles/CategoryPage.css';

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});

  const currentCategory = categoryDetails[categorySlug];

  useEffect(() => {
    let categoryProducts = allProducts.filter(p => p.categorySlug === categorySlug);

    if (Object.keys(activeFilters).length > 0) {
      categoryProducts = categoryProducts.filter(product => {
        return Object.entries(activeFilters).every(([filterKey, filterValue]) => {
          if (!filterValue || filterValue === '') return true;
          if (filterKey === 'features' && Array.isArray(product.features)) {
            // If filtering by multiple features, this needs to be more complex
            // For now, assumes filterValue is a single feature string
            return product.features.includes(filterValue);
          }
          // Ensure product[filterKey] exists before comparing
          return product[filterKey] && product[filterKey].toString().toLowerCase() === filterValue.toString().toLowerCase();
        });
      });
    }
    setProducts(categoryProducts);
  }, [categorySlug, activeFilters]);

  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prevFilters => {
      const newFilters = { ...prevFilters };
      if (value === '' || !value) {
        delete newFilters[filterType];
      } else {
        newFilters[filterType] = value;
      }
      return newFilters;
    });
  };

  const availableFiltersForCategory = useMemo(() => {
    const initialCategoryProducts = allProducts.filter(p => p.categorySlug === categorySlug);
    const options = {};
    Object.keys(filterOptions).forEach(key => {
      const uniqueValues = [...new Set(
        initialCategoryProducts.flatMap(p => {
          if (key === 'features' && Array.isArray(p.features)) {
            return p.features; // Flatten array of features
          }
          return p[key]; // For single value properties
        }).filter(Boolean) // Remove undefined/null/empty strings
      )];
      if (uniqueValues.length > 0) {
        options[key] = uniqueValues.sort();
      }
    });
    return options;
  }, [categorySlug]);


  if (!currentCategory) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Category '{categorySlug}' details not found. Please check your data in products.js.</div>;
  }

  const relatedProductList = allProducts
    .filter(p => p.categorySlug === categorySlug && (!products.length || (products.length > 0 && p.id !== products[0]?.id)))
    .slice(0, 4);

  return (
    <div className="category-page">
      {currentCategory.bannerImage && (
        <div className="category-banner">
          <img src={process.env.PUBLIC_URL + currentCategory.bannerImage} alt={`${currentCategory.title} Banner`} />
          <div className="category-banner-overlay">
            <h1>{currentCategory.title}</h1>
          </div>
        </div>
      )}

      <div className="category-page-container">
        <div className="category-breadcrumbs">
          <Link to="/">Proskill Australia Workwear</Link> | <Link to="/">Shop</Link> | <span>{currentCategory.title}</span>
        </div>

        {currentCategory.descriptionTop && (
          <div className="category-description top-description">
            <p>{currentCategory.descriptionTop}</p>
          </div>
        )}

        <div className="category-content-layout">
          <ProductFilterSidebar
            filters={availableFiltersForCategory}
            staticFilterLabels={filterOptions} // To get the display title for filter group
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
          />
          <div className="category-product-grid">
            {products.length > 0 ? (
              products.map(product => (
                <ProductCardWithVariants key={product.id} product={product} />
              ))
            ) : (
              <p>No products match the current filters in this category.</p>
            )}
          </div>
        </div>

        {currentCategory.descriptionBottom && currentCategory.descriptionBottom.length > 0 && (
          <div className="category-description bottom-description">
            {currentCategory.descriptionBottom.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}

        {relatedProductList.length > 0 && (
           <RelatedProducts products={relatedProductList} title="You Might Also Like" />
        )}
      </div>
    </div>
  );
};

export default CategoryPage;