const tmdbKEY = import.meta.env.VITE_TMDB_KEY;

export const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKEY}&language=fr-FR&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKEY}&language=fr-FR&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKEY}&language=fr-FR&page=2`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${tmdbKEY}&language=fr-FR&page=1`,
};
