import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { setQuery, setSearch } from "../../features/searchSlices";

const Header: React.FC = () => {
  const query = useSelector((state: RootState) => state.search.query);
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
    e.target.value ? dispatch(setSearch(true)) : dispatch(setSearch(false));
  };

  return (
    <div className="flex flex-col items-center justify-between gap-3 px-10 py-6 md:flex-row ">
      <div className="left flex-1">
        <div className="logo text-left">
          <p className="text-lg font-medium text-slate-600">MoviesApp</p>
        </div>
      </div>
      <div className="right flex-1">
        <div className="search flex items-center justify-end gap-4">
          <input
            type="text"
            placeholder="Search for a movie, tv show, person..."
            className="w-full rounded-md bg-slate-100 px-4 py-2 text-sm text-slate-600 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-600"
            value={query}
            onChange={handleSearch}
          />
          <BiSearchAlt className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
