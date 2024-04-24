"use client";
import React from "react";
import { IconContext } from "react-icons";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

export default function page() {
  return (
    <div>
      {" "}
      <div className="px-[4%] py-[5%] w-full h-screen flex  flex-col">
        <div className="w-full bg-[#0BC56D] h-[30vh] rounded-[32px] flex flex-col gap-5 justify-center items-center">
          <h5 className="font-clash_semibold text-[40px]">Log In</h5>
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <div className="flex gap-3 items-center">
              <div className="w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center">
                <FaGoogle />
              </div>
              <div className="w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center">
                <FaTwitter />
              </div>
              <div className="w-[40px] h-[40px] bg-black rounded-full flex justify-center items-center">
                <TbBrandGithubFilled />
              </div>
            </div>
          </IconContext.Provider>
        </div>
        <h6 className="text-xs text-center my-4 font-clash_medium text-gray-400">
          Or
        </h6>
        <form>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col ">
              <label
                for="name"
                className="font-clash_medium text-sm px-3 text-gray-400"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className=" mt-[2%] bg-transparent px-3 text-sm w-full h-[50px] outline-none font-clash_medium"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col ">
              <label
                for="name"
                className="font-clash_medium text-sm px-3 text-gray-400"
              >
                Password:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className=" mt-[2%] bg-transparent text-sm px-3 w-full h-[50px] outline-none font-clash_medium"
                placeholder="Enter your password"
              />
            </div>
            <input className="bg-black w-full h-[50px] text-white font-clash_medium rounded-[20px]" type="submit" value="Log In"/>
          </div>
        </form>
      </div>
    </div>
  );
}
