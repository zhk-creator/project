import { useEffect, useState } from "react";

const MovieModal = ({ movie, onClose }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_OMDB_API_KEY
        }&i=${movie.imdbID}`
      );

      const data = await res.json();
      setDetails(data);
    };

    fetchDetails();
  }, [movie]);

  if (!details) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center">
      <div className="bg-white text-black p-6 rounded-xl w-[600px] relative">
        
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl"
        >
          ✕
        </button>

        <div className="flex gap-4">
          <img
            src={details.Poster}
            className="w-40 rounded"
          />

          <div>
            <h2 className="text-2xl font-bold">
              {details.Title}
            </h2>

            <p><b>Genre:</b> {details.Genre}</p>
            <p><b>Actors:</b> {details.Actors}</p>
            <p><b>Runtime:</b> {details.Runtime}</p>
            <p><b>IMDB:</b> {details.imdbRating}</p>

            <p className="mt-2 text-sm">
              {details.Plot}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;