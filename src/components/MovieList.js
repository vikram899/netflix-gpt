import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-20">
      <h1 className="text-3xl px-4 py-4 text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll scrol"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
