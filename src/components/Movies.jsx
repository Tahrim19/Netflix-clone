import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';  
import '../css/originals.css';

export default function Movies({fetchUrl, heading}) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();  

  const fetchMovies = async () => {
    try {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchMovies(); 
  }, []);

  // Function to handle click and navigate to movie details
  const handleMovieClick = (movie) => {
    console.log(movie);
    navigate(`/movie/${movie.id}`, { state: { movie } });  // Navigate to dynamic route with movie ID and data
  };

  return (
    <div className='originals'>
      <h2>{heading}</h2>
      <div className='originals-row'>
        {movies.map(movie => (
          <div 
            key={movie.id} 
            className='originals-item'
            onClick={() => handleMovieClick(movie)}  
          >
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
