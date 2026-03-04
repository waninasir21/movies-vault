import React from "react";

const Pagination = ({ handlePrev, handleNext, pageNo }) => {
  return (
    <div className="bg-gray-300 p-4 mt-8 text-amber-400 flex justify-center gap-8">
      <div
        onClick={handlePrev}
        className="px-8 hover:cursor-pointer hover:scale-130 transition-transform text-2xl"
      >
        <i className="fa-solid fa-circle-left"></i>
      </div>
      <div className="font-bold text-2xl">Page-{pageNo}</div>
      <div
        onClick={handleNext}
        className="px-8 hover:cursor-pointer hover:scale-130 transition-transform text-2xl"
      >
        <i className="fa-solid fa-circle-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
