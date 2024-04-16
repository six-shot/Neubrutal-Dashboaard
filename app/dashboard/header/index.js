import React from "react";
import {
  MdDashboard,
  MdStickyNote2,
  MdOutlineMessage,
  MdOutlineCalendarMonth,
  MdOutlineSettings,
} from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import HeaderLink from "./headerlinks/headerLinks";
import user from "@/public/user.png";
import Image from "next/image";

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

  return (
    <header className="">
      <div className="w-full flex justify-between items-center h-[11vh] px-[4%] border-b-[1px] border-black">
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
          <div className="w-[40px] h-[40px] rounded-full border border-black flex justify-center items-center">
            <MdOutlineSettings className="text-[20px]" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full border border-black flex justify-center items-center">
            <CiSearch className="text-[20px]" />
          </div>
          <div className="w-[40px] h-[40px] rounded-full border border-black flex justify-center items-center">
            <Image src={user} alt="user" />
          </div>
        </div>
      </div>
    </header>
  );
}
