import React from 'react';
import Carousel from '../components/Carousel';
import testimonials from '../data/testimonials.json';

const TestimonialPage = () => {
  // Prepare carousel items without icons
  const carouselItems = testimonials.map(item => ({
    ...item,
    icon: <span className="h-[16px] w-[16px] text-white">★</span> // Using simple star character
  }));

  return (
    <div className="bg-black text-white py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Client Testimonials</h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          What our clients say about us
        </p>

        <div style={{ height: '600px', position: 'relative' }}>
          <Carousel
            items={carouselItems}
            baseWidth={300}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialPage;