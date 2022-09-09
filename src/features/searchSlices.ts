import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IQuery {
  query: string;
  search: boolean;
}
const initialState: IQuery = {
  query: "",
  search: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSearch: (state, action: PayloadAction<boolean>) => {
      state.search = action.payload;
    },
  },
});

export const { setQuery, setSearch } = searchSlice.actions;

export default searchSlice.reducer;
