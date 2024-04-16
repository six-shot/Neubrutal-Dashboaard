import Header from "./header";
import bgg from "@/public/mask.png"
const style = {
  bg: {
    backgroundImage: ` url(${bgg.src})`,

    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    overfloe:"hidden"
  },
};
const Layout = ({ children }) => {
  return (
    <div className="px-[3%] py-[3%] bg-black" style={style.bg}>
      <div className="max-w-[1440px] mx-auto">
        <div className="w-full h-full bg-transparent p-[12px]  border-[8px] bg-[#FFFAE5] rounded-[32px]">
          <div className="w-full h-screen bg-[#FFFAE5] rounded-[32px]">
            <Header />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
