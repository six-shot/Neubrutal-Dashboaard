import Link from "next/link";
import React from "react";
import { LuSearch } from "react-icons/lu";
import { MdHeadset } from "react-icons/md";
import { CgMenuGridO } from "react-icons/cg";
export default function Navbar() {
  return (
    <div className="">
      <div className="sm:h-[10vh] h-[9vh] pl-[3%]  border-b-[2px] border-black  relative   flex justify-between  ">
        <div className="max-w-[1440px] mx-auto w-full h-full">
          <div className="flex justify-between  items-center  w-full h-full">
            <div className="flex h-full  items-center">
              <div className="relative flex items-center pr-6">
                <h5 className="text-xl font-clash_bold">Tasker</h5>
              </div>
              <nav className="sm:flex hidden text-sm font-clash_semibold border-l-[2px] px-6 border-black h-full ">
                <ul className="flex gap-8 items-center">
                  <li>Products </li>
                  <li>Solutions</li>
                  <li>Enterprise </li>
                  <li>Resources</li>
                  <li>Pricing</li>
                </ul>
              </nav>
            </div>
            <div className="h-full flex items-center  ">
              <div className="border-r-[2px] border-l-[2px] h-full px-6 flex items-center border-black">
                <LuSearch />
              </div>
              <button className="text-black px-6 font-clash_medium text-sm h-full flex items-center gap-1 ">
                <MdHeadset />
                Talk To Sales
              </button>
              <button className="text-white px-6 font-clash_medium text-sm h-full bg-black">
                Login/Signup
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="px-[3%] sm:h-[10vh] h-[9vh]  border-b-[2px] border-black  relative   flex justify-between items-center ">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="flex justify-between items-center  w-full">
            {" "}
            <div className="relative nav h-[10vh] flex items-center">
              <h5 className="text-xl font-clash_bold">Tasker</h5>
            </div>
            <nav className="sm:flex hidden text-sm font-clash_semibold">
              <ul className="flex gap-8 items-center">
                <li>Product </li>
                <li>Task </li>
                <li>Price </li>
                <li>About </li>
              </ul>
            </nav>
            <div className="flex flex-row items-center gap-4">
              <Link href="/authentication/welcome">
                <button className="px-6 py-2 flex items-center gap-3 text-sm text-black font-clash_semibold bg-[#FFCE3D] rounded-[32px] border-[2px] border-black">
                  <h6>Get Started</h6>
                </button>
              </Link>

              <CgMenuGridO className="text-black text-[26px] sm:hidden flex " />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
