import React from "react";
import {
  FaFacebook,
  
  FaInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-t from-[#fff1eb] to-[#ace0f985]">
      <h2 className="mt-10 text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold text-3xl">
       
       🚀 HERO.IO
      </h2>
      <div className="flex justify-between  py-4 w-11/12 mx-auto">
        <div>
          <h2 className="text-gray-600 font-bold  lg:text-2xl">Company</h2>
          <p className="mt-1">About us</p>
          <p>Contact</p>
          <p>Advertisement</p>
        </div>

        <div>
          <h2 className="text-gray-600 font-bold lg:text-2xl text-center">
            Social
          </h2>
          <p className="flex justify-between md:text-4xl space-x-4 text-2xl md:space-x-8 mt-3">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaSquareXTwitter />
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-gray-600 font-bold lg:text-2xl">Legal</h2>
          <p className="mt-1">Terms of use</p>
          <p>Privacy policy</p>
          <p>Cookie policy</p>
        </div>
      </div>
      <hr className="text-gray-300" />
      <p className="text-center mb-8">Copyright © 2025 - All right reserved</p>
    </div>
  );
};

export default Footer;
