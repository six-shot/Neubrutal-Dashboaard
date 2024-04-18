import Image from "next/image";
import man from "@/public/man1.png";
import React from "react";

function Messages() {
  return (
    <div>
      <div className="px-[4%] mt-[]">
        <h5 className="font-clash_semibold text-2xl">Messages</h5>
        <div className="px-[18%] mt-[2%]">
          <div className="bg-[#FFF1B7] flex  rounded-[32px] p-[5px]">
            <button className="bg-white border border-black w-full py-[12px] rounded-[32px] text-xs font-clash_semibold  text-[#0F0F0F]">
              <h5>Chats</h5>
            </button>
            <button className="  w-full py-[12px] rounded-[32px] text-xs font-clash_semibold  text-[#0F0F0F]">
              <h5>Groups</h5>
            </button>
          </div>
        </div>
        <div className="mt-[6%] flex flex-col gap-0">
          <div className="w-full  p-4 rounded-[12px] flex items-center gap-3">
            <div className="w-[40px] h-[40px]  rounded-full">
              <Image src={man} className="rounded-full" alt="man" />
            </div>
            <div className="w-full">
              <div className="flex justify-between w-full items-center ">
                <h6 className="text-sm font-clash_semibold leading-[12px] ">
                  Charlie Sheen
                </h6>
                <h6 className="text-[10px] text-[#575757] font-clash_regular">
                  12:45 PM
                </h6>
              </div>
              <div className="flex justify-between w-full items-center ">
                <p className="text-[#575757] text-xs font-clash_regular ">
                  Let&apos;s connect for a quick discussion...
                </p>
                <p className="text-[10px] font-clash_medium bg-blue-700 w-[18px] h-[18px] flex justify-center items-center rounded-full text-white">
                  2
                </p>
              </div>
            </div>
          </div>
          <div className="w-full  p-4 rounded-[12px] flex items-center gap-3">
            <div className="w-[40px] h-[40px]  rounded-full">
              <Image src={man} className="rounded-full" alt="man" />
            </div>
            <div className="w-full">
              <div className="flex justify-between w-full items-center ">
                <h6 className="text-sm font-clash_semibold leading-[12px] ">
                  Charlie Sheen
                </h6>
                <h6 className="text-[10px] text-[#575757] font-clash_regular">
                  12:45 PM
                </h6>
              </div>
              <div className="flex justify-between w-full items-center ">
                <p className="text-[#575757] text-xs font-clash_regular ">
                  Let&apos;s connect for a quick discussion...
                </p>
                <p className="text-[10px] font-clash_medium bg-blue-700 w-[18px] h-[18px] flex justify-center items-center rounded-full text-white">
                  2
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-4 rounded-[12px] flex items-center gap-3">
            <div className="w-[40px] h-[40px]  rounded-full">
              <Image src={man} className="rounded-full" alt="man" />
            </div>
            <div className="w-full">
              <div className="flex justify-between w-full items-center ">
                <h6 className="text-sm font-clash_semibold leading-[12px] ">
                  Charlie Sheen
                </h6>
                <h6 className="text-[10px] text-[#575757] font-clash_regular">
                  12:45 PM
                </h6>
              </div>
              <div className="flex justify-between w-full items-center ">
                <p className="text-[#575757] text-xs font-clash_regular ">
                  Let&apos;s connect for a quick discussion...
                </p>
                <p className="text-[10px] font-clash_medium bg-blue-700 w-[18px] h-[18px] flex justify-center items-center rounded-full text-white">
                  2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
