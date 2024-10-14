import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              At ShopVerse, we bring you a wide range of quality products at affordable prices. Our mission is to provide a seamless shopping experience, with a focus on customer satisfaction.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-2">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/shop" className="text-light">Shop</Link></li>
              <li><Link to="/about" className="text-light">About Us</Link></li>
              <li><Link to="/contact" className="text-light">Contact</Link></li>
              <li><Link to="/faq" className="text-light">FAQs</Link></li>
              <li><Link to="/terms" className="text-light">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="fa fa-map-marker"></i> 123 E-commerce St, City, Country</li>
              <li><i className="fa fa-phone"></i> +123 456 7890</li>
              <li><i className="fa fa-envelope"></i> support@yourecommerce.com</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://facebook.com" className="text-light mx-2">
                <i className="fa fa-facebook fa-2x"></i>
              </a>
              <a href="https://instagram.com" className="text-light mx-2">
                <i className="fa fa-instagram fa-2x"></i>
              </a>
              <a href="https://twitter.com" className="text-light mx-2">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
              <a href="https://linkedin.com" className="text-light mx-2">
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
            </div>
            <p className="mb-3 mb-md-0">Made by
              <a  href="https://github.com/Rupa7417" className="text-decoration-underline text-light mx-2" target="_blank" rel="noreferrer">Rupa sree</a>
            <a className="text-light mx-2" href="https://github.com/Rupa7417" target="_blank" rel="noreferrer" >
              <i className="fa fa-github fa-2x"></i>
            </a>
            </p>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} ShopVerse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

