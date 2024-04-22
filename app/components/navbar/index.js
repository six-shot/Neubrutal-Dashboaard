import React from "react";
import { CgMenuGridO } from "react-icons/cg";
export default function Navbar() {
  return (
    <div className="">
      <div className="xl:px-10 px-4 sm:h-[10vh] h-[9vh]  border-b-[2px] border-black  relative nav  flex justify-between items-center ">
        <div className="">
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
          <button className="px-6 py-2 flex items-center gap-3 text-sm text-black font-clash_semibold bg-[#FFCE3D] rounded-[32px] border-[2px] border-black">
            <h6>Get Started</h6>
          </button>
          <CgMenuGridO className="text-black text-[26px] sm:hidden flex " />
        </div>
      
      </div>
    </div>
  );
}
