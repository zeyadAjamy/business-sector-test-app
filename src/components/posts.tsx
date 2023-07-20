import PaginationContainer from "@/components/PaginationContainer";
import { IoIosArrowDown as ArrowBottom } from "react-icons/io";

import { PostType } from "@/types";

const PostRow = ({ post }: { post: PostType }) => {
  return (
    <div className="table-row">
      <div className="table-cell p-[15px]">{post.id}</div>
      <div className="table-cell p-[15px]">{post.title}</div>
      <div className="table-cell p-[15px]">{post.body}</div>
    </div>
  );
};

const PostsTableHeader = () => {
  return (
    <div className="table-header-group">
      <div className="table-header-group">
        <div className="table-cell flex items-center gap-[10px] cursor-pointer">
          <span className="font-[600]">ID</span>
          <ArrowBottom />
        </div>
        <div className="table-cell flex items-center gap-[10px] cursor-pointer">
          <span className="font-[600]">Заголовок</span>
          <ArrowBottom />
        </div>
        <div className="table-cell flex items-center gap-[10px] cursor-pointer">
          <span className="font-[600]">Описание</span>
          <ArrowBottom />
        </div>
      </div>
    </div>
  );
};

const PostsTable = ({ posts }: { posts: PostType[] }) => {
  return (
    <div>
      <PostsTableHeader />
      <PaginationContainer Template={PostRow} list={posts} />
    </div>
  );
};

export default PostsTable;
