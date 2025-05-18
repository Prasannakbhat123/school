// src/components/Gallery.tsx
import React from 'react';

interface ImageItem {
  id: string | number;
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryProps {
  images: ImageItem[];
  title?: string;
}

const Gallery: React.FC<GalleryProps> = ({ images, title }) => {
  if (!images || images.length === 0) {
    return (
      <section className="py-16 md:py-24 bg-gray-50 text-center">
        <p>No images to display in the gallery yet.</p>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="relative">
              {title}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" 
                    style={{ bottom: '-8px', background: 'linear-gradient(to right, transparent, #8a64b8, transparent)' }}></span>
            </span>
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-square"
              style={{ boxShadow: '0 4px 6px rgba(138, 100, 184, 0.1)' }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-105"
                loading="lazy"
              />
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ background: 'linear-gradient(to top, rgba(42, 28, 66, 0.85), rgba(42, 28, 66, 0))' }}>
                  <p className="text-sm text-white">{image.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
