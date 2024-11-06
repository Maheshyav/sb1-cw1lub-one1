import React from 'react';

const collections = [
  {
    id: 1,
    title: 'Formal Collection',
    description: 'Premium Suits & Business Attire',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=800&q=80',
    category: 'men'
  },
  {
    id: 2,
    title: 'Casual Wear',
    description: 'Everyday Comfort & Style',
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=800&q=80',
    category: 'men'
  },
  {
    id: 3,
    title: 'Accessories',
    description: 'Watches, Belts & More',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=800&q=80',
    category: 'men'
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Men's Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative h-96 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                  <p className="mb-4 text-gray-200">{collection.description}</p>
                  <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                    View Collection
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}