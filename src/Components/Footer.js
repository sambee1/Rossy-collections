import React from "react";
import logo from "./Images/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="flex flex-col md:flex-row footer-first">
            <div className="md:basis-1/5 mb-2">
              <img src={logo} alt="logo" />
            </div>
            <div className="subscribe  md:basis-2/5">
              <div className="subscribe-title">
                Subscribe to our Newsletter
                <p className="subscribe-info">
                  Get all the latest information, Sales and Offers.
                </p>
              </div>
            </div>
            <div className="newsletter-form-head  md:basis-2/5">
              <form
                action="#"
                method="get"
                target="_blank"
                className="newsletter-form flex"
              >
                <input
                  name="EMAIL"
                  placeholder="Email address here..."
                  type="email"
                  className="newsletter-input"
                />
                <div className="button">
                  <button className="subscribe-btn">
                    Subscribe<span className="dir-part"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col md:flex-row footer-second">
            <div className="shop-categories hidden md:block basis-1/3">
              <h3 className="shop-categories-title">Shop Categories</h3>

              <p>Men's Clothing</p>
              <p>Women's Clothing</p>
              <p>Facials</p>
              <p>Skincare</p>
              <p>Wigs</p>
              <p>Groceries</p>
            </div>

            <div className="shop-categories basis-1/3">
              <h3 className="shop-categories-title">Information</h3>

              <p>About Us</p>
              <p>Contact Us</p>
              <p>Downloads</p>
              <p>FAQs Page</p>
            </div>
            <div className="shop-categories basis-1/3 contact ">
              <h3 className="shop-categories-title ">Get In Touch With Us</h3>
              <div class="phone">Phone: +1 (900) 33 169 7720</div>
              <div>
                <span>Monday-Friday: </span> 9.00 am - 8.00 pm
              </div>
              <div>
                <span>Saturday: </span> 10.00 am - 6.00 pm
              </div>
              <div>nnajisamuel5@gmail.com</div>
            </div>
          </div>
          <div className="footer-third flex flex-col md:flex-row">
            <p className="basis-1/3">Designed and developed by Bee Tech</p>
            <p className="basis-1/3">Copyright Reserved © 2022</p>
            <div className="flex">
              Follow Us On:
              <div className="socials flex">
                <div className=" ">
                  <BsFacebook />
                </div>
                <div className="">
                  <BsTwitter />
                </div>
                <div className=" ">
                  <BsInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
