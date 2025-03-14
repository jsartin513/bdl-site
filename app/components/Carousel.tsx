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
    <div className="carousel">
      <div className="carousel-item mb-4">
        <Image src={items[currentIndex].image} alt={items[currentIndex].description} width={500} height={300} />
        <p className="mt-2">{items[currentIndex].description}</p>
      </div>
      <div className="flex justify-between w-1/4">
        <button className="mr-4" onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
