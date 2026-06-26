const MovieGrid = ({ movies, onSelect }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {movies.map((movie, index) => (
        <div
          key={index}
          onClick={() => onSelect(movie)}
          className="cursor-pointer transform hover:scale-105 transition-all"
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full h-60 object-cover rounded-lg"
          />

          <h3 className="mt-2 text-sm">
            {movie.Title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;