'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CarouselProps {
  items: { description: string, image: string }[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, isPlaying]);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        handlePrev();
        break;
      case 'ArrowRight':
        event.preventDefault();
        handleNext();
        break;
      case ' ':
        event.preventDefault();
        togglePlayPause();
        break;
    }
  };

  return (
    <div 
      className="carousel relative" 
      role="region" 
      aria-label="Image carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={carouselRef}
    >
      <div className="carousel-item mb-4 text-center">
        <Image
          src={items[currentIndex].image}
          alt={items[currentIndex].description}
          width={500}
          height={300}
          className="mx-auto"
        />
        <p className="mt-2 text-lg" id={`carousel-description-${currentIndex}`}>
          {items[currentIndex].description}
        </p>
      </div>
      
      {/* Controls */}
      <div className="flex justify-center space-x-4 mb-4">
        <button 
          className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 hover:bg-gray-700 transition-colors" 
          onClick={handlePrev}
          aria-label="Previous image"
        >
          Previous
        </button>
        <button 
          className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 hover:bg-gray-700 transition-colors" 
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button 
          className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 hover:bg-gray-700 transition-colors" 
          onClick={handleNext}
          aria-label="Next image"
        >
          Next
        </button>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2" role="tablist" aria-label="Carousel slides">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition-colors ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400 hover:bg-gray-600'
            }`}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to slide ${index + 1}`}
            aria-controls={`carousel-description-${index}`}
          />
        ))}
      </div>
      
      {/* Screen reader live region for announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Showing slide {currentIndex + 1} of {items.length}: {items[currentIndex].description}
      </div>
    </div>
  );
}
