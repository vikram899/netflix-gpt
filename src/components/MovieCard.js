import React from "react";
import { POSTER_API } from "../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie) return;
  const { title, poster_path } = movie;
  return (
    <div className="w-48 px-4">
      <img className="" alt={title} src={POSTER_API + poster_path} />
    </div>
  );
};

export default MovieCard;
