// ProductSection.js
import React, { useRef, useEffect, useState } from "react";
import menImg from "../static/polo.png";
import womenImg from "../static/saree.png";
import { FaHeart } from "react-icons/fa";
import { PiEyeDuotone } from "react-icons/pi";

// Helper to get type from product
function getType(wear) {
  return wear;
}

// ProductCard component with its own liked state
function ProductCard({ product }) {
  const [liked, setLiked] = React.useState(false);

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.category === "men" ? menImg : womenImg}
          alt={product.name}
          className="product-image"
        />
        <FaHeart
          className={`heart-icon${liked ? ' liked' : ''}`}
          onClick={() => setLiked(!liked)}
        />
        <span className="quickview"><PiEyeDuotone /> Quick view</span>
      </div>
      <div className="product-info">
        <div className="product-colours">
          <span className="first-circle"></span>
          <span className="first-box"></span>
          <span className="second-box"></span>
        </div>
        <div className="product-name">{product.name}</div>
        <div className="product-pricing">
          <span className="product-price">{product.price}</span>
          <span className="product-OG">{product.OG}</span>
          <span className="product-discount">{product.Discount}</span>
        </div>
      </div>
    </div>
  );
}

// Main ProductSection component
function ProductSection({ title, products }) {
  const types = Array.from(new Set(products.map((p) => getType(p.wear))));
  const [selectedType, setSelectedType] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const gridRef = useRef(null);

  // Determine products to show
  const displayedProducts = showAll ? products : products.slice(0, 3);

  useEffect(() => {
    if (gridRef.current) {
      setMaxHeight(showAll ? `${gridRef.current.scrollHeight}px` : `${gridRef.current.scrollHeight}px`);
      // Force reflow for transition
      setTimeout(() => {
        setMaxHeight(showAll ? `${gridRef.current.scrollHeight}px` : `${gridRef.current.firstChild?.offsetHeight * 3 || 0}px`);
      }, 10);
    }
  }, [showAll, products]);

  return (
    <section className="product-section">
      <div className="section-title sticky-header">
        <div className="section-header">{title}</div>
        <span className="title-under">_____</span>
      </div>
      <div className="product-layout">
        <aside className="sidebar">
          <ul className="category-list">
            {types.map((type, idx) => (
              <li 
                key={type}
                onClick={() => setSelectedType(type)}
                style={{ 
                  fontWeight: selectedType === type ? 'bold' : 'normal',
                  cursor: 'pointer'
                }}
              >
                {type}
              </li>
            ))}
          </ul>
        </aside>
        <div
          className="product-grid transition-grid"
          ref={gridRef}
          style={{
            maxHeight: maxHeight,
            overflow: 'hidden',
            transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s',
            opacity: showAll ? 1 : 0.95,
          }}
        >
          {displayedProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <span
        className="view-all"
        style={{ cursor: 'pointer' }}
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? 'Show Less' : 'View All'}
      </span>
    </section>
  );
}

export default ProductSection;
