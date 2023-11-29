import React from "react";
import "./Services.css";
import main from "../../assets/main.svg";
import library from "../../assets/library.svg"
import schedule from "../../assets/schedule.svg"
import mission from "../../assets/mission.svg"
import history from "../../assets/history.svg"
import staff from "../../assets/staff.svg"
import users from "../../assets/users.svg";

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
        className=" desktop-view sm:hidden md:hidden  flex   p-4"
      >
        <div className="Buttons py-3 px-8  justify-between grid   w-full">
          <button className=" bg-[#7a0424] rounded-xl flex py-2 px-4 text-white ">
            {" "}
            <img src={users} width={35} height={30} alt="" /> Team
          </button>
          <br />

          <button className=" bg-[#7a0424] rounded-xl flex py-2 text-white px-4  ">
            {" "}
            <img src={users} width={35} height={38} alt="" /> Team
          </button>
          <br />
          <button className=" bg-[#7a0424] rounded-xl flex py-2 text-white px-4  ">
            {" "}
            <img src={users} width={35} height={38} alt="" /> Team
          </button>
          <br />
          <button className=" bg-[#7a0424] rounded-xl flex py-2 text-white px-4  ">
            {" "}
            <img src={users} width={35} height={38} alt="" /> Team
          </button>
          <br />
          <button className=" bg-[#7a0424] rounded-xl flex py-2 text-white px-4  ">
            {" "}
            <img src={users} width={35} height={38} alt="" /> Team
          </button>
          <br />
          <button className=" bg-[#7a0424] rounded-xl flex py-2 text-white px-4  ">
            <img src={users} width={35} height={38} alt="" />
            Team
          </button>
        </div>
        <div className=" py-4 text w-full">
          <p className="text-md text">
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
        <div className="pic px-28 py-4 w-full">
          <img src="src\assets\chalice.png" alt="akl" />
        </div>
      </div>
    </div>
  );
};

export default Services;
