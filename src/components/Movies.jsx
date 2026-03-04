import React, { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
import Links from "./Links";

const Movies = ({
  watchlist,
  handleAddtoWatchlist,
  handleRemovefromWatchlist,
}) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const tRef = useRef(null);

  const handlePrev = () => {
    if (pageNo == 1) setPageNo(pageNo);
    else setPageNo(pageNo - 1);
  };
  const handleNext = () => setPageNo(pageNo + 1);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=51fd7ee5cc8d8accc7f1463efdc5abd5&language=en-US&page=${pageNo}`,
      )
      .then(function (res) {
        if (pageNo > 1 && tRef.current) {
          tRef.current.scrollIntoView({
            behaviour: "smooth",
          });
        }
        setMovies(res.data.results);
        console.log(res.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5 bg-amber-100">
      <div
        ref={tRef}
        className="bg-gray-300 h-10 text-2xl my-5 text-amber-500 font-bold text-center"
      >
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-7">
        {movies.map((movieobj) => {
          return (
            <MovieCard
              key={movieobj.id}
              poster_path={movieobj.poster_path}
              name={movieobj.original_title}
              watchlist={watchlist}
              movieObj={movieobj}
              handleAddtoWatchlist={handleAddtoWatchlist}
              handleRemovefromWatchlist={handleRemovefromWatchlist}
            />
          );
        })}
      </div>
      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        pageNo={pageNo}
      />
      <Links />
    </div>
  );
};

export default Movies;
