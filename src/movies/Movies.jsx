import { useEffect, useState } from "react";
import MovieGrid from "../movies/MovieGrid";
import MovieModal from "../movies/MovieModal";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const categories = JSON.parse(
    localStorage.getItem("categories") || "[]"
  );

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const allMovies = [];

        for (let category of categories) {
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${
              import.meta.env.VITE_OMDB_API_KEY
            }&s=${category}`
          );

          const data = await res.json();

          if (data.Search) {
            allMovies.push(...data.Search);
          }
        }

        setMovies(allMovies);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">
        Entertainment Hub
      </h1>

      <MovieGrid
        movies={movies}
        onSelect={setSelectedMovie}
      />

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default Movies;