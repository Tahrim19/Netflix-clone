import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import '../css/movieDetail.css';

export default function MovieDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { movie } = location.state || {};

  if (!movie) {
    return <div className="movie-detail-container">No movie data available for ID: {id}</div>;
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h2 className="movie-title">{movie.original_name}</h2>

        <p className="movie-overview">{movie.overview}</p>
        <p className="movie-extra">Release Date: {movie.first_air_date}</p>
        <p className="movie-extra">Rating: {movie.vote_average}</p>
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}
