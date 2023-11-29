import React, { useState } from "react";

import "./Footer.css";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
   return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>
              Thanks
            </h4>
            <p>
            The Blood of Christ is precious because it is Christ's own great ransom paid for the <b>redemption</b> of mankind. In thi
            </p>
          </div>
          <div className="sb__footer-links-div">
            <h4>
              Home
            </h4>
            <a href="./About">About</a>
            <a href="./Semons"> Semons</a>
            <a href="Contacts">Contact</a>
            <a href="Charity">Charity</a>
          </div>
          <div className="sb__footer-links-div">
            <h4>About</h4>
            <a href="About">Schedule</a>
            <a href="About">Ministry</a>
            <a href="About">History</a>
            <a href="About">Belief</a>
            <a href="About">Staff</a>
            <a href="About">Missions</a>
          </div>
          <div className="sb__footer-links-div">
            <ul>
              <li>Call: 73290920</li>
              <li>France, Yucalpetem</li>
              <li>Yucatam, Mexico</li>
            </ul>
          </div>
          <br />
          <br />
          
         
          
          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p>
               Copyright: @{new Date().getFullYear()} <b>BOJ Ministries</b> All rights reserved
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  )
};

