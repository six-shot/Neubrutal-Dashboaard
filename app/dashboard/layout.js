import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1440px]">
      <div className="w-full h-screen bg-[#FFFAE5]">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
