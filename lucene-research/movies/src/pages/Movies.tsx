import { useState, useEffect, useCallback } from "react";
import useDebonuce from "../hooks/useDebounce";
import MovieComponent from "../components/MovieComponent";
import { IMovie } from "../models/IMovie";
import styles from "./Movies.module.css";
import Header from "../components/Layout/Header";
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

  const clearSearch = () => {
    console.log('clear');
    setMovies([]);
    setMoviesSearch('');   
  }

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.cover}></div>

      <div className={styles.controls}>
        <input
          id="searchText"
          className={styles.input}
          placeholder="Search..."
          autoComplete="off"
          type="text"
          value={moviesSearch}
          onChange={(e) => setMoviesSearch(e.target.value)}
        ></input>
        <button className={styles.clear} onClick={clearSearch}>Clear</button>
      </div>

      <div className={styles.movies}>
        {movies.length !== 0 &&
          movies.map((e) => <MovieComponent key={e.movieId} movie={e} />)}
      </div>
    </div>
  );
};

export default Movies;
