import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Jane Smith',
    role: 'Freelance Designer',
    image: '/images/Testi1.png',
    text: `I've been using Indicaa's services for over a year now and I'm constantly impressed with their reliability and quick communication. Truly professional!`,
    stars: 5,
  },
  {
    name: 'Ravi Kapoor',
    role: 'Import Manager, SteelCo India',
    image: '/images/Testi1.png',
    text: `Consistently high-quality shipments. Indicaa has become our most trusted partner in the global scrap trade.`,
    stars: 4,
  },
  {
    name: 'Emily Chen',
    role: 'Logistics Coordinator',
    image: '/images/Testi1.png',
    text: `They understand the complexities of port logistics better than anyone we've worked with. Always on time.`,
    stars: 5,
  },
  {
    name: 'Ahmed Al-Farsi',
    role: 'Trader, Middle East',
    image: '/images/Testi1.png',
    text: `Responsive, ethical, efficient. Indicaa is setting new benchmarks in this industry.`,
    stars: 5,
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Handle responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('testimonials');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = testimonials.length - slidesPerView;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [slidesPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = testimonials.length - slidesPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = testimonials.length - slidesPerView;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const maxIndex = testimonials.length - slidesPerView;

  return (
    <section
      id="testimonials"
      className="relative w-full text-white py-12 px-4 md:px-6 overflow-hidden"
      style={{
        backgroundImage: `url('/images/TestiBG.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Section Title */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-8">
        <h2 
          className={`text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Trusted by Clients Worldwide
        </h2>
        <div 
          className={`w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        ></div>
      </div>

      {/* Testimonials Slider */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
            }}
          >
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / slidesPerView}%` }}
              >
                <div 
                  className={`bg-white/10 border border-white/20 backdrop-blur-lg rounded-lg p-6 text-white text-center h-full shadow-xl transition-all duration-700 hover:bg-white/15 hover:border-white/30 hover:transform hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Quote */}
                  <div className="mb-4">
                    <p className="text-gray-100 leading-relaxed text-xs md:text-sm italic">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center mb-4 space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < testimonial.stars
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-400'
                        } transition-colors duration-300`}
                      />
                    ))}
                  </div>

                  {/* Profile */}
                  <div className="mt-auto">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover mx-auto mb-2 border border-white/30"
                    />
                    <h4 className="text-sm font-semibold text-white mb-1">
                        {testimonial.name}
                    </h4>
                    <span className="text-xs text-gray-300">
                        {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 z-10"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 z-10"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-4 h-4 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                idx === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;