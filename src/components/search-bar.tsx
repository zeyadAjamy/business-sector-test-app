import { useRef } from "react";
import { MdSearch as SearchIcon } from "react-icons/md";
import InputElement from "@/components/input-element";

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const changeEventHandler = (e: React.ChangeEvent) => {};

  return (
    <div className="md:w-1/2 sm:w-full flex items-center p-[15px] bg-gray-light">
      <InputElement ref={searchRef} type="text" className="px-[15px] py-[8px] font-[400] text-[14px] bg-[transparent] border-0 focus:outline-none" handleChange={changeEventHandler} />
      <SearchIcon size={18} className="text-[white] select-none"/>
    </div>
  );
};

export default SearchBar;
