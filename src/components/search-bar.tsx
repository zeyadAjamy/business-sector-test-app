import { useRef } from "react";
import { MdSearch as SearchIcon } from "react-icons/md";
import InputElement from "@/components/input-element";

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const changeEventHandler = (e: React.ChangeEvent) => {};

  return (
    <div
      className="md:w-1/2 sm:w-full flex items-center p-[15px] bg-gray-light cursor-pointer"
      onClick={() => searchRef!.current!.focus()}
    >
      <InputElement
        ref={searchRef}
        type="text"
        className="w-full px-[15px] py-[5px] font-[400] text-[14px] bg-[transparent] border-0 focus:outline-none"
        handleChange={changeEventHandler}
        placeholder="Поиск"
      />
      <SearchIcon size={20} className="text-[white] select-none" />
    </div>
  );
};

export default SearchBar;
