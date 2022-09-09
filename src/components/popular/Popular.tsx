import React from "react";
import { useGetMoviesQuery } from "../../services/movieApi";
import CardMovie from "../cardMovie/CardMovie";

const Popular = () => {
  const { error, data, isLoading } = useGetMoviesQuery(undefined);
  return (
    <div className="my-24 px-8">
      <h2 className="text-2xl font-semibold text-slate-700">Popular Movies</h2>
      <div className="wrapper mt-5 grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 ">
        {isLoading
          ? null
          : data?.results.map((item) => {
              return <CardMovie data={item} />;
            })}
      </div>
    </div>
  );
};

export default Popular;
