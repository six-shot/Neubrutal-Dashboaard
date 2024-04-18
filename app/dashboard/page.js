import add from "@/public/folder-add.png";
import calendar from "@/public/calendar.png";
import calendarshadow from "@/public/calendarshadow.png";
import timershadow from "@/public/timershadow.png";
import doneshadow from "@/public/doneshadow.png";
import timer from "@/public/timer.png";
import done from "@/public/done.png";
import Image from "next/image";
import man from "@/public/man1.png";
import man2 from "@/public/man2.png";
import man3 from "@/public/man3.png";
import man4 from "@/public/man4.png";
import man5 from "@/public/man5.png";
import ProjectMap from "../components/dashboard/projectroadmap";
import Task from "../components/dashboard/tasks";

const Overview = () => {
  return (
    <div className="px-[4%]   sm:pt-8 pt-[6vh]">
      <div className="w-full sm:flex hidden justify-between items-center">
        <div>
          <h4 className="font-clash_semibold text-[32px]">Overview</h4>
          <h6 className="text-sm text-[#575757] font-clash_regular">
            Have a bird&apos;s eye view of all your projects
          </h6>
        </div>
        <button className="px-6 py-3 flex items-center gap-3 font-sm text-black font-clash_semibold bg-[#EB7B26] rounded-[32px] border-[2px] border-black">
          <Image src={add} alt="add" />
          <h6>Add New Project</h6>
        </button>
      </div>
      <div className="sm:grid sm:grid-cols-12   gap-[24px] mt-8">
        <div className="col-span-9 w-full">
          <div className="flex sm:flex-row flex-col gap-6">
            <div className="w-full">
              <div className="relative border border-black rounded-[24px] overflow-hidden">
                <div className="">
                  <div className="bg-[#FC95B4] w-full p-4  rounded-[24px]">
                    <div className="bg-[#FF7CA4] w-[32px] h-[32px] rounded-[8px] flex justify-center items-center ">
                      <Image src={calendar} alt="calendar" />
                    </div>
                    <h5 className="font-clash_medium text-lg mt-3 ">
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
                    <h5 className="font-clash_medium text-lg mt-3 ">
                      In-Progress Tasks
                    </h5>
                    <h4 className="font-clash_semibold text-[40px]">24</h4>
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
                      <Image src={done} alt="done" />
                    </div>
                    <h5 className="font-clash_medium text-lg mt-3 ">
                      Completed Tasks
                    </h5>
                    <h4 className="font-clash_semibold text-[40px]">75</h4>
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
          <ProjectMap />
        </div>
        <div className="col-span-3  w-full">
          <div className="w-full sm:block hidden bg-white border border-black rounded-[24px] p-4">
            <div className="flex justify-between items-center">
              <h5 className="font-clash_medium text-lg ">Recent Messages</h5>
              <h6 className="text-sm font-clash_medium text-[#EB7B26]">
                View all
              </h6>
            </div>
            <div className="flex flex-col">
              <div className="flex py-[16px] gap-2 border-b-[1px] border-black">
                <div className="w-[40px] h-[40px]  rounded-full">
                  <Image src={man} className="rounded-full" alt="man" />
                </div>
                <div className="">
                  <div className="flex justify-between items-start">
                    <h6 className="text-sm font-clash_medium ">
                      Charlie Sheen
                    </h6>
                    <h6 className="text-[10px] text-[#575757] font-clash_regular">
                      12:45 PM
                    </h6>
                  </div>

                  <p className="text-[#575757] text-xs font-clash_regular ">
                    Let&apos;s connect for a quick discussion...
                  </p>
                </div>
              </div>
              <div className="flex py-[16px] gap-2 border-b-[1px] border-black">
                <div className="w-[40px] h-[40px]  rounded-full">
                  <Image src={man2} className="rounded-full" alt="man" />
                </div>
                <div className="">
                  <div className="flex justify-between items-start">
                    <h6 className="text-sm font-clash_medium ">
                      Charlie Sheen
                    </h6>
                    <h6 className="text-[10px] text-[#575757] font-clash_regular">
                      12:45 PM
                    </h6>
                  </div>
                  <p className="text-[#575757] text-xs font-clash_regular">
                    Let&apos;s connect for a quick discussion...
                  </p>
                </div>
              </div>
              <div className="flex py-[16px] gap-2 border-b-[1px] border-black">
                <div className="w-[40px] h-[40px]  rounded-full">
                  <Image src={man3} className="rounded-full" alt="man" />
                </div>
                <div className="">
                  <div className="flex justify-between items-start">
                    <h6 className="text-sm font-clash_medium ">
                      Charlie Sheen
                    </h6>
                    <h6 className="text-[10px] text-[#575757] font-clash_regular">
                      12:45 PM
                    </h6>
                  </div>
                  <p className="text-[#575757] text-xs font-clash_regular">
                    Let&apos;s connect for a quick discussion...
                  </p>
                </div>
              </div>
              <div className="flex py-[16px] gap-2 border-b-[1px] border-black">
                <div className="w-[40px] h-[40px]  rounded-full">
                  <Image src={man4} className="rounded-full" alt="man" />
                </div>
                <div className="">
                  <div className="flex justify-between items-start">
                    <h6 className="text-sm font-clash_medium ">
                      Charlie Sheen
                    </h6>
                    <h6 className="text-[10px] text-[#575757] font-clash_regular">
                      12:45 PM
                    </h6>
                  </div>
                  <p className="text-[#575757] text-xs font-clash_regular">
                    Let&apos;s connect for a quick discussion...
                  </p>
                </div>
              </div>
              <div className="flex pt-[18px] gap-2 ">
                <div className="w-[40px] h-[40px]  rounded-full">
                  <Image src={man5} className="rounded-full" alt="man" />
                </div>
                <div className="">
                  <div className="flex justify-between items-start">
                    <h6 className="text-sm font-clash_medium ">
                      Charlie Sheen
                    </h6>
                    <h6 className="text-[10px] text-[#575757] font-clash_regular">
                      12:45 PM
                    </h6>
                  </div>
                  <p className="text-[#575757] text-xs font-clash_regular">
                    Let&apos;s connect for a quick discussion...
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[24px]">
            <Task />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
