import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { IoIosArrowDown as ArrowBottom } from "react-icons/io";
import { setViewPosts } from "@/store/slices/postSlice";
import type { PostType } from "@/types";
import PaginationContainer from "@/components/PaginationContainer";

const PostRow = ({ element }: { element: PostType }) => {
  return (
    <div className="w-full flex text-gray-dark text-[13px] font-[500] ease-in-out hover:bg-gray-light-bg duration-100">
      <span className="block w-[60px] text-center p-[15px] border border-t-0 border-gray-extralight">{element.id}</span>
      <span className="block w-[40%] p-[15px] border-b boreder-r border-gray-extralight">{element.title}</span>
      <span className="block w-[60%] p-[15px] border border-t-0 border-gray-extralight">{element.body}</span>
    </div>
  );
};

const PostsTableHeader = () => {
  const { allPosts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const sortHandler = (columnName: string) => {
    switch (columnName) {
      case "id":
        // Sort by id (ascending order)
        const sortedById = [...allPosts].sort((a, b) => b.id - a.id);
        dispatch(setViewPosts(sortedById));
        break;
      case "title":
        // Sort by title (alphabetical order)
        const sortedByTitle = [...allPosts].sort((a, b) => a.title.localeCompare(b.title));
        dispatch(setViewPosts(sortedByTitle));
        break;
      case "body":
        // Sort by body (alphabetical order)
        const sortedByBody = [...allPosts].sort((a, b) => a.body.localeCompare(b.body));
        dispatch(setViewPosts(sortedByBody));
        break;
    }
  };

  return (
    <div className="w-full flex bg-gray-dark text-[white]">
      <div
        className="flex flex-row items-center gap-2 sm:justify-between md:justify-center text-[14px] cursor-pointer p-[15px]"
        onClick={() => sortHandler("id")}
      >
        <span className="font-[600]">ID</span>
        <ArrowBottom />
      </div>
      <div
        className="w-[40%] flex flex-row items-center gap-2 sm:justify-between md:justify-center text-[14px] cursor-pointer p-[15px]"
        onClick={() => sortHandler("title")}
      >
        <span className="font-[600]">Заголовок</span>
        <ArrowBottom />
      </div>

      <div
        className="w-[60%] flex flex-row items-center gap-2 sm:justify-between md:justify-center text-[14px] cursor-pointer p-[15px]"
        onClick={() => sortHandler("body")}
      >
        <span className="font-[600]">Описание</span>
        <ArrowBottom />
      </div>
    </div>
  );
};

const PostsTable = ({ posts }: { posts: PostType[] }) => {
  return (
    <div className="w-full overflow-hidden">
      <PostsTableHeader />
      <PaginationContainer Template={PostRow} list={posts} />
    </div>
  );
};

export default PostsTable;
