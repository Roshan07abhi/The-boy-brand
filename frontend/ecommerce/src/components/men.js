import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FaHeart } from "react-icons/fa";
import { PiShareNetworkThin } from "react-icons/pi";
import { PiEyeDuotone } from "react-icons/pi";
import "../components/men.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';


// ProductCard component with its own liked state
function ProductCard({ product, onModalChange }) {
  const [liked, setLiked] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const thumbnails = [product.image, product.image, product.image];
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  // Add useEffect to handle body class
  React.useEffect(() => {
    if (showModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showModal]);

  const handleModalToggle = (show) => {
    setShowModal(show);
    onModalChange(show);
  };

  return (
    <>
      <div className="men-card">
        <div className="men-image-container">
          <img src={product.image} alt={product.name} />
          <FaHeart
            className={`heart-icon${liked ? ' liked' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
          />
          
          <div 
            className="quick-view" 
            onClick={(e) => {
              e.stopPropagation();
              handleModalToggle(true);
            }}
          >
            <span><PiEyeDuotone className="quick-view-icon" /></span>
            <span>Quick View</span>
          </div>
        </div>
        <div className="product-info">
          <div className="product-colours">
            <span className="first-circle"></span>
            <span className="first-box"></span>
            <span className="second-box"></span>
          </div>
          <h3>{product.name}</h3>
          <div className="product-pricing">
            <span className="product-price">{product.price}</span>
            <span className="product-OG">{product.OG}</span>
            <span className="product-discount">{product.Discount}</span>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="product-modal-container">
          <div className="product-modal">
            <button className="close-modal" onClick={() => handleModalToggle(false)}>×</button>
            <div className="modal-content">
              <div className="modal-left">
                <img src={product.image} alt={product.name} className="modal-image" />
                <FaHeart
                className={`heart-icon1${liked ? ' liked' : ''}`}
                onClick={() => setLiked(!liked)}
                />
                <PiShareNetworkThin className="share-icon" />
                <div className="thumbnail-gallery">
                  <button 
                    className="scroll-btn up" 
                    onClick={() => setSelectedThumbnail(prev => Math.max(0, prev - 1))}
                  >
                    <FontAwesomeIcon icon={faChevronUp} />
                  </button>
                  <div className="thumbnails-container">
                    {thumbnails.map((thumb, index) => (
                      <img
                        key={index}
                        src={thumb}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className={`thumbnail ${selectedThumbnail === index ? 'active' : ''}`}
                        onClick={() => setSelectedThumbnail(index)}
                      />
                    ))}
                  </div>
                  <button 
                    className="scroll-btn down"
                    onClick={() => setSelectedThumbnail(prev => Math.min(thumbnails.length - 1, prev + 1))}
                  >
                    <FontAwesomeIcon icon={faChevronDown} />
                  </button>
                </div>
              </div>
              
              <div className="modal-right">
                <h2 className="product-name">{product.name}</h2>
                <p className="category-detail">Category Detail</p>
                <p className="sku">SKU#: {product.sku}</p>
                
                <div className="available-colors">
                  <h4>Available Colors</h4>
                  <div className="color-options">
                      <div className="color-options">
                        <div className="color-item">
                        <span 
                        className={`color-circle ${selectedColor === 'red' ? 'selected' : ''}`}
                        style={{
                        backgroundColor: 'rgba(235, 235, 235, 1)',
                        border: selectedColor === 'red' ? '2px solid red' : '1px solid #ddd'
                        }}
                        onClick={() => setSelectedColor('red')}
                        ></span>
                        <span className="color-label">Red</span>
                        </div>
                        <div className="color-item">
                        <span 
                          className={`color-circle ${selectedColor === 'blue' ? 'selected' : ''}`}
                          style={{
                            backgroundColor: 'rgba(235, 235, 235, 1)',
                            border: selectedColor === 'blue' ? '2px solid blue' : '1px solid #ddd'
                          }}
                          onClick={() => setSelectedColor('blue')}
                        ></span>
                        <span className="color-label">Blue</span>
                        </div>
                        <div className="color-item">
                        <span 
                          className={`color-circle ${selectedColor === 'black' ? 'selected' : ''}`}
                          style={{
                            backgroundColor: 'rgba(235, 235, 235, 1)',
                            border: selectedColor === 'black' ? '2px solid black' : '1px solid #ddd'
                          }}
                          onClick={() => setSelectedColor('black')}
                        ></span>
                        <span className="color-label">Black</span>
                      </div>
                </div>
                </div>
                </div>
                <div className="available-sizes">
                  <h4>Available Sizes</h4>
                  <div className="size-options">
                      <div className="size-options">
                        <div className="size-item">
                          <span 
                            className={`size-circle ${selectedSize === 'S' ? 'selected' : ''}`}
                            onClick={() => setSelectedSize('S')}
                          >S</span>
                        </div>
                          <div className="size-item">
                            <span 
                              className={`size-circle ${selectedSize === 'L' ? 'selected' : ''}`}
                              onClick={() => setSelectedSize('L')}
                            >L</span>
                          </div>
                        <div className="size-item">
                          <span 
                            className={`size-circle ${selectedSize === 'XL' ? 'selected' : ''}`}
                            onClick={() => setSelectedSize('XL')}
                          >XL</span>
                        </div>
                      </div>  
                   </div>
                </div>
                <div className="price-section">
                  <span className="modal-price">{product.price}</span>
                  <span className="modal" style={{ fontSize: '15px', marginRight: '5px' }}>MRP</span>
                  <span className="modal-mrp">{product.OG}</span>
                  <span className="modal-discount">{product.Discount}</span>
                </div>

                <button className="add-to-bag">ADD TO BAG</button>
                <Link to={`/product/${product.id}`}>
                  <button className="more-details">MORE DETAILS</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Main Men component
function Men() {
  const [products, setProducts] = useState([]);
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(5000);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFiltersCollapsed, setIsFiltersCollapsed] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/products/men")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handlePriceChange = (start, end) => {
    // Ensure start price doesn't exceed end price
    if (start > end) {
      start = end;
    }
    // Ensure end price doesn't go below start price
    if (end < start) {
      end = start;
    }
    setStartPrice(start);
    setEndPrice(end);
  };

  const handleClearAll = () => {
    setStartPrice(0);
    setEndPrice(5000);
  };

  const handleModalOpen = (isOpen) => {
    setIsModalOpen(isOpen);
    const container = document.querySelector('.men-container');
    if (isOpen) {
      container.classList.add('modal-open');
    } else {
      container.classList.remove('modal-open');
    }
  };

  return (
    <div>
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="separator">/</span>
        <span className="current">Men's wear</span>
      </div>

      <div className={`men-container${isModalOpen ? ' modal-open' : ''}`}>
        <div className="filters-section">
          <div 
            className="filters-header" 
            onClick={() => setIsFiltersCollapsed(!isFiltersCollapsed)}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h3>FILTERS</h3>
              <span style={{ marginLeft: '10px', transition: 'transform 0.3s' }}>
                {isFiltersCollapsed ? '' : ''}
              </span>
            </div>
            <button 
              className="clear-all" 
              onClick={(e) => {
                e.stopPropagation();
                handleClearAll();
              }}
            >
              Clear All
            </button>
          </div>
          
          <div className={`filters-content ${isFiltersCollapsed ? 'collapsed' : ''}`}>
            <div className="price-filter">
              <h4>Price</h4>
              <div className="price-range-slider">
                <div className="multi-range">
                  <div className="slider-track"></div>
                  <input 
                    type="range"
                    min="0"
                    max="5000"
                    value={startPrice}
                    onChange={(e) => handlePriceChange(Number(e.target.value), endPrice)}
                    className="slider slider-min"
                  />
                  <input 
                    type="range"
                    min="0"
                    max="5000"
                    value={endPrice}
                    onChange={(e) => handlePriceChange(startPrice, Number(e.target.value))}
                    className="slider slider-max"
                  />
                </div>
                <div className="price-range-inputs">
                  <div className="price-input-group">
                    <input 
                      type="number" 
                      value={startPrice || ''}
                      onChange={(e) => handlePriceChange(Number(e.target.value), endPrice)}
                      placeholder="Min"
                    />
                    <div className="price-controls">
                      <button onClick={() => handlePriceChange(startPrice + 100, endPrice)}>▲</button>
                      <button onClick={() => handlePriceChange(Math.max(0, startPrice - 100), endPrice)}>▼</button>
                    </div>
                  </div>
                  <div className="price-input-group">
                    <input 
                      type="number" 
                      value={endPrice || ''}
                      onChange={(e) => handlePriceChange(startPrice, Number(e.target.value))}
                      placeholder="Max"
                    />
                    <div className="price-controls">
                      <button onClick={() => handlePriceChange(startPrice, Math.min(50000, endPrice + 100))}>▲</button>
                      <button onClick={() => handlePriceChange(startPrice, Math.max(startPrice, endPrice - 100))}>▼</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="category-filter">
              <h4>Categories</h4>
              <label><input type="checkbox" /> T-Shirts</label>
              <label><input type="checkbox" /> Shirts</label>
              <label><input type="checkbox" /> Pants</label>
            </div>

            <div className="color-filter">
              <h4>Colors</h4>
              <label><input type="checkbox" /> <span className="color-circle1"></span> Red</label>
              <label><input type="checkbox" /> <span className="color-circle1"></span> Blue</label>
              <label><input type="checkbox" /> <span className="color-circle1"></span> Black</label>
              <label><input type="checkbox" /> <span className="color-circle1"></span> Red</label>
              <label><input type="checkbox" /> <span className="color-circle1"></span> Blue</label>
              <span className="view-more">View More</span>
            </div>

            <div className="size-filter">
              <h4>Size</h4>
              <label><input type="checkbox" /> S</label>
              <label><input type="checkbox" /> L</label>
              <label><input type="checkbox" /> XL</label>
            </div>
          </div>
        </div>

       <div className="men-section">
          <div className="men-header">
            <div className="header-left">
              <div className="section-header">MEN'S WEAR</div>
              <span className="title-under">_____</span>
            </div>
            <div className="sort-container">
              <select className="sort-select">
                <option><b>Sort</b></option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
          </div>
          </div>
          <div className="men-grid">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
                onModalChange={handleModalOpen}
              />
            ))}
          </div>
        </div>
        </div>
      <Footer />
    </div>

  );
}

export default Men;