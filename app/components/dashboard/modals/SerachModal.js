import React from "react";
import { IconContext } from "react-icons";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
export default function SearchModal({ visible, onClose }) {
  const handleClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      className="fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-start  pt-[7%] justify-center"
      onClick={handleClose}
    >
      <div className="bg-[#FC95B4] sm:w-[600px] w-full px-[2%] pt-[2%] pb-[7%] rounded-xl">
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2 px-3 w-full h-[40px] bg-[#FFFAE5] rounded-lg">
            <RiSearch2Line className="text-[20px] text-[#FC95B4]" />
            <input
              type="text"
              className="w-full h-full px-3 rounded-lg bg-transparent outline-none text-[#FC95B4] placeholder:text-[#FC95B4]"
              placeholder="Make a search"
            />
          </div>
          <IconContext.Provider value={{ size: "30px" }}>
            <IoCloseCircleOutline className="text-[#FFFAE5]" />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
