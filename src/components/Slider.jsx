import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3; // Cập nhật số lượng slide thực tế

  useEffect(() => {
    const sliderContainer = document.getElementById("sliderContainer");
    function updateSlider() {
      sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

      function nextSlide() {
        setCurrentIndex((currentIndex + 1) % totalSlides);
      }

    const slideInterval = setInterval(nextSlide, 3000);
    updateSlider();

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-[1200px] mx-auto mt-20 overflow-hidden rounded-lg">
      <div id="sliderContainer" className="flex w-full h-[120px] sm:h-[180px] md:h-[200px] lg:h-[190px] transition-transform duration-700 ease-in-out">
        <img src="/images/slider.png" className="w-full flex-shrink-0 object-cover h-full rounded-lg" alt="Slide 1" />
        <img src="/images/slider2.png" className="w-full flex-shrink-0 object-cover h-full rounded-lg" alt="Slide 2" />
        <img src="/images/slider3.png" className="w-full flex-shrink-0 object-cover h-full rounded-lg" alt="Slide 3" />
      </div>
      {/* <button id="prevBtn" onClick={() => setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides)}>Prev</button>
      <button id="nextBtn" onClick={() => setCurrentIndex((currentIndex + 1) % totalSlides)}>Next</button> */}
    </div>
  );
};

export default Slider;