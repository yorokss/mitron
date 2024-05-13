
import React from 'react'
import { RiFacebookFill,RiTwitterFill,RiYoutubeFill,RiInstagramFill } from "@remixicon/react";
const Footer = () => {
  return (
    <>
      <div className="h-[50vh] bg-gray-200 flex justify-around pt-[5vh] px-5">
        <div className="cs">
          <h1>Customer Service</h1>
          <ul>
            <li>Login</li>
            <li>Track your Order</li>
            <li>Return/Exchange</li>
            <li>Frequently Asked Question</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>In Press</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="contactUs w-[20vw]">
          <ul>
            <li>Contact Us</li>
            <li>
              Bacca Bucci Fashions Pvt. Ltd. G-152, Old No 87/88, Village
              Gazipur, Near MCD School, Delhi-110096
            </li>
            <li>crm@baccabucci.com</li>
            <li>Tel. +91 82-877-31376</li>
            <li>Hours: Mon to Sat from 10 AM to 6 PM</li>
          </ul>
        </div>
        <div className="collection">
          <ul>
            <li>Collection Links</li>
            <li>Men Sneaker</li>
            <li>Men Sports Shoes</li>
            <li>Men Boots</li>
            <li>Hiking & Trekking </li>
            <li>Men Casual Shoes </li>
            <li>Basket Ball Shoes </li>
            <li>Cricket Shoes </li>
          </ul>
        </div>
        <div className="policy">
          <ul>
            <li>Our Policies</li>
            <li>Return & Exchange</li>
            <li>Shipping & Delivery </li>
            <li>FAQ</li>
            <li>Terms of service</li>
            <li>Privacy Policy</li>
            <li>Disclaimer Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div className="social">
          <h1>Follow US</h1>
          <div className="handler flex h-[8vh] w-[16vw] justify-between">
            <div className="social w-[3.7vw] flex items-center justify-center">
              <RiFacebookFill />
            </div>
            <div className="social w-[3.7vw] flex items-center justify-center">
              <RiYoutubeFill />
            </div>
            <div className="social w-[3.7vw] flex items-center justify-center">
                <RiInstagramFill/>
            </div>
            <div className="social w-[3.7vw] flex items-center justify-center">
                <RiTwitterFill/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer