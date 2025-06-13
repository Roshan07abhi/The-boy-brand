// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";  // Add Link import
import Footer from "../components/Footer";
import { FaHeart } from "react-icons/fa";
import "./Product.css";
import { PiShareNetworkThin } from "react-icons/pi";


function Product() {  // Changed from Women to Product
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error:", error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          <span>Home</span>
        </Link> /{' '}
        <Link to="/men" className="breadcrumb-link">
          <span>Men's Wear</span>
        </Link> /{' '}
        <span style={{ color: '#000' }}>{product.name}</span>
    </div>
    <div className="product-container">
      <div className="product-details">
        <div className="product-images">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        <div className="product-info1">
            <div className="productheader">
            <div className="Title">
                <h1 className="product-name">{product.name}</h1>
            <div className="shareicon">
                <span>Share</span>
                <PiShareNetworkThin className="Shareicon"  />
            </div>
            </div>
                <p className="category-detail">Category Detail</p>
                <p className="sku">SKU#: {product.sku}</p>
            </div>
            <div className="available-color">
                <h4>Available Colors</h4>
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

          <div className="available-size">
            <h4>Available Sizes</h4>
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

          <div className="price-section">
            <div class="Current" style={{ marginBottom: '10px' }}>
            <span className="current-price">{product.price}</span>
            </div>
            <span className="mrp-label">MRP </span>
            <span className="product-OG">{product.OG}</span>
            <span className="product-discount">{product.Discount}</span>
            </div>

             <div className="action-buttons">
            <button className="add-to-bag1">ADD TO BAG</button>
            <div className="wishlist-container">
                <span className="wishlist-icon"><FaHeart /></span>
                <span className="wishlist-text">WISHLIST</span>
            </div>
          </div>
          <hr className="section-divider" />
          <div className="product-description">
            <h4>Product Details</h4>
            <p>
                Product Description
            </p>
          </div>
        </div>
      </div>
    </div>
        <Footer />
    </div>
  );
}

export default Product;