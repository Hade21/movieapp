import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/searchSlices";

import { movieApi } from "../services/movieApi";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(movieApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
