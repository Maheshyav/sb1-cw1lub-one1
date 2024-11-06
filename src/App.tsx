import React from 'react';
import Navbar from './components/Navbar';
import ProductSlider from './components/ProductSlider';
import ParallaxSection from './components/ParallaxSection';
import FeaturedCollections from './components/FeaturedCollections';
import TrendingProducts from './components/TrendingProducts';
import FeatureHighlights from './components/FeatureHighlights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <ProductSlider />
        <FeaturedCollections />
        <ParallaxSection />
        <TrendingProducts />
        <FeatureHighlights />
      </main>
      <Footer />
    </div>
  );
}

export default App;