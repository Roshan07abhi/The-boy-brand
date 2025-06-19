// ProductSection.js
import React from "react";
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
              <li key={type} className={idx === 0 ? "bold-category" : ""}>
                {type}
              </li>
            ))}
          </ul>
        </aside>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
      <span className="view-all">View All</span>
    </section>
  );
}

export default ProductSection;
