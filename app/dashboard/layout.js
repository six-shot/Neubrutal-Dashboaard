import BottomNav from "../components/dashboard/bottomnav";
import Header from "../components/dashboard/header";
import bgg from "@/public/mask.png";
const style = {
  bg: {
    backgroundImage: ` url(${bgg.src})`,

    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    overfloe: "hidden",
  },
};
const Layout = ({ children }) => {
  return (
    // <div className="px-[3%] py-[3%] bg-black" style={style.bg}>
    <div className="relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-full h-full    bg-[#FFFAE5]">
          <div className="w-full h-screen bg-[#FFFAE5] rounded-[32px]">
            <Header />
            {children}
          </div>
        </div>
      </div>
      <div className="sm:hidden fixed z-10 bottom-0  w-full">
        <BottomNav />
      </div>
    </div>
  );
};

export default Layout;
