import { configureStore } from "@reduxjs/toolkit";
import { BusinessSectorApi } from "@/store/api";
import { Posts } from "@/store/slices/postSlice";

const store = configureStore({
  reducer: {
    [Posts.name]: Posts.reducer,
    [BusinessSectorApi.reducerPath]: BusinessSectorApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(BusinessSectorApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
