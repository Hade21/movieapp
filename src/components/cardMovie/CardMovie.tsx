import React from "react";

// interface IData {
//   adult?: boolean;
//   backdrop_path?: string;
//   genre_ids?: number[];
//   id: number;
//   original_language?: string;
//   original_title?: string;
//   overview?: string;
//   popularity?: number;
//   poster_path?: string;
//   release_date?: string;
//   title?: string;
//   video?: boolean;
//   vote_average?: number;
//   vote_count?: number;
// }
const CardMovie: React.FC<any> = (data) => {
  const { data: movie } = data;
  return (
    <div className="wrapper group relative cursor-pointer rounded-lg">
      <div className="poster relative h-0 pt-2/3 pb-2/3">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt="poster"
          className="absolute inset-0 h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="detail absolute bottom-0 w-full rounded-b-lg bg-gradient-to-t from-slate-700 via-slate-800 py-10 transition-all duration-200 group-hover:top-0 group-hover:flex group-hover:h-full group-hover:flex-col group-hover:justify-center group-hover:gap-3 group-hover:bg-slate-800 group-hover:bg-opacity-20">
        <h2 className="title text-base font-medium text-slate-300">
          {movie.title}
        </h2>
        <p className="release-date text-xs text-slate-500">
          {movie.release_date}
        </p>
      </div>
      <p className="absolute top-0 right-0 rounded-lg bg-red-500 p-3 text-sm text-white">
        {movie.vote_average}
      </p>
    </div>
  );
};

export default CardMovie;
