'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselProps {
  items: { description: string, image: string }[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div className="carousel relative">
      <div className="carousel-item mb-4 text-center">
        <Image
          src={items[currentIndex].image}
          alt={items[currentIndex].description}
          width={500}
          height={300}
          className="mx-auto"
        />
        <p className="mt-2 text-lg">{items[currentIndex].description}</p>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-l" onClick={handlePrev}>
          Previous
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-r" onClick={handleNext}>
          Next
        </button>
      </div>
      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
