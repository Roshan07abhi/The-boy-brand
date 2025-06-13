import React from "react";
import logo from "/Users/abist/Downloads/work1/frontend/ecommerce/src/static/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Social Links */}
        <div className="footer-section brand-section">
          <img src={logo} alt="The Boy Brand" className="footer-logo" />
          <div className="footer-brand-name">The Boy Brand</div>
          <div className="footer-social">
            <span className="footer-social-title">find us online</span>
            <div className="footer-social-icons">
              <a
                href="###"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF size={22} color="#4267B2" />
              </a>
              <a
                href="###"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram size={22} color="#C13584" />
              </a>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="footer-section">
          <div className="footer-section-title">Policies</div>
          <ul className="footer-links">
            <li>
              <a href="###">Terms of service</a>
            </li>
            <li>
              <a href="###">Privacy Policy</a>
            </li>
            <li>
              <a href="###">Refund Policy</a>
            </li>
            <li>
              <a href="###">Shipping Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="footer-section">
          <div className="footer-section-title">Contact Us</div>
          <div className="footer-contact">
            <div>Phone: 044-000000000</div>
            <div>Email: email@gmail.com</div>
            <div>Address:</div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        © Copyright Whirldata. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
