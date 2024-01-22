import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import home from "../../assets/home.svg";
import about from "../../assets/about.svg";
import contact from "../../assets/contact.svg";
import sermons from "../../assets/sermons.svg";
import charity from "../../assets/charity.svg";
import catp from "../../assets/catp.svg";
import logo2 from "../../assets/logo2.png"
 
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar3 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNav = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="me relative">
      {/* desktop */}
      <nav class="flex">
  <div class="w-7/12 flex py-4 justify-between px-12 bg-[#7a0424]">
    
  <NavLink to="/">
          <h1>
            <img src={logo2} alt="" width={120} height={90} />
          </h1>
        </NavLink>
        <div className="flex justify-between text-white text-lg gap-24  items-center">
          <NavLink to="/">
            <b>
              <h2 className="text-white">Home</h2>
            </b>
          </NavLink>
          <a href="#about">
            <b>
              <h2 className="text-white">About</h2>
            </b>
          </a>
          </div>
     </div>
  <div class="w-5/12 justify-center gap-24 items-center flex py-4 ">
  <NavLink to="/services">
            <b>
              <h2> Services</h2>
            </b>
          </NavLink>
          
            <NavLink to="/contact ">
              <b>
                <h2>Contact</h2>
              </b>
            </NavLink>
            

            <a href="#">
              <b>
                <h2>Charity</h2>
              </b>
            </a>

  </div>
</nav>
      {/* <div className="hidden lg:flex flex-row w-full justify-between px-24 items-center py-4">
        <NavLink to="/">
          <h1>
            <img src={logo} alt="" width={120} height={90} />
          </h1>
        </NavLink>
        <div className="flex justify-between text-lg gap-32  items-center">
          <NavLink to="/">
            <b>
              <h2>Home</h2>
            </b>
          </NavLink>
          <a href="#about">
            <b>
              <h2>About</h2>
            </b>
          </a>
          <NavLink to="/services">
            <b>
              <h2> Services</h2>
            </b>
          </NavLink>
          <div className="flex gap-16  ">
            <NavLink to="/contact ">
              <b>
                <h2>Contact</h2>
              </b>
            </NavLink>
            

            <a href="#">
              <b>
                <h2>Charity</h2>
              </b>
            </a>
          </div>
        </div>
      </div> */}
      <div>
        <div className="flex justify-between px-8 py-4 shadow lg:hidden">
          <h1>
            {" "}
            <img src={logo} alt="" width={120} height={90} />
          </h1>
          <button
            className="w-10 h-10 flex flex-col items-center justify-center gap-y-1"
            onClick={toggleNav}
          >
            <span className="bg-[#7a0424] w-full py-1 rounded-2xl"></span>
            <span className="bg-[#7a0424] w-full py-1 rounded-2xl"></span>
            <span className="bg-[#7a0424] w-full py-1 rounded-2xl"></span>
          </button>
        </div>
        {menuOpen && (
          <div className="flex mt-3 flex-col items-end justify-center absolute top-0 mt-24 z-[1000] w-full lg:hidden">
            <ol className="p-8 w-[18rem] shadow-2xl rounded-tl-xl bg-white">
              <li>
                <a href="#" className="flex justify-between py-4">
                  <img src={home} alt="" width={25} height={23} className="" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-between py-4">
                  <img src={about} alt="" width={24} height={24} />
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-between py-4">
                  <img src={contact} alt="" width={24} height={23} />
                  <span>Contacts</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-between py-4">
                  <img src={sermons} alt="" width={24} height={24} />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex justify-between py-4">
                  <img src={charity} alt="" width={24} height={24} />
                  <span>Charity</span>
                </a>
              </li>
            </ol>
            <hr />
            <div className="w-[18rem] shadow-2xl bg-white flex justify-center items-center rounded-bl-xl bg-white">
              <img src={catp} alt="" width={90} height={90} className="" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
