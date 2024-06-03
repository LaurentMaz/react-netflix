import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full ">
      <Link to={user?.email ? "/home" : "/"}>
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/compte">
            <button className="pr-4">Compte</button>
          </Link>
          <button
            onClick={handleLogOut}
            className="bg-black px-6 py-2 rounded cursor-pointer"
          >
            Déconnexion
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4">Connexion</button>
          </Link>
          <Link to="/inscription">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">
              Inscription
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
