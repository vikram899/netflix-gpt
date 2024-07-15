import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_API } from "../utils/constants";
import { popularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_API, API_OPTIONS);
    const json = await data.json();

    dispatch(popularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
  
  return <div></div>;
};

export default usePopularMovies;
