import React from "react";
import "./Footer.css";
import {  Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" footer ">
      <div className="view bg-[#7a0424]  py-3  rounded-tr-3xl rounded-tl-3xl lg:hidden">
        <div className="flex  border-b p-4 text-sm  ">
          <ul className="w-full px-8 text-[#ffffff60] ">
            <li>
              {" "}
              <i className="text-white text-md">
                <a href="#">Home</a>
              </i>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sermons</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Charity</a>
            </li>
          </ul>

          <ul className=" text-[#ffffff60]  w-full">
            <li>
              <i className="text-white text-md">Contact</i>
            </li>
            <li>Call: 116A 65X69 432C</li>
            <li>Francc. Yucalpetem Merida</li>
            <li>Yucatan Mexico</li>
          </ul>
        </div>

        <p className="foot text-center text-sm py-3 text-[#ffffff60] ">
          {" "}
          Copyright: @{new Date().getFullYear()}{" "}
          <b className="text-black">BOJ Ministries</b> All rights reserved
        </p>
      </div>

      <div className="desktop-view sm:hidden  rounded-tr-3xl rounded-tl-3xl  bg-[#7a0424]  md:hidden ">
        <div className="motherComponent text-[#ffffff90] flex py-12 text-sm justify-between">
          <div className="uno px-20 w-full">
            <h3 className="text-md py-4 text-white">Thanks</h3>
            <p>
              The Blood of Christ is precious because it is Christ's own great
              ransom paid for the <b className="text-black">redemption</b> of mankind. In thi
            </p>
          </div>

          <div className="dos px-8 grid w-full ">
            <h3 className="text-white py-4">Home</h3>
            <a href="#about">About</a>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact"><b><h2 >Contact</h2></b></NavLink>
            
            {/* <Navlink to="/services">Services</Navlink> */}
            {/* <a href="#service"> Services</a> */}
            {/* <a href="#">Contact</a> */}
            <a href="#">Charity</a>
          </div>

          <div className="trois grid w-full">
            <h3 className="text-white py-4">About</h3>
            <a href="#">Schedule</a>
            <a href="#">Ministry</a>
            <a href="#">History</a>
            <a href="#">Belief</a>
            <a href="#">Staff</a>
            <a href="#">Missions</a>
          </div>
          <div className="quatro  w-full">
            <h3 className="text-white py-4">Contact</h3>
            <ul>
              <li>Call: 73290920</li>
              <li>France, Yucalpetem</li>
              <li>Yucatam, Mexico</li>
            </ul>
          </div>
          
        
        </div>
        <div className="border-t">
      <p className="text-center py-4 text-sm text-[#ffffff90]">
               <i>Copyright: @{new Date().getFullYear()} <b className="text-black">BOJ Ministries</b> All rights reserved</i>
              </p>
      </div>
        
      </div>
     
      
    </div>
  );
};
export default Footer;
