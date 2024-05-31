import React from "react";
import { Link } from "react-router-dom";

const LoginView = ({ setEmail, setPassword, handleSubmit }) => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/ebc5214b-a695-4ff0-8772-959861962325/US-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
          className="sm:block absolute w-full object-cover h-screen"
        />
        <div
          className="bg-black/60 fixed top-0 left-0 w-full h-screen"
          aria-hidden="true"
        ></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 rounded-[15px]">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Connexion</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-2  rounded text-black"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2  rounded text-black"
                  type="password"
                  placeholder="Mot de passe"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Connexion
                </button>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <p>
                    <input className="mr-2" type="checkbox" id="rememberme" />
                    <label htmlFor="rememberme">Se souvenir de moi</label>
                  </p>
                  <p>Besoin d'aide ?</p>
                </div>
                <div>
                  <p className="py-8">
                    <span className="text-gray-400">Nouveau sur Netflix ?</span>{" "}
                    <Link to="/inscription">Inscription</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginView;
