import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function ParallaxSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section 
      ref={ref}
      className="relative h-[600px] bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=2000&q=80')`
      }}
    >
      <div className="absolute inset-0 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div 
            className={`text-center text-white transform transition-all duration-1000 ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Elevate Your Style</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Discover our curated collection of premium menswear, designed for those who appreciate quality and sophistication.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full text-lg hover:bg-gray-200 transition-colors">
              Shop Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
