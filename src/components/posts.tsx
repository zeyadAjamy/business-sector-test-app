import PaginationContainer from "@/components/PaginationContainer";
import { IoIosArrowDown as ArrowBottom } from "react-icons/io";

import { PostType } from "@/types";

const PostRow = ({ element }: { element: PostType }) => {
  return (
    <div className="table-row text-gray-dark text-[13px] font-[500] ease-in-out hover:bg-gray-light-bg duration-100">
      <div className="table-cell p-[15px] border border-t-0 border-gray-extralight">{element.id}</div>
      <div className="table-cell p-[15px] border-b boreder-r border-gray-extralight">{element.title}</div>
      <div className="table-cell p-[15px] border border-t-0 border-gray-extralight">{element.body}</div>
    </div>
  );
};

const PostsTableHeader = () => {
  return (
    <div className="table-header-group bg-gray-dark text-[white]">
      <div className="table-row">
        <div className="table-cell">
          <div className="flex flex-row items-center gap-2 sm:justify-between md:justify-center text-[14px] cursor-pointer p-[15px]">
            <span className="font-[600]">ID</span>
            <ArrowBottom />
          </div>
        </div>
        <div className="table-cell">
          <div className="flex flex-row items-center gap-2 sm:justify-between md:justify-center text-[14px] cursor-pointer p-[15px]">
            <span className="font-[600]">Заголовок</span>
            <ArrowBottom />
          </div>
        </div>
        <div className="table-cell">
          <div className="flex flex-row items-center gap-2 sm:justify-between md:justify-center text-[14px] cursor-pointer p-[15px]">
            <span className="font-[600]">Описание</span>
            <ArrowBottom />
          </div>
        </div>
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
