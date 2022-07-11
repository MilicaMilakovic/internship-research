import { useState, useEffect, useCallback } from "react";
import useDebonuce from "../hooks/useDebounce";
import MovieComponent from "../components/MovieComponent";
import { IMovie } from "../models/IMovie";

const Movies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const [moviesSearch, setMoviesSearch] = useState("");

  const debouncedSearch = useDebonuce(moviesSearch, 500);

  const fetchMovies = useCallback(async () => {
    const result = await fetch(
      `http://localhost:8080/api/movies/${debouncedSearch}`
    );
    const data = await result.json();
    setMovies(data);
  }, [debouncedSearch]);

  useEffect(() => {
    if (debouncedSearch) fetchMovies();
  }, [debouncedSearch, fetchMovies]);

  return (
    <div>
      <input
        id="searchText"
        type="text"
        onChange={(e) => setMoviesSearch(e.target.value)}
      ></input>

      <div className="movie-container">
        {movies.length !== 0 &&
          movies.map((e) => <MovieComponent key={e.movieId} movie={e} />)}
      </div>
    </div>
  );
};

export default Movies;
