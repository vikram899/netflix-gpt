import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);

  return (
    <div className="bg-black">
      <div className="-mt-60 relative z-30">
      <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies} />
      <MovieList title={"Popular Movies"} movies={popularMovies} />
      
      </div>
    </div>
  );
};

export default SecondaryContainer;
