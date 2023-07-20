import { useRef } from "react";
import { MdSearch as SearchIcon } from "react-icons/md";
import InputElement from "@/components/input-element";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { setPageNumber, setViewPosts } from "@/store/slices/postSlice";

const SearchBar = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { allPosts } = useAppSelector((state) => state.posts);

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;

    // Filter posts based on the search text
    const filteredPosts = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchText.toLowerCase()) ||
        post.body.toLowerCase().includes(searchText.toLowerCase()) ||
        String(post.id).valueOf().includes(searchText)
    );

    // Dispatch the filtered posts
    dispatch(setViewPosts(filteredPosts));
  };

  return (
    <div
      className="md:w-1/2 sm:w-full flex items-center p-[15px] bg-gray-light cursor-pointer"
      onClick={() => searchRef!.current!.focus()}
    >
      <InputElement
        ref={searchRef}
        type="text"
        className="w-full px-[15px] py-[5px] text-[white] font-[400] text-[14px] bg-[transparent] border-0 focus:outline-none"
        handleChange={changeEventHandler}
        placeholder="Поиск"
      />
      <SearchIcon size={20} className="text-[white] select-none" />
    </div>
  );
};

export default SearchBar;
