import React from "react";

export default function page() {
  return (
    <div>
      <div className="px-[4%] w-full h-screen flex justify-between flex-col">
        <div className="w-full bg-[#FFF1B7] h-[30vh] rounded-[32px] flex flex-col gap-3 justify-center items-center">
          <h5 className="font-clash_semibold text-lg">Create your cool</h5>
          <button className="w-[60%] h-[55px] bg-[#FFF] rounded-[120px] shadow-[0px_4px_0_0_#000000] text-black font-clash_semibold text-[40px]">
            habbits
          </button>
        </div>
        <div className="flex flex-col gap-4 px-[3%]">
          <button className="w-full bg-black text-white font-clash_medium h-[50px] rounded-[32px]">
            Log In
          </button>
          <button className="w-full bg-transparent text-black font-clash_medium h-[50px] rounded-[32px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
