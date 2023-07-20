import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { PostType } from "@/types";

const initialState = {
  pageNumber: 1,
  allPosts: [] as PostType[],
  searchedPosts: [] as PostType[],
};

export const Posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setAllPosts: (state, action: PayloadAction<PostType[]>) => {
      state.allPosts = action.payload;
    },
    setViewPosts: (state, action: PayloadAction<PostType[]>) => {
      state.searchedPosts = action.payload;
    },
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setAllPosts, setViewPosts, setPageNumber } = Posts.actions;
