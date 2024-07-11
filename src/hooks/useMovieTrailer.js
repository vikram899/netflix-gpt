import {
    API_OPTIONS,
    TRAILER_API,
    TRAILER_VIDEO_API,
  } from "../utils/constants";
  import { useDispatch} from "react-redux";
  import { trailer } from "../utils/moviesSlice";
import { useEffect } from "react";
  
const useMovieTrailer = (movieId) => {
  
    const dispatch = useDispatch();

    const getTrailer = async () => {
      const trailerAPIURL = TRAILER_API + movieId + TRAILER_VIDEO_API;
      const data = await fetch(trailerAPIURL, API_OPTIONS);
      const json = await data.json();
  
      const allTrailers = json.results.filter(
        (video) => video.type === "Trailer"
      );
      dispatch(trailer(allTrailers[0]));
    };
  
    useEffect(() => {
      getTrailer();
    }, []);
}

export default useMovieTrailer
