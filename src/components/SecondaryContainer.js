import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  return (
    <div className="bg-black">
      <div className="-mt-60 relative z-30">
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Now Playing Movies"} movies={movies} />
      <MovieList title={"Now Playing Movies"} movies={movies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
