import React from "react";
import check from "@/public/check.png"
import Image from "next/image";
import call from "@/public/call.png"
import document from "@/public/document.png"
export default function Task() {
  return (
    <div className="w-[130%]  bg-white border border-black rounded-[24px] p-4">
      <h5 className="font-clash_medium text-[24px]">Today&apos;s tasks</h5>
      <div className="flex justify-between items-center py-[21px] border-b-[1px] border-black">
        <div className="flex items-start gap-[10px]">
          <div className="w-[53px] h-[53px] border border-black rounded-full flex justify-center items-center">
            <Image src={call} alt="call" />
          </div>
          <div>
            <h5 className="font-clash_medium text-[19px]">
              Call with Backend team
            </h5>
            <h6 className="text-[#575757] font-clash_medium text-base">
              1:00 PM - 2:00 PM
            </h6>
          </div>
        </div>
        <div className="w-[21px] h-[21px] rounded-full border border-black"></div>
      </div>
      <div className="flex justify-between items-center py-[21px] border-b-[1px] border-black">
        <div className="flex items-start gap-[10px]">
          <div className="w-[53px] h-[53px] border border-[#b3b3b3] rounded-full flex justify-center items-center">
            <Image src={document} alt="call" />
          </div>
          <div>
            <h5 className="font-clash_medium text-[19px] text-[#b3b3b3] line-through">
              Create Sprint Backlog
            </h5>
            <h6 className="text-[#e0e0e0] font-clash_medium text-base">
              1:00 PM - 2:00 PM
            </h6>
          </div>
        </div>
        <div className="w-[21px] h-[21px] rounded-full border border-black bg-[#EB7B26] flex justify-center items-center">
          <Image src={check} alt="check" />
        </div>
      </div>
      <div className="flex justify-between items-center py-[21px] border-b-[1px] border-black">
        <div className="flex items-start gap-[10px]">
          <div className="w-[53px] h-[53px] border border-black rounded-full flex justify-center items-center">
            <Image src={call} alt="call" />
          </div>
          <div>
            <h5 className="font-clash_medium text-[19px]">
              Video Call with Ram
            </h5>
            <h6 className="text-[#575757] font-clash_medium text-base">
              1:00 PM - 2:00 PM
            </h6>
          </div>
        </div>
        <div className="w-[21px] h-[21px] rounded-full border border-black"></div>
      </div>
    </div>
  );
}
