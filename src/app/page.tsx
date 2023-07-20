"use client";

import PostsTable from "@/components/posts";
import SearchBar from "@/components/search-bar";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { useFetchPostsMutation } from "@/store/api";
import { setAllPosts, setViewPosts } from "@/store/slices/postSlice";
import { useEffect } from "react";

/** TODO:
 * Show the error message properly to the user.
 * Show better components for Loading and no data state.
 */

export default function Home() {
  const [fetchPosts, { isLoading, isError, error }] = useFetchPostsMutation();
  const { searchedPosts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const fetchPostsHandler = async () => {
    try {
      const response = await fetchPosts().unwrap();
      if (isError) throw error;
      dispatch(setAllPosts(response));
      dispatch(setViewPosts(response));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPostsHandler();
  }, []);

  return (
    <main className="w-full flex flex-col gap-[15px] items-start p-[15px]">
      <SearchBar />
      {!isLoading && !isError ? <PostsTable posts={searchedPosts} /> : <p> Loading ... </p>}
      {isError && <p> Something went wrong! </p>}
    </main>
  );
}
