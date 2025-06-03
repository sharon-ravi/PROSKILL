// src/pages/HomePage.js
import React from 'react';
// Link is not directly used in this component if CategoryCard handles it.
// import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import '../styles/HomePage.css';

// --- IMPORT ALL 14 CATEGORY IMAGES ---
// Make sure these filenames match what you saved in src/assets/category-images/
import jacketsImg from '../assets/category-images/jackets.jpg';
import vestsImg from '../assets/category-images/vests.jpg';
import jumpersImg from '../assets/category-images/jumpers.jpg';
import tshirtsImg from '../assets/category-images/t-shirts.jpg';
import poloShirtsImg from '../assets/category-images/polo-shirts.jpg';
import pantsImg from '../assets/category-images/pants.jpg';
import shortsImg from '../assets/category-images/shorts.jpg';
import bibAndBracesImg from '../assets/category-images/bib-and-braces.jpg'; // Filename with hyphens
import overallsImg from '../assets/category-images/overalls.jpg';
import accessoriesImg from '../assets/category-images/accessories.jpg';
import safetyClothingImg from '../assets/category-images/safety-clothing.jpg'; // Filename with hyphens
import thermalClothingImg from '../assets/category-images/thermal-clothing.jpg'; // Filename with hyphens
import underwearImg from '../assets/category-images/underwear.jpg';
import winterClothingImg from '../assets/category-images/winter-clothing.jpg'; // Filename with hyphens

const categoriesData = [
  { id: 1, name: 'Jackets', slug: 'jackets', imageUrl: jacketsImg },
  { id: 2, name: 'Vests', slug: 'vests', imageUrl: vestsImg },
  { id: 3, name: 'Jumpers', slug: 'jumpers', imageUrl: jumpersImg },
  { id: 4, name: 'T-shirts', slug: 't-shirts', imageUrl: tshirtsImg },
  { id: 5, name: 'Polo shirts', slug: 'polo-shirts', imageUrl: poloShirtsImg },
  { id: 6, name: 'Pants', slug: 'pants', imageUrl: pantsImg },
  { id: 7, name: 'Shorts', slug: 'shorts', imageUrl: shortsImg },
  { id: 8, name: 'Bib & braces', slug: 'bib-and-braces', imageUrl: bibAndBracesImg },
  { id: 9, name: 'Overalls', slug: 'overalls', imageUrl: overallsImg },
  { id: 10, name: 'Accessories', slug: 'accessories', imageUrl: accessoriesImg },
  { id: 11, name: 'Safety Clothing', slug: 'safety-clothing', imageUrl: safetyClothingImg },
  { id: 12, name: 'Thermal Clothing', slug: 'thermal-clothing', imageUrl: thermalClothingImg },
  { id: 13, name: 'Underwear', slug: 'underwear', imageUrl: underwearImg },
  { id: 14, name: 'Winter Clothing', slug: 'winter-clothing', imageUrl: winterClothingImg },
];

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="page-header-area">
        {/* Removed breadcrumbs based on your previous version of HomePage.js in the prompt */}
        {/* If you want breadcrumbs back:
        <div className="breadcrumbs">
          Proskill Australia Workwear | <span className="breadcrumb-shop-text">Shop</span>
        </div>
        */}
        <h1 className="page-title">Shop</h1> {/* This title comes from the original Proskill image you sent */}
      </div>

      {/* Ensure this class name matches the one in your HomePage.css for vertical grid */}
      <div className="category-grid-container"> {/* Changed from category-scroll-container */}
        <div className="category-grid">
          {categoriesData.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>

      {/* You can add other sections of the homepage below if needed */}
    </div>
  );
};

export default HomePage;