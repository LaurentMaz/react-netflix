import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieCard = ({ movie, index }) => {
  const [like, setLike] = useState(false);
  return (
    <div
      key={movie.id}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-56 inline-block cursor-pointer relative p-2 rounded hover:scale-105"
    >
      <img
        className="w-auto h-full block object-cover rounded"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-xs md:text-sm font-black flex justify-center items-center h-full text-center">
          {movie.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300 hover:text-red-500" />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
