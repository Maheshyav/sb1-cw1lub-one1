import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80)',
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s linear'
        }}
      />

      {/* Floating Elements - Left */}
      <div
        className="absolute left-[10%] top-[20%] w-48 h-48 opacity-50"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80)',
          backgroundSize: 'cover',
          transform: `translateY(${scrollY * 0.2}px)`,
          transition: 'transform 0.1s linear'
        }}
      />

      {/* Floating Elements - Right */}
      <div
        className="absolute right-[15%] top-[30%] w-64 h-64 opacity-50"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80)',
          backgroundSize: 'cover',
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s linear'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      
      {/* Content */}
      <div
        ref={ref}
        className={`relative h-full flex items-center justify-center text-white transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4">
            New Season Arrivals
          </span>
          <h2 className="text-6xl font-bold mb-6 leading-tight">
            Discover Our Latest
            <br />
            Collection
          </h2>
          <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Explore our curated selection of premium clothing and cutting-edge electronics.
            Elevate your style with our exclusive pieces.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
              Shop Collection
            </button>
            <button className="bg-black/30 backdrop-blur-sm text-white border border-white/30 px-8 py-3 rounded-full hover:bg-black/40 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}