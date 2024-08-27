import React, { useEffect, useState } from 'react';
import axios from 'axios';  
import '../css/home.css';

export default function Home() {
  const [movie, setMovie] = useState(null);  

  const APIKEY = process.env.REACT_APP_API_KEY;

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}`);
      
      // Select a random movie from the list or the first one (for a different movie each time you refresh)
      const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
      
      setMovie(randomMovie);  // Set the selected movie in state
    } catch (error) {
      console.error("Failed to fetch data:", error);
      alert("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  // Construct the backdrop image URL
  const imageUrl = movie?.backdrop_path 
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` 
    : '';  // Fallback if no backdrop is available

  console.log(movie);

  return (
    <div>
      <div
        className='cover'
        style={{
          backgroundSize: 'cover',
          backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',  // Dynamically set the background image
          backgroundPosition: 'center center',
          transition: 'background-image 0.5s ease-in-out',  // Optional smooth transition
          height: '100vh',  // Ensure the container has height
          color: 'white'  // Set text color to white for better visibility
        }}
      >
        <div className='cover-info' style={{ padding: '20px' }}>
          {/* Display the title and description */}
          <h1>{movie?.title}</h1>
          <p>{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
}
