"use client";

import PostsTable from "@/components/posts";
import SearchBar from "@/components/search-bar";
import { useFetchPostsQuery } from "@/store/api";

/** TODO:
 * Show the error message properly to the user.
 * Show better components for Loading and no data state.
 */

export default function Home() {
  const { data, isLoading, isError, error } = useFetchPostsQuery();
  return (
    <main className="w-full flex flex-col gap-[15px] items-start p-[15px]">
      <SearchBar />
      {!isLoading && !isError ? <PostsTable posts={data || []} /> : <p> Loading ... </p>}
      {isError && <p> Something went wrong! </p>}
    </main>
  );
}
