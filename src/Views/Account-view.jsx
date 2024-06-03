import React from "react";
import SavedMovies from "../components/SavedMovies";

const AccountView = () => {
  return (
    <>
      <div className="w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/ebc5214b-a695-4ff0-8772-959861962325/US-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
          className="w-full object-cover h-[400px]"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]">
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">Mes films/séries</h1>
          </div>
        </div>
      </div>
      <SavedMovies />
    </>
  );
};

export default AccountView;
