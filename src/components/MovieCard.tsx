import React from "react";
import { Movie } from "../types";

interface MovieCardProps {
  movie: Movie;
}

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `${IMG_BASE_URL}${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  const ratingDisplay =
    movie.vote_average !== undefined && movie.vote_average !== null
      ? movie.vote_average
      : "N/A";

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} />
      <div className="movie-info">
        <p className="movie-title">{movie.title}</p>
        <div>
          <p className="movie-details">
            Release Date: {movie.release_date || "N/A"}
          </p>
          <p className="movie-details">Rating: {ratingDisplay}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
