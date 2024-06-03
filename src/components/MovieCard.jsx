import React, { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase.config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const MovieCard = ({ movie, inAccount }) => {
  const [like, setLike] = useState();
  const [saved, setSaved] = useState();
  const { user, myMovies } = UserAuth();

  const checkLike = () => {
    const myMoviesFiltered = myMovies?.filter(
      (movieInDB) => movieInDB.title === movie.title
    );

    if (myMoviesFiltered?.length > 0) setSaved(true);
  };

  const movieID = doc(db, "users", `${user?.email}`);
  const handleSsaveMovie = async () => {
    setLike(!like);

    //Ajouter le movie dans la BDD
    await updateDoc(movieID, {
      savedMovies: arrayUnion({
        id: movie.id,
        title: movie.title,
        img: movie.backdrop_path,
      }),
    });
  };

  useEffect(() => {
    checkLike();
  }, [myMovies]);

  return (
    <div
      key={movie.id}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-56 inline-block cursor-pointer relative p-2 rounded hover:scale-105"
    >
      <img
        className="w-auto h-full block object-cover rounded"
        src={`https://image.tmdb.org/t/p/original${
          inAccount ? movie.img : movie.backdrop_path
        }`}
        alt={movie.title}
      />
      <div className="absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-xs md:text-sm font-black flex justify-center items-center h-full text-center">
          {movie.title}
        </p>
        <p onClick={handleSsaveMovie}>
          {saved || like ? (
            <FaHeart className="absolute top-4 left-4 text-red-500" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300 hover:text-red-500" />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
