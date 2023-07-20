import { PostType } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BusinessSectorApi = createApi({
  reducerPath: "businessSectorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    prepareHeaders: (headers) => {
      // TODO: Add the authorization header
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<PostType[], void>({
      query: () => "posts",
    }),
  }),
});

export const { useFetchPostsQuery } = BusinessSectorApi;
