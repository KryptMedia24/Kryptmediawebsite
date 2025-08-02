import React from 'react';
import Carousel from '../components/Carousel';
import testimonials from '../data/testimonials.json';

const TestimonialPage = () => {
  const carouselItems = testimonials.map(item => ({
    ...item,
    icon: <span className="h-4 w-4 text-white">★</span>,
  }));

  return (
    <div id="testimonials" className="bg-black text-white min-h-screen flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-5xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Client Testimonials
        </h2>
        <p className="text-gray-300 text-center mb-10 text-base md:text-lg">
          What our clients say about us
        </p>

        <div className="w-full flex justify-center">
          <div className="w-full sm:max-w-md md:max-w-2xl">
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
    </div>
  );
};

export default TestimonialPage;
