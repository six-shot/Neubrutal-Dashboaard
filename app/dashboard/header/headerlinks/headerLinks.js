"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`flex items-center gap-2  ${
        pathname === item.path && "text-[#FE7124]"
      }`}
    >
      <h5 className="text-xl">{item.icon}</h5>
      <h5 className="text-base font-clash_medium">{item.title}</h5>
      {item.number ? (
        <h5 className=" font-clash_medium border border-black text-[10px] w-[20px] h-[20px] flex justify-center items-center rounded-full bg-[#0BC56D]">
          {item.number}
        </h5>
      ) : (
        ""
      )}
    </Link>
  );
};
export default HeaderLink;
