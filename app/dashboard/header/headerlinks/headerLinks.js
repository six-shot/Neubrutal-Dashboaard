"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`  flex items-center gap-2  ${
        pathname === item.path && "text-[#FE7124]"
      }`}
    >
      <span className="relative">
        <h5 className="text-xl">{item.icon}</h5>
        {item.number ? (
          <h6 className="absolute -top-[6px] right-0 font-clash_medium border border-black text-[10px] w-[15px] h-[15px] flex justify-center items-center rounded-full bg-[#0BC56D]">
            5
          </h6>
        ) : (
          ""
        )}
      </span>

      <h5 className=" text-base font-clash_medium sm:flex hidden">
        {item.title}
      </h5>
      {item.number ? (
        <h5 className=" sm:flex hidden  font-clash_medium border border-black text-[10px] w-[20px] h-[20px]  justify-center items-center rounded-full bg-[#0BC56D]">
          {item.number}
        </h5>
      ) : (
        ""
      )}
    </Link>
  );
};
export default HeaderLink;
