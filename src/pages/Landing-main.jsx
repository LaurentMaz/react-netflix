import React from "react";

const LandingMain = () => {
  return (
    <>
      <div
        className="w-full
            h-screen
            max-h-[550px]
            p-24
            relative
            overflow-hidden            
            z-10
            flex
            flex-col
            gap-6
            justify-center 
            items-center
						
            bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/be2c0639-9a0d-4234-9b50-d397d8b92e20/FR-fr-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg')]
            bg-cover
            bg-no-repeat
            bg-center

            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-black            
            before:opacity-75
            before:z-[-5]
			"
      >
        <h1 className="text-5xl font-extrabold">
          Films et séries en illimité, et bien plus
        </h1>
        <p className="text-2xl">Où que vous soyez. Annulez à tout moment.</p>
        <div className="flex items-center justify-center gap-5 bg-black/70 rounded p-5">
          <p className="text-2xl">Prêt à regarder Netflix ?</p>
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-2xl">
            S'inscrire
          </button>
        </div>
      </div>
      Ï
    </>
  );
};

export default LandingMain;
