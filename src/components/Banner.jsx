import React, { useState, useEffect } from "react";
import bannerData from "../utilities/bannerData";

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentMovie = bannerData[index];

  return (
    <div
      className="h-[30vh] md:h-[75vh] bg-cover bg-center bg-no-repeat flex items-end transition-all duration-1000"
      style={{ backgroundImage: `url(${currentMovie.image})` }}
    >
      <div className="text-white text-xl md:text-xl text-center w-full bg-gray-500/3 p-4 font-bold backdrop-blur-sm">
        {currentMovie.title}
      </div>
    </div>
  );
};
export default Banner;
