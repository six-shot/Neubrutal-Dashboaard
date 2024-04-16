const Overview = () => {
  return (
    <div className="px-[5%] pt-8">
      <div className="w-full flex justify-between items-center">
        <div>
          <h4 className="font-clash_semibold text-[32px]">Overview</h4>
          <h6 className="text-sm text-[#575757] font-clash_regular">
            Have a bird's eye view of all your projects
          </h6>
        </div>
        <button className="px-6 py-3 font-sm text-black font-clash_semibold bg-[#EB7B26] rounded-[32px] border-[2px] border-black">
          Add New Project
        </button>
      </div>
    </div>
  );
};

export default Overview;
