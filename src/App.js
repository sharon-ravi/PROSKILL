// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/Header';
import Footer from './components/Footer';

// Import Page Components
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
// Example: If you create other pages, import them here
// import ContactPage from './pages/ContactPage';
// import AboutUsPage from './pages/AboutUsPage';
// import ProductDetailPage from './pages/ProductDetailPage'; // For when a user clicks a product
// import PageNotFound from './pages/PageNotFound'; // For a 404 page

// Import Global Styles
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            {/* Homepage Route - This is your landing page with category cards */}
            <Route path="/" element={<HomePage />} />

            {/* Dynamic Category Page Route */}
            {/* This route will match URLs like /category/jackets, /category/winter-clothing, etc. */}
            {/* The ":categorySlug" part is a URL parameter that CategoryPage can access. */}
            <Route path="/category/:categorySlug" element={<CategoryPage />} />

            {/* Example: Product Detail Page Route (You'll build this later) */}
            {/* <Route path="/product/:productId" element={<ProductDetailPage />} /> */}

            {/* Example: Other Static Pages */}
            {/* <Route path="/contact-us" element={<ContactPage />} /> */}
            {/* <Route path="/about-us" element={<AboutUsPage />} /> */}
            {/* <Route path="/brands" element={<BrandsPage />} /> */}
            {/* <Route path="/specials" element={<SpecialsPage />} /> */}


            {/* Optional: Catch-all 404 Not Found Route */}
            {/* This should always be the LAST route defined in your <Routes> block */}
            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;