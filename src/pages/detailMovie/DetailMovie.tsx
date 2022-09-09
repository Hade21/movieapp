import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../../services/movieApi";
import { BiArrowBack } from "react-icons/bi";

const DetailMovie: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { error, data, isLoading } = useGetDetailsQuery(
    parseInt(id ? id : "0")
  );

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main>
      {isLoading ? null : (
        <div className="wrapper mx-auto w-11/12 py-12 md:w-5/6">
          <div className="top-section flex flex-col gap-4 text-left">
            <div className="detail flex-1">
              <h2 className="title text-3xl font-semibold text-slate-700">
                {data?.original_title}
              </h2>
              <h4 className="title text-lg font-semibold text-slate-500">
                Rating : {data?.vote_average} from {data?.vote_count} vote
              </h4>
            </div>
            <div className="poster flex-1">
              <img
                src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
                alt="poster"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="overview-section mt-6 flex flex-col gap-3 text-left">
            <h2 className="title text-3xl font-semibold text-slate-700">
              Overview
            </h2>
            <p className="overview text-justify text-sm text-slate-500">
              {data?.overview}
            </p>
          </div>
          <div className="more mt-8 flex flex-col gap-2 text-left">
            <p className="flex w-full justify-start gap-2 rounded-lg py-2 px-4 text-sm text-slate-500 shadow-md shadow-slate-300">
              <span className="flex-1">Release Date :</span>{" "}
              <span className="flex-1">{data?.release_date}</span>
            </p>
            <p className="flex w-full justify-start gap-2 rounded-lg py-2 px-4 text-sm text-slate-500 shadow-md shadow-slate-300">
              <span className="flex-1">Genre :</span>
              <span className="flex-1">
                {data?.genres?.map((genre) => {
                  return `${genre.name}, `;
                })}
              </span>
            </p>
            <p className="flex w-full justify-start gap-2 rounded-lg py-2 px-4 text-sm text-slate-500 shadow-md shadow-slate-300">
              <span className="flex-1">Original Language :</span>
              <span className="flex-1">
                {data?.original_language?.toLocaleUpperCase()}
              </span>
            </p>
            <p className="flex w-full justify-start gap-2 rounded-lg py-2 px-4 text-sm text-slate-500 shadow-md shadow-slate-300">
              <span className="flex-1">Production :</span>{" "}
              <span className="flex-1">
                {data?.production_companies?.map((company) => {
                  return `${company.name}, `;
                })}
              </span>
            </p>
            <p className="flex w-full justify-start gap-2 rounded-lg py-2 px-4 text-sm text-slate-500 shadow-md shadow-slate-300">
              <span className="flex-1">Cost Production :</span>{" "}
              <span className="flex-1">${data?.budget}</span>
            </p>
            <p className="flex w-full justify-start gap-2 rounded-lg py-2 px-4 text-sm text-slate-500 shadow-md shadow-slate-300">
              <span className="flex-1">Revenue :</span>{" "}
              <span className="flex-1">{data?.revenue}</span>
            </p>
          </div>
          <div className="back mt-6 flex w-full justify-center">
            <button
              className="text-md flex items-center gap-2 rounded-lg bg-blue-500 px-8 py-4 text-slate-200 shadow-md shadow-slate-300"
              onClick={handleBack}
            >
              <BiArrowBack /> Back
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default DetailMovie;
