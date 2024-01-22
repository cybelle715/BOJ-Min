import React from "react";
import "./Services.css";
import main from "../../assets/main.svg";
import library from "../../assets/library.svg"
import schedule from "../../assets/schedule.svg"
import mission from "../../assets/mission.svg"
import history from "../../assets/history.svg"
import staff from "../../assets/staff.svg"
import logo from "../../assets/logo.svg"
import users from "../../assets/users.svg";
import { Navbar3 } from "../navbar3/Navbar3";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <div>
      
        <div className="mobile-view ecran flex gap-2 py-16 px-6  lg:hidden ">
        
            <div className="w-full text-sm text-center">
                <p><i>
                The Blood of Christ is precious because it is Christ's
                 own great ransom paid for the redemption of mankind.
                  In this belief, as there was to be no remission of sin
                   without the shedding of blood, the "Incarnate Word" not
                    only offered his life for the salvation of the world, but
                     he offered to give up his life by a bloody death, and to
                      hang bloodless, soulless and dead upon the Cross for the 
                      salvation of humanity. Jesus is said to have given his 
                      life - his blood - for the sake of all humanity, atoning
                       for every form of human sin
                </i></p>
               
               
            </div>
            <div className="grid grid-cols-2 gap-8 w-full text-sm  ">
                <button className="button  flex relative rounded-2xl justify-center items-center py-5 text-white"><img src={users} alt="" width={50} height={50}/><span className="absolute">Team</span></button>
                <button className="button  flex relative rounded-2xl justify-center items-center py-5 text-white"><img src={users} alt="" width={50} height={50} /><span className="absolute">Team</span></button>
                <button className="button  flex relative rounded-2xl justify-center items-center py-5 text-white"><img src={users} alt="" width={50} height={50} /><span className="absolute">Team</span></button>
                <button className="button flex relative rounded-2xl justify-center items-center py-5 text-white"><img src={users} alt="" width={50} height={50} /><span className="absolute">Team</span></button>
                <button className="button flex relative rounded-2xl justify-center items-center py-5 text-white"><img src={users} alt="" width={50} height={50} /><span className="absolute">Team</span></button>
                <button className="button flex relative rounded-2xl justify-center items-center py-5 text-white"><img src={users} alt="" width={50} height={50} /><span className="absolute">Team</span></button>
                
            </div>
            <br />
        </div>


      <div
        id="service"
        className=" desktop-view sm:hidden md:hidden flex"
      >

        <div className="premier w-10/12 py-4 flex flex-col h-screen">
          <div className="flex gap-96 px-24">
          <NavLink to="/" >
          <h1>
            <img src={logo} alt="" width={120} height={90} className="mb-4" />
          </h1>
        </NavLink>
        <div className="flex justify-between text-[#7a0434] text-lg gap-28 items-center">
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
              <h2 className="text-[#7a0424]"> Services</h2>
            </b>
          </NavLink>
          </div>
          </div>
          <div className="mt-8 flex">
          <div className="Buttons py- px-12 my-2  justify-between grid   w-full">
          <button className=" bg-[#7a0424] rounded-xl  flex py-4 px-12 text-white 12 ">
            {" "}
            <img src={users} width={30} height={30} alt="" /> Team
          </button>
          <br />

          <button className=" bg-[#7a0424] rounded-xl flex py-4 text-white px-12  ">
            {" "}
            <img src={users} width={30} height={30} alt="" /> Team
          </button>
          <br />
          <button className=" bg-[#7a0424] rounded-xl flex py-4 text-white px-12  ">
            {" "}
            <img src={users} width={30} height={38} alt="" /> Sacrement
          </button>
          <br />
          <button className=" bg-[#7a0424] rounded-xl flex py-4 text-white px-12  ">
            {" "}
            <img src={users} width={30} height={38} alt="" /> Mission
          </button>
          <br />
          <button className=" bg-[#7a0424] rounded-xl flex py-4 text-white px-12  ">
            {" "}
            <img src={users} width={30} height={38} alt="" /> Team
          </button>
          <br />
          <button className=" bg-[#7a0424] rounded-xl flex py-4 text-white px-12  ">
            <img src={users} width={30} height={38} alt="" />
            Team
          </button>
        </div>
        <div className="py-8 ">
        <p className="text-xl px-60 text">
            {" "}
            <i>
              The Blood of Christ is precious because it is Christ's own great
              ransom paid for the redemption of mankind. In this belief, as
              there was to be no remission of sin without the shedding of blood,
              the "Incarnate Word" not only offered his life for the salvation
              of the world, but he offered to give up his life by a bloody
              death, and to hang bloodless, soulless and dead upon the Cross for
              the salvation of humanity. Jesus is said to have given his life -
              his blood - for the sake of all humanity, atoning for every form
              of human sin
            </i>
          </p>
        </div>
          </div>
         

        </div>
        <div className="deuxieme w-3/12 h-screen px-4 py-8 bg-[#7a0424]">
        <div className="flex gap-24  ">
            <NavLink to="/contact ">
              <b>
                <h2 className="text-white">Contact</h2>
              </b>
            </NavLink>

            <a href="#">
              <b>
                <h2 className="text-white">Charity</h2>
              </b>
            </a>
          </div>
          <div className="pic  h:screen items-center justify-center px-20 py-4 w-full">
          <img className="" src="src\assets\chalice.png" alt="akl" />
        </div> 
        </div>
        {/* <div className="Buttons py-4 px-8 my-4  justify-between grid   w-full">
          <button className=" bg-[#7a0424] rounded-xl flex py-4 px-12 text-white 12 ">
            {" "}
            <img src={users} width={35} height={30} alt="" /> Team
          </button>
          <br />

          <button className=" bg-[#7a0424] rounded-xl flex py-4 text-white px-12  ">
            {" "}
            <img src={users} width={35} height={38} alt="" /> Team
          </button>
          <br />
          <button className=" bg-[#7a0424] rounded-xl flex py-4 text-white px-12  ">
            {" "}
            <img src={users} width={35} height={38} alt="" /> Team
          </button>
          <br />
          <button className=" bg-[#7a0424] rounded-xl flex py-4 text-white px-12  ">
            {" "}
            <img src={users} width={35} height={38} alt="" /> Team
          </button>
          <br />
          <button className=" bg-[#7a0424] rounded-xl flex py-4 text-white px-12  ">
            {" "}
            <img src={users} width={35} height={38} alt="" /> Team
          </button>
          <br />
          <button className=" bg-[#7a0424] rounded-xl flex py-4 text-white px-12  ">
            <img src={users} width={35} height={38} alt="" />
            Team
          </button>
        </div>
        <div className=" py-4 text ">
          <p className="text-xl  text">
            {" "}
            <i>
              The Blood of Christ is precious because it is Christ's own great
              ransom paid for the redemption of mankind. In this belief, as
              there was to be no remission of sin without the shedding of blood,
              the "Incarnate Word" not only offered his life for the salvation
              of the world, but he offered to give up his life by a bloody
              death, and to hang bloodless, soulless and dead upon the Cross for
              the salvation of humanity. Jesus is said to have given his life -
              his blood - for the sake of all humanity, atoning for every form
              of human sin
            </i>
          </p>
        </div>
        <div className="pic bg-[#7a0424] h-screen px-20 py-4 w-full">
          <img src="src\assets\chalice.png" alt="akl" />
        </div> */}
      </div>
    </div>
  );
};

export default Services;
