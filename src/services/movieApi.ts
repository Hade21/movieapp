import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface IMovie {
  dates?: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
  }[];
}
interface IDetails {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget?: number;
  genres?: {
    id: number;
    name: string;
  }[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }[];
  production_countries?: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}
interface IRate {
  success: boolean;
  status_code: number;
  status_message: string;
}
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getNowPlaying: builder.query<IMovie, undefined>({
      query: () => `movie/now_playing?api_key=3c3f04416749ac246eab0bd32804ed99`,
    }),
    getMovies: builder.query<IMovie, undefined>({
      query: () =>
        `movie/popular?api_key=3c3f04416749ac246eab0bd32804ed99&language=en-US&page=1`,
    }),
    getDetails: builder.query<IDetails, number>({
      query: (id) =>
        `movie/${id}?api_key=3c3f04416749ac246eab0bd32804ed99&language=en-US`,
    }),
    setRate: builder.mutation<IRate, { id: number; rate: number }>({
      query({ id, rate }) {
        return {
          url: `movie/${id}/rating?api_key=3c3f04416749ac246eab0bd32804ed99`,
          method: "POST",
          body: {
            value: rate,
          },
        };
      },
    }),
    searchMovies: builder.query<IMovie, string>({
      query: (query) =>
        `search/movie?api_key=3c3f04416749ac246eab0bd32804ed99&language=en-US&query=${query}&page=1&include_adult=false`,
    }),
  }),
});

export const {
  useGetNowPlayingQuery,
  useGetMoviesQuery,
  useGetDetailsQuery,
  useSetRateMutation,
  useSearchMoviesQuery,
} = movieApi;
