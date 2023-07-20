'use client';

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
    <main className="flex min-h-screen flex-col gap-[15px] items-center justify-between p-24">
      <SearchBar />
      {isLoading && !isError && data ? <PostsTable posts={data} /> : <p> Loading ... </p>}
      {isLoading && !isError && !data && <p> No Data to show! </p>}
      {isError && <p> Something went wrong! </p>}
    </main>
  );
}
