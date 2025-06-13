import React, { useState } from "react";
import banner from "/Users/abist/Downloads/work1/frontend/ecommerce/src/static/banner.png"; // Update path as needed

const slides = [
  { id: 1 },
  { id: 2},
  { id: 3 },
  // Add more slides as needed
];

function BannerWithNavigation() {
  const [current, setCurrent] = useState(0);

  const goPrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const goNext = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
  };

  return (
    <div>
      {/* Banner Image */}
      <div className="banner-container">
        <img src={banner} alt="Banner" className="banner-image" />
      </div>
      
      {/* Navigation Bar */}
      <div className="banner-navigation-bar">
        <button
          onClick={goPrev}
          disabled={current === 0}
          className="banner-nav-btn"
          aria-label="Previous"
        >
          &#60;
        </button>
        <div className="banner-dots">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`banner-dot${idx === current ? " active" : ""}`}
            />
          ))}
        </div>
        <button
          onClick={goNext}
          disabled={current === slides.length - 1}
          className="banner-nav-btn"
          aria-label="Next"
        >
          &#62;
        </button>
      </div>
    </div>
  );
}

export default BannerWithNavigation;
