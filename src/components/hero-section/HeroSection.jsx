import React from "react";
import "./HeroSection.css";
import casque from "../../assets/casque.svg";
import cat from "../../assets/cat.svg";
import catp from "../../assets/catp.svg";
import { Navbar } from "../navbar/Navbar";

const HeroSection = () => {
  return (

    <div>
      <Navbar/>
      <div className="mobile-view primo  relative lg:hidden">
        <p className="mb-64 ">
          
            “But He was wounded for our transgressions, He was bruised for our
            iniquities; the chastisement for our peace was upon Him, and by His
            stripes we are healed”;
          
          <br />
          <i>Isaiah 53:5</i>
        </p>
        <div className="absolute bottom-0 w-full">
        <div className="flex items-center w-full">
          <div className="w-full py-8 px-8 sermons w-217  h-219 bg-[#7a0424] flex flex-col items-center justify-center rounded-[2.1rem]">
            <h3 className="w-full border-b  pb-2 text-center ">
              <b className="var(textcol) ">Sermons</b>
            </h3>
            <div className="w-full border-b elt  var(textcol) flex justify-between">
              <ul className="" >
                <li>Revelations chapter 3</li><li>  
              <b>16.02.20</b> <i>Chapel Obili</i> </li>
              </ul>
              <img src={casque} alt="" width={20} height={20} />
            </div>
            <div className="w-full border-b elt  var(textcol) flex justify-between ">
              <ul>
                <li>Revelations chapter 3</li>
                <li><b>16.02.20</b> <i>Chapel Obili</i> </li>
              </ul>
              <img src={casque} alt="" width={20} height={20} />
            </div>
            <div className="w-full border-b elt  var(textcol) flex justify-between">
              <ul >
                <li>Revelations chapter 3</li>
                <li><b>16.02.20</b> <i>Chapel Obili</i> </li>
              </ul>
              <img src={casque} alt="" width={20} height={20} />
            </div>
          </div>
          <div className=" elt  p-4 w-full   flex-col flex justify-center prayer text-center bg-[#7a0424] rounded-tr-3xl rounded-br-3xl">
            <h3 className="py-2">
              <b>Prayer, Mass and Adoration</b>
            </h3>
               
            <ul className="pb-2">
              <li>Every Thursdays</li>
              <li>&</li>
              <li>Last Firdays of the month</li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      <div className="desktop-view  h:screen sm:hidden md:hidden ">
        <div className="flex justify-between justify-center">
        <div className="text-center  py-32 px-32 " >
            <p  className="text-center  text-lg font-bold italic ">
            “But He was wounded for our transgressions, He was bruised for our
            iniquities; the chastisement for our peace was upon Him, and by His
            stripes we are healed”;
            </p>
            <img src="." alt="" />
        </div>
        <div className="py-8  px-32"><img src={cat} width={500} height={672} alt="" /></div>

        </div>

        <div className="absolute bottom-0 py-32 w-full ">
        <div className="flex items-center  w-full absolute  ">
          <div className="w-full py-6 px-40   sermons bg-[#7a0424] flex flex-col items-center justify-center rounded-[0.1rem] rounded-tr-3xl">
            <h3 className="w-full border-b  text-center pb-4">
              <b className="var(textcol) ">Sermons</b>
            </h3>
            <div className="w-full border-b elt var(textcol) flex justify-between gap-4 py-4">
              <ul >
                <li>Revelations chapter 3</li>
                <li ><b>16.02.20</b> <i>Chapel Obili</i> </li>
              </ul>
              <img src={casque} alt="" width={20} height={20} />
            </div>
            <div className="w-full border-b elt var(textcol) flex justify-between gap-4 py-4">
              <ul>
                <li>Revelations chapter 3</li>
                <li><b>16.02.20</b> <i>Chapel Obili</i> </li>
              </ul>
              <img src={casque} alt="" width={20} height={20} />
            </div>
            <div className="w-full border-b elt var(textcol) flex justify-between gap-4 py-4">
              <ul >
                <li>Revelations chapter 3</li>
                <li><b>16.02.20</b> <i>Chapel Obili</i> </li>
              </ul>
              <img src={casque} alt="" width={20} height={20} />
            </div>
          </div>
          <div className="w-full py-14 elt   flex-col flex prayer text-left bg-[#7a0424] rounded-tr-3xl rounded-[0.1rem]  ">
            <h3>
              <b>Prayer, Mass and Adoration</b>
            </h3>
                <br />
            <ul>
              <li>Every Thursdays</li>
              <li>&</li>
              <li>Last Firdays of the month</li>
            </ul>
          </div>
          <br />
        </div>
       
        
            
        </div>
      
     
      </div>
    
      
      
      
      
    </div>
  );
};
export default HeroSection;
