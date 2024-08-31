import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';  
import '../css/home.css';
import requests from '../Requests';
import '../css/originals.css';

export default function Originals() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();  

  const fetchOriginals = async () => {
    try {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      alert("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchOriginals(); 
  }, []);

  // Function to handle click and navigate to movie details
  const handleMovieClick = (movie) => {
    console.log(movie);
    navigate(`/movie/${movie.id}`, { state: { movie } });  // Navigate to dynamic route with movie ID and data
  };

  return (
    <div className='originals'>
      <h2>Netflix Originals</h2>
      <div className='originals-row'>
        {movies.map(movie => (
          <div 
            key={movie.id} 
            className='originals-item'
            onClick={() => handleMovieClick(movie)}  
          >
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
