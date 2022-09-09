import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Header, HotMovieSlide, Popular, SearchResult } from "../../components";

const Home = () => {
  const getWindowWidth = () => {
    const { innerWidth: width } = window;
    return width;
  };
  const [windowWidth, setWindowWidth] = React.useState(getWindowWidth());

  const searchState = useSelector((state: RootState) => state.search.search);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <Header />
      <HotMovieSlide width={windowWidth} />
      {searchState ? <SearchResult /> : <Popular />}
    </main>
  );
};

export default Home;
