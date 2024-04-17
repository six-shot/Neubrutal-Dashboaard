
import {
  MdDashboard,
  MdStickyNote2,
  MdOutlineMessage,
  MdOutlineCalendarMonth,
  MdOutlineSettings,
} from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import React from "react";
import HeaderLink from "../header/headerlinks/headerLinks";

export default function BottomNav() {
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
    <div>
      <nav className="">
        <ul className="w-full h-[8vh] bg-[#FFFAE5] border-t-[1px] border-black flex items-center px-[4%]">
          {headerItems.map((menu) => (
            <li key={menu.title} className="flex justify-between w-full">
              {menu.list.map((item) => (
                <HeaderLink item={item} key={item.title} />
              ))}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
