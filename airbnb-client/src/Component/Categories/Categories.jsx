
import Slider from "../slider/Slider";
import { PiSlidersHorizontalBold } from "react-icons/pi";

const Categories = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center">
        <div className="w-11/12">
          <Slider />
        </div>
        <div className="p-4 md:py-3 md:px-5 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
          <PiSlidersHorizontalBold />
          <span>Filters</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
