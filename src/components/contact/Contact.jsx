import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="mobil lg:hidden  items-center justify-center py-12 px-4 bg-[#7a0424] ">
        <div className=" formul  rounder-3xl  bg-white w-2/3 h-2/3 mx-16 justify-center my-4">
          <h1 className="text-lg rounder-3xl font-bold text-center text-[#7a0424]">
            Hi, please leave us your<h1 className="text-black">message</h1>{" "}
          </h1>

          <form onsubmit="event.preventDefault()">
            <div class="relative mb-6 border-b" data-te-input-wrapper-init>
              <input
                type="text"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                placeholder="Email address"
              />
              <label
                for="exampleFormControlInput2"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                <b className="text-[#7a0424]">name</b>
              </label>
            </div>
            <div class="relative mb-6 border-b" data-te-input-wrapper-init>
              <input
                type="email"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                placeholder="Email address"
              />
              <label
                for="exampleFormControlInput2"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                <b className="text-[#7a0424]">email addres</b>
              </label>
            </div>
            <div class="relative mb-6 border-b" data-te-input-wrapper-init>
              <textarea
                type="text"
                class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                placeholder="Email address"
              />
              <label
                for="exampleFormControlInput2"
                class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                <b className="text-[#7a0424]">Your message</b>
              </label>
            </div>
            <div className="flex items-center justify-center ">
              <button class="relative  inline-flex items-center justify-center  p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-[#7a0424] from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative w- text-lg px-16 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Send
                </span>
              </button>
            </div>
          </form>
        </div>
        
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



      <div className="flex destop-view sm:hidden md:hidden">
        <div class="w-7/12 bg-[#7a0424] relative flex py-8 h-screen">
          <div class="p-4 absolute h-4/5 w-2/3 -translate-y-1/2 top-1/2 transform right-0 text-black bg-white h-1/3">
            <h1 className="text-lg font-bold text-center text-[#7a0424]">
              Hi, please leave us your<h1 className="text-black">message</h1>{" "}
            </h1>

            <form onsubmit="event.preventDefault()">
              <div class="relative mb-6 border-b" data-te-input-wrapper-init>
                <input
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
                <label
                  for="exampleFormControlInput2"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  <b className="text-[#7a0424]">name</b>
                </label>
              </div>
              <div class="relative mb-6 border-b" data-te-input-wrapper-init>
                <input
                  type="email"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
                <label
                  for="exampleFormControlInput2"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  <b className="text-[#7a0424]">email addres</b>
                </label>
              </div>
              <div class="relative mb-6 border-b" data-te-input-wrapper-init>
                <textarea
                  type="text"
                  class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
                <label
                  for="exampleFormControlInput2"
                  class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  <b className="text-[#7a0424]">Your message</b>
                </label>
              </div>
              <div className="flex items-center justify-center ">
                <button class="relative  inline-flex items-center justify-center  p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-[#7a0424] from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span class="relative w-64 text-lg px-16 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Send
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="w-5/12 relative bg-white h-screen">
          <div class="  text-white grid absolute h-4/5 w-2/3 -translate-y-1/2 top-1/2 bg-blue bg-[#7a0424] left-0 transform h-1/3 p-12 justify-between">
            <p className="p-4 m-2">
              <h2 className="text-black">Email</h2>
              keffehcollins@gmail.com
            </p>
            <p className="p-4 m-2">
              <h2 className="text-black">Phone</h2>
              +52 999 332 4565
            </p>
            <p className="p-4 m-2">
              <h2 className="text-black">Contact</h2>
              <ul>
                <li>Call: 116A 65X69 432C</li>
                <li>France: Yucalpetem Merida</li>
                <li>Yucatan Mexico</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
