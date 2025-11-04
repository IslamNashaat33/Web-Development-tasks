import React, { useState } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import "./App.css";

export default function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, { id: Date.now(), ...movie }]);
  };

  const removeMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
  };

  return (
    <div className="container">
      <h1>🎬 My Movies Watch List</h1>
      <MovieForm onAdd={addMovie} />
      <MovieList movies={movies} onRemove={removeMovie} />
    </div>
  );
}
