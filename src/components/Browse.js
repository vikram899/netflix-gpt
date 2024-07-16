import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  return (
    <div>
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
