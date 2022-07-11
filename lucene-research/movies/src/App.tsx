import React, { FormEvent, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import MovieComponent from "./components/MovieComponent";
import useDebonuce from "./hooks/useDebounce";
import { IMovie } from "./models/IMovie";

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [moviesSearch, setMoviesSearch] = useState("");

  const debouncedSearch = useDebonuce(moviesSearch, 500);

  const fetchMovies = async () => {
    const result = await fetch(
      `http://localhost:8080/api/movies/${debouncedSearch}`
    );
    const data = await result.json();
    setMovies(data);
  };

  useEffect(() => {
      if (debouncedSearch) fetchMovies();

  }, [debouncedSearch]);

  return (
    <div className="App">

      <Header/>

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
}

export default App;
