import React, { useEffect, useState } from "react";
import genreids from "../utilities/genre";

const Watchlist = ({ watchlist, setWatchlist, handleRemovefromWatchlist }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genre"]);
  let [currGenre, setCurrGenre] = useState("All Genre");

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    setGenreList(["All Genre", ...new Set(temp)]);
    console.log(temp);
  }, [watchlist]);

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const handleSearch = (e) => {
    return setSearch(e.target.value);
  };
  const sortInc = () => {
    const sortedInc = watchlist.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });
    setWatchlist([...sortedInc]);
  };
  const sortDec = () => {
    const sortedDec = watchlist.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setWatchlist([...sortedDec]);
  };
  return (
    <>
      <div className="flex justify-center flex-wrap gap-4 m-4 ">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center items-center h-10 w-30 bg-amber-500 rounded-xl text-white font-bold"
                  : "flex justify-center items-center h-10 w-30 bg-gray-400 rounded-xl text-white font-bold "
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-4 ">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="&#128269; Search for Movies"
          className="h-10 w-132 bg-gray-200 outline-amber-500 border px-4 rounded-lg"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8 bg-amber-100">
        <table className="w-full text-black text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className=" flex justify-center items-center gap-1">
                <div onClick={sortDec}>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div>Rating</div>
                <div onClick={sortInc}>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genere</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genre") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-20 w-36"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemovefromWatchlist(movieObj)}
                      className="text-red-800 cursor-pointer font-bold hover:scale-110 duration-200"
                    >
                      &#10060;Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
