export const fetchMoviesBySearch = async (query) => {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${
      import.meta.env.VITE_OMDB_API_KEY
    }&s=${query}`
  );

  return res.json();
};