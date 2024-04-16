import add from "@/public/folder-add.png";
import calendar from "@/public/calendar.png";
import calendarshadow from "@/public/calendarshadow.png";
import timershadow from "@/public/timershadow.png";
import doneshadow from "@/public/doneshadow.png";
import timer from "@/public/timer.png";
import Image from "next/image";

const Overview = () => {
  return (
    <div className="px-[5%] pt-8">
      <div className="w-full flex justify-between items-center">
        <div>
          <h4 className="font-clash_semibold text-[32px]">Overview</h4>
          <h6 className="text-sm text-[#575757] font-clash_regular">
            Have a bird's eye view of all your projects
          </h6>
        </div>
        <button className="px-6 py-3 flex items-center gap-3 font-sm text-black font-clash_semibold bg-[#EB7B26] rounded-[32px] border-[2px] border-black">
          <Image src={add} alt="add" />
          <h6>Add New Project</h6>
        </button>
      </div>
      <div className="grid grid-cols-12 items-center ">
        <div className="col-span-9 w-full">
          <div className="flex gap-6">
            <div className="w-full">
              <div className="relative border border-black rounded-[24px] overflow-hidden">
                <div className="">
                  <div className="bg-[#FC95B4] w-full p-4  rounded-[24px]">
                    <div className="bg-[#FF7CA4] w-[32px] h-[32px] rounded-[8px] flex justify-center items-center ">
                      <Image src={calendar} alt="calendar" />
                    </div>
                    <h5 className="font-clash_medium text-lg mt-3 mb-2">
                      Upcoming Tasks
                    </h5>
                    <h4 className="font-clash_semibold text-[40px]">40</h4>
                  </div>
                </div>
                <div className="absolute  bottom-0 right-0">
                  <Image src={calendarshadow} alt="calendarshow" />
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="relative border border-black rounded-[24px] overflow-hidden">
                <div className="">
                  <div className="bg-[#FFCE62] w-full p-4  rounded-[24px]">
                    <div className="bg-[#FFC23D] w-[32px] h-[32px] rounded-[8px] flex justify-center items-center ">
                      <Image src={timer} alt="timer" />
                    </div>
                    <h5 className="font-clash_medium text-lg mt-3 mb-2">
                      Upcoming Tasks
                    </h5>
                    <h4 className="font-clash_semibold text-[40px]">40</h4>
                  </div>
                </div>
                <div className="absolute bottom-0 right-[1px]">
                  <Image src={timershadow} alt="timershadow" />
                </div>
              </div>
            </div>
            <div className="w-full ">
              <div className="relative border border-black rounded-[24px] overflow-hidden">
                <div className="">
                  <div className=" bg-[#0BC56D] w-full p-4 rounded-[24px]">
                    <div className="bg-[#15B569] w-[32px] h-[32px] rounded-[8px] flex justify-center items-center ">
                      <Image src={calendar} alt="calendar" />
                    </div>
                    <h5 className="font-clash_medium text-lg mt-3 mb-2">
                      Upcoming Tasks
                    </h5>
                    <h4 className="font-clash_semibold text-[40px]">40</h4>
                  </div>
                </div>
                <div className="absolute   bottom-0 right-0 ">
                  <Image
                    src={doneshadow}
                    alt="doneshadow"
                    style={{ zIndex: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
