import React from "react";
import { Movie } from "../types";
import MovieCard from "./MovieCard";

interface MovieGridProps {
  movies: Movie[];
}

const MovieGrid: React.FC<MovieGridProps> = ({ movies }) => {
  return (
    <main id="movie-grid" className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </main>
  );
};

export default MovieGrid;
