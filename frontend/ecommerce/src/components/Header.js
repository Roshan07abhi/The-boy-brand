// Header.js
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "/Users/abist/Downloads/work1/frontend/ecommerce/src/static/logo.png";
import { CiHeart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Update user whenever route changes
    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));
    else setUser(null);
  }, [location]);

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
        {user ? (
          <div className="icon-wrapper" title={user.name}>
            <Link to="/profile">
              <FaUserCircle />
            </Link>
          </div>
        ) : (
          <div className="login">
            <Link to="/login">Sign In</Link>
            <span> / </span>
            <Link to="/login">Sign Up</Link>  
          </div>
        )}
        <div className="icon-wrapper1">
          <Link to="/wishlist">
            <CiHeart />
          </Link>   
        </div>
        <div className="icon-wrapper2">
          <Link to="/cart">
            <BsBag />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
