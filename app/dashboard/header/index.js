"use client";
import React, { useState } from "react";
import {
  MdDashboard,
  MdStickyNote2,
  MdOutlineMessage,
  MdOutlineCalendarMonth,
  MdOutlineSettings,
} from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GoClock, GoPlus } from "react-icons/go";
import { CgLogOut } from "react-icons/cg";
import { RxUpdate } from "react-icons/rx";
import HeaderLink from "./headerlinks/headerLinks";
import user from "@/public/user.png";
import Image from "next/image";
import SearchModal from "@/app/components/dashboard/modals/SerachModal";

export default function Header() {
  const headerItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Overview",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Projects",
          path: "/projects",
          icon: <MdStickyNote2 />,
        },
        {
          title: "Team",
          path: "/team",
          icon: <AiOutlineUsergroupAdd />,
        },
        {
          title: "Calendar",
          path: "/calendar",
          icon: <MdOutlineCalendarMonth />,
        },
        {
          title: "Messages",
          path: "/messages",
          icon: <MdOutlineMessage />,
          number: "5",
        },
      ],
    },
  ];
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);

  return (
    <header className="">
      {/* Desktop header */}
      <div className=" relative w-full sm:flex hidden justify-between items-center h-[11vh] px-[4%] border-b-[1px] border-black">
        <div className="">
          <h3 className=" text-xl font-clash_bold">Tasker</h3>
        </div>
        <nav>
          <ul className="">
            {headerItems.map((menu) => (
              <li
                key={menu.title}
                className="flex flex-row gap-12 items-center"
              >
                {menu.list.map((item) => (
                  <HeaderLink item={item} key={item.title} />
                ))}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-[20px]">
          <div className="">
            <div
              onClick={() => setToggle(!toggle)}
              className="w-[40px] h-[40px] rounded-full border border-black flex justify-center items-center"
            >
              <MdOutlineSettings className="text-[20px] cursor-pointer" />
            </div>
            <div
              className={`${
                toggle ? "flex flex-col" : "hidden"
              } px-3 py-3 bg-[#EB7B26] absolute -bottom-[370px] right-[4%] border border-black  my-2 min-h-[300px] min-w-[300px] rounded-xl sidebar z-10`}
            >
              <div className="flex gap-3 items-center ">
                <div className="w-[40px] h-[40px] rounded-full border border-black flex justify-center items-center">
                  <Image src={user} alt="user" />
                </div>
                <div>
                  <h5 className="text-sm font-clash_medium">Rohan Kumar</h5>
                  <h6 className="text-[10px] font-clash_regular">
                    rohankumar77@gmail.com
                  </h6>
                </div>
              </div>
              <div className="mt-[8%] flex gap-5 flex-col">
                <div className="flex items-center gap-3">
                  <IoMoonOutline className="text-[20px]" />
                  <h5 className="font-clash_regular text-base">Dark Mode</h5>
                </div>
                <div className="flex items-center gap-3">
                  <MdOutlineSettings className="text-[20px]" />
                  <h5 className="font-clash_regular text-base">Settings</h5>
                </div>
                <div className="flex items-center gap-3">
                  <GoClock className="text-[20px]" />
                  <h5 className="font-clash_regular text-base">History</h5>
                </div>
                <div className="flex items-center gap-3">
                  <RxUpdate className="text-[20px]" />
                  <h5 className="font-clash_regular text-base">Updates</h5>
                </div>
                <hr className="h-[1px] bg-black border-black" />
                <div className="flex items-center gap-3">
                  <GoPlus className="text-[20px]" />
                  <h5 className="font-clash_regular text-base">Add Account</h5>
                </div>
                <div className="flex items-center gap-3">
                  <CgLogOut className="text-[20px]" />
                  <h5 className="font-clash_regular text-base">Logout</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[40px] h-[40px] rounded-full border border-black flex justify-center items-center">
            <CiSearch
              onClick={() => {
                setShowModal(true);
              }}
              className="text-[20px] cursor-pointer"
            />
          </div>
          <SearchModal onClose={handleClose} visible={showModal} />
          <div className="w-[40px] h-[40px] rounded-full border border-black flex justify-center items-center">
            <Image src={user} alt="user" />
          </div>
        </div>
      </div>
      {/* Mobile header */}
      <div className="px-[4%] pt-[6%] flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="w-[50px] h-[50px] rounded-full border border-black flex justify-center items-center">
            <Image src={user} alt="user" />
          </div>
          <div className="flex flex-col">
            <h5 className="leading-[18px]">
              <span className="font-clash_regular text-sm">Welcome</span>{" "}
              &#128075;
            </h5>
            <h5 className=" text-base font-clash_medium">Rohan Kumar</h5>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-[50px] h-[50px] rounded-full border border-black flex justify-center items-center">
            <CiSearch
              onClick={() => {
                setShowModal(true);
              }}
              className="text-[26px] cursor-pointer"
            />
          </div>
          <SearchModal onClose={handleClose} visible={showModal} />

          <div className="  w-[50px] h-[50px] rounded-full border border-black flex justify-center items-center">
            <div className=" relative">
              <IoMdNotificationsOutline
                onClick={() => {
                  setShowModal(true);
                }}
                className=" text-[26px] cursor-pointer"
              />
              <h6 className="absolute -top-[2px] right-0 font-clash_medium border border-black text-[10px] w-[15px] h-[15px] flex justify-center items-center rounded-full bg-[#0BC56D]">
                5
              </h6>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
