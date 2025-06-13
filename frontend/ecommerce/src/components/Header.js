// Header.js
import React from "react";
import { useLocation } from "react-router-dom";
import logo from "/Users/abist/Downloads/work1/frontend/ecommerce/src/static/logo.png";
import { CiHeart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="left-section">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
        <nav className="nav-links">
          <Link 
            to="/men" 
            style={{ 
              color: location.pathname === '/men' ? '#ff0000' : 'inherit',
            }}
          >
            Men
          </Link>
          <Link 
            to="/women" 
            style={{ 
              color: location.pathname === '/women' ? '#ff0000' : 'inherit',
            }}
          >
            Women
          </Link>
        </nav>
      </div>
      <div className="search-section">
        <i className="search-icon"><CiSearch /></i>
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="right-section">
        <div className="icon-wrapper">
          <span className="icon">Profile</span>
          <FaUserCircle />
        </div>
        <div className="icon-wrapper">
          <span className="icon">Whishlist</span>
          <CiHeart />
        </div>
        <div className="icon-wrapper">
          <span className="icon">Bag</span>
          <BsBag />
        </div>
      </div>
    </header>
  );
}

export default Header;
