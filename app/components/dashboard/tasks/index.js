import React from "react";

export default function Task() {
  return (
    <div className="w-[130%]  bg-white border border-black rounded-[24px] p-4">
      <h5 className="font-clash_medium text-[24px]">Today&apos;s tasks</h5>
      <div className="flex justify-between items-center py-[21px] border-b-[1px] border-black">
        <div className="flex items-start gap-[10px]">
          <div className="w-[53px] h-[53px] border border-black rounded-full flex justify-center items-center"></div>
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
          <div className="w-[53px] h-[53px] border border-black rounded-full flex justify-center items-center"></div>
          <div>
            <h5 className="font-clash_medium text-[19px] text-[#b3b3b3]">
              Create Sprint Backlog
            </h5>
            <h6 className="text-[#575757] font-clash_medium text-base">
              1:00 PM - 2:00 PM
            </h6>
          </div>
        </div>
        <div className="w-[21px] h-[21px] rounded-full border border-black bg-[#EB7B26]"></div>
      </div>{" "}
      <div className="flex justify-between items-center py-[21px] border-b-[1px] border-black">
        <div className="flex items-start gap-[10px]">
          <div className="w-[53px] h-[53px] border border-black rounded-full flex justify-center items-center"></div>
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
    </div>
  );
}
