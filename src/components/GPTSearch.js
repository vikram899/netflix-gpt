import React from "react";
import SearchBar from "../components/SearchBar";
import MovieSuggestions from "../components/MovieSuggestions";
import { BG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
    <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt="login-background"
        ></img>
      </div>
      <SearchBar />
      <MovieSuggestions/>
    </>
  );
};

export default GPTSearch;
