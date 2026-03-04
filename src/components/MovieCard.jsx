import React from "react";
import Watchlist from "./Watchlist";

function MovieCard({
  poster_path,
  name,
  movieObj,
  watchlist = [],
  handleAddtoWatchlist,
  handleRemovefromWatchlist,
}) {
  const doesContain = (movieObj) => {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) return true;
    }
    return false;
  };
  return (
    <div
      className="h-80 w-50 bg-center bg-cover bg-no-repeat rounded-3xl hover:scale-110 duration-300 hover:cursor-pointer hover:border-amber-200 transition-all border-3 border-transparent flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemovefromWatchlist(movieObj)}
          className="mt-3"
        >
          <i
            className="fa-solid fa-bookmark fa-bounce fa-2xl"
            style={{ color: "#ffe485" }}
          ></i>
        </div>
      ) : (
        <div onClick={() => handleAddtoWatchlist(movieObj)} className="mt-3">
          <i
            className="fa-regular fa-bookmark fa-2xl"
            style={{ color: "#ffe485" }}
          ></i>
        </div>
      )}

      <div className="text-white bg-gray-900/60 w-full text-center text-xl rounded-b-3xl overflow-hidden">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
