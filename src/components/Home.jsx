import React, { useEffect, useState } from 'react';
import axios from 'axios';  
import '../css/home.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

export default function Home() {
  const [movie, setMovie] = useState(null);  

  const APIKEY = process.env.REACT_APP_API_KEY;

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}`);
      
      const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
      
      setMovie(randomMovie);  
    } catch (error) {
      console.error("Failed to fetch data:", error);
      alert("Failed to fetch data");
    }
  };

  useEffect(() => {
    fetchData(); 
  }, []);

  // backdrop image URL
  const imageUrl = movie?.backdrop_path 
    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` 
    : '';  // Fallback if not available

  console.log(movie);

  return (
    <>
      <div
        className='cover'
        style={{
          backgroundSize: 'cover',
          backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',  
          backgroundPosition: 'center center',
          transition: 'background-image 0.5s ease-in-out',  
          height: '100vh',  
          color: 'white'  
        }}
      >
        <div className='cover-info' style={{ padding: '20px' }}>
          <h1>{movie?.title}</h1>
          <p>{movie?.overview}</p>
        </div>
        <div className='buttons'>
          <button className='play-btn'><PlayArrowIcon/> Play</button>
          <button className='info-btn'><InfoIcon/> More Info</button>
        </div>
      </div>
      <h2 className='content'>
      ajkdb
      bwjkbwjkc
      sjkcbwj
      jhvcwej vcwejkv
      cjsvcjhwe</h2>
    </>
  );
}
