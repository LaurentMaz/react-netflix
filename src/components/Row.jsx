import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";

const Row = ({ title, fetchURL = "", accountRow = false }) => {
  const { user, myMovies } = UserAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!accountRow) {
      axios.get(fetchURL).then((response) => {
        setMovies(response.data.results);
      });
    } else {
      setMovies(myMovies);
    }
  }, [fetchURL, user?.email]);

  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };
  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <>
      <h2 className="font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block text-black"
          size={40}
        />
        <div
          ref={sliderRef}
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {(accountRow ? myMovies : movies).map((movie, index) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              index={index}
              inAccount={accountRow}
            />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block text-black"
          size={40}
        />
      </div>
    </>
  );
};

export default Row;
