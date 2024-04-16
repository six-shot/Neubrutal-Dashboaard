import Image from "next/image";
import React from "react";
import arrowdown from "@/public/arrow-down.png"
import Calendar from "../calendar";
import bottom from "@/public/chart.png"

export default function ProjectMap() {
  return (
    <div>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h5 className="font-clash_semibold text-lg mt-3 mb-2">
            Project Roadmap
          </h5>
          <div className="flex gap-[14px]">
            <button className="bg-[#FFF1B7] px-[16px] py-[12px] rounded-[32px] text-xs font-clash_regular flex items-center gap-[6px] text-[#0F0F0F]">
              <h5>Project Plant Pals</h5>
              <Image src={arrowdown} alt="arrow-down" />
            </button>
            <div className="bg-[#FFF1B7] rounded-[32px] p-[2px]">
              <button className="bg-white border border-black px-[16px] py-[12px] rounded-[32px] text-xs font-clash_regular  text-[#0F0F0F]">
                <h5>Timeline</h5>
              </button>
              <button className="  px-[16px] py-[12px] rounded-[32px] text-xs font-clash_regular  text-[#0F0F0F]">
                <h5>Board</h5>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[20px]">
          {" "}
          <Image src={bottom} alt="bottom" />
        </div>
      </div>
    </div>
  );
}
