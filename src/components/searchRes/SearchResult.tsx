import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useSearchMoviesQuery } from "../../services/movieApi";
import CardMovie from "../cardMovie/CardMovie";

const SearchResult = () => {
  const query = useSelector((state: RootState) => state.search.query);
  const { error, data, isLoading } = useSearchMoviesQuery(query);
  return (
    <div className="my-24 px-8">
      <h2 className="text-2xl font-semibold text-slate-700">
        Search Result :{" "}
      </h2>
      <div className="wrapper mt-5 grid grid-flow-row grid-cols-4 gap-4 ">
        {isLoading
          ? null
          : data?.results.map((item) => {
              return <CardMovie data={item} />;
            })}
      </div>
    </div>
  );
};

export default SearchResult;
