import React from "react";
import "./MainSection.css";
import main from "../../assets/main.svg";
import library from "../../assets/library.svg"
import schedule from "../../assets/schedule.svg"
import mission from "../../assets/mission.svg"
import history from "../../assets/history.svg"
import staff from "../../assets/staff.svg"

const MainSection = () => {
    return(
        <div id="about">
        <div className="pb-24 mobile-view lg:hidden" >
        <div className="flex gap-2 py-16 px-6">
            <div className="bg-styles">
            </div>
            <div className="w-full text-sm text-center">
                <p><i>
                The Blood of Christ is precious because it is Christ's
                 own great ransom paid for the redemption of mankind. 
                 In this belief, as there was to be no remission of sin
                  without the shedding of blood, the "Incarnate Word" not
                   only offered his life for the salvation of the world ...
                </i></p>
                <button className="bg-[#7a0424] py-3 px-6 rounded-3xl text-white mt-4"> Read More</button>
            </div>
        </div>
            <div className="grid grid-cols-2 gap-8 text-sm px-4">
                <button className="button flex relative rounded-2xl justify-center items-center py-5 text-white"><img src={library} alt="" width={50} height={50}/><span className="absolute">MINISTRY</span></button>
                <button className="button flex relative rounded-2xl justify-center items-center py-5 text-white"><img src={history} alt="" width={50} height={50} /><span className="absolute">HISTORY</span></button>
                <button className="button flex relative rounded-2xl justify-center items-center py-5 text-white"><img src={mission} alt="" width={50} height={50} /><span className="absolute">MISSION</span></button>
                <button className="button flex relative rounded-2xl justify-center items-center py-5 text-white"><img src={schedule} alt="" width={50} height={50} /><span className="absolute">SCHEDULE</span></button>
                <button className="button flex relative rounded-2xl justify-center items-center py-5 text-white"><img src={schedule} alt="" width={50} height={50} /><span className="absolute">MINISTRY</span></button>
                <button className="button flex relative rounded-2xl justify-center items-center py-5 text-white"><img src={staff} alt="" width={50} height={50} /><span className="absolute">STAFF</span></button>
                
            </div>

        </div>
        <div className="desktop-view sm:hidden md:hidden ">
           
        <div className="first flex px-12 py-8">
            <div className="">
                <img src={main} alt="" />
            </div>
            <div className="w-full px-12 text-right italic">
                <p>
                    <h1 className="font-bold text-[#7A0424] size-3xl">About</h1> <br />
                    The Blood of Christ is precious because it is Christ's
                     own great ransom paid for the redemption of mankind. 
                     In this belief, as there was to be no remission of sin 
                     without the shedding of blood, the "Incarnate Word" not 
                     only offered his life for the salvation of the world, 
                     but he offered to give up his life by a bloody death, 
                     and to hang bloodless, soulless and dead upon the Cross 
                     for the salvation of humanity. Jesus is said to have given
                      his life - his blood - for the sake of all humanity, atoning
                       for every form of human sin
                </p>
            </div>
           </div>

            <div className="second grid grid-cols-3 gap-9 text-sm  px-28">
            <button className="button flex rounded-3xl relative justify-center items-center py-6 text-white"><img src={library} alt="" width={70} height={70}/><span className="absolute">MINISTRY</span></button>
                <button className="button rounded-3xl flex relative justify-center items-center py-6 text-white"><img src={history} alt="" width={70} height={70} /><span className="absolute">HISTORY</span></button>
                <button className="button rounded-3xl flex relative justify-center items-center py-6 text-white"><img src={mission} alt="" width={70} height={70} /><span className="absolute">MISSION</span></button>
                <button className="button rounded-3xl flex relative justify-center items-center py-6 text-white"><img src={schedule} alt="" width={70} height={70} /><span className="absolute">SCHEDULE</span></button>
                <button className="button rounded-3xl flex relative justify-center items-center py-6 text-white"><img src={schedule} alt="" width={70} height={70} /><span className="absolute">MINISTRY</span></button>
                <button className="button rounded-3xl flex relative justify-center items-center py-6 text-white"><img src={staff} alt="" width={70} height={70} /><span className="absolute">STAFF</span></button>
                
            </div>
            <br />
            <br />
            <br />
            <br />

           </div>
           
        </div>
        // </div>
    );}

export default MainSection;