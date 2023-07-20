import PaginationContainer from "@/components/PaginationContainer";
import { IoIosArrowDown as ArrowBottom } from "react-icons/io";

import { PostType } from "@/types";

const PostRow = ({ element }: { element: PostType }) => {
  return (
    <div className="w-full flex text-gray-dark text-[13px] font-[500] ease-in-out hover:bg-gray-light-bg duration-100">
      <div className="w-[60px] text-center p-[15px] border border-t-0 border-gray-extralight">{element.id}</div>
      <div className="w-[40%] p-[15px] border-b boreder-r border-gray-extralight">{element.title}</div>
      <div className="w-[60%] p-[15px] border border-t-0 border-gray-extralight">{element.body}</div>
    </div>
  );
};

const PostsTableHeader = () => {
  return (
    <div className="w-full flex bg-gray-dark text-[white]">
      <div className="flex flex-row items-center gap-2 sm:justify-between md:justify-center text-[14px] cursor-pointer p-[15px]">
        <span className="font-[600]">ID</span>
        <ArrowBottom />
      </div>
      <div className="w-[40%] flex flex-row items-center gap-2 sm:justify-between md:justify-center text-[14px] cursor-pointer p-[15px]">
        <span className="font-[600]">Заголовок</span>
        <ArrowBottom />
      </div>

      <div className="w-[60%] flex flex-row items-center gap-2 sm:justify-between md:justify-center text-[14px] cursor-pointer p-[15px]">
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
