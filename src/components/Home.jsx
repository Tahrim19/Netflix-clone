import React, { useEffect, useState } from 'react';
import axios from 'axios';  
import '../css/home.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import requests from '../Requests';
import Movies from './Movies';

export default function Home() {
  const [movie, setMovie] = useState(null);
  const [showFullText, setShowFullText] = useState(false);  

  const fetchData = async () => {
    try {
      const response = await axios.get(requests.fetchMovies);
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
    : ''; 

  const truncateText = (text, maxLength) => {
    if (text?.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

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
          <h3>{movie?.title}</h3>
          <p>
            {showFullText ? movie?.overview : truncateText(movie?.overview, 150)}
            {movie?.overview?.length > 150 && (
              <span 
                style={{ color: '#e50914', cursor: 'pointer', fontWeight: 'bold'}}
                onClick={() => setShowFullText(!showFullText)}
              >
                {showFullText ? ' Show Less' : ' Read More'}
              </span>
            )}
          </p>
        </div>

        <div className='buttons'>
          <button className='play-btn'><PlayArrowIcon/>Play</button>
          <button className='info-btn'><InfoIcon/>More Info</button>
        </div>
      </div>
      <div className="spacer"></div>
      <div className='content'>
      <Movies
      fetchUrl={requests.fetchNetflixOriginals} 
      heading="Netflix Originals" 
    />
    <Movies
      fetchUrl={requests.fetchTrending} 
      heading="Trending Now" 
    />
    <Movies 
      fetchUrl={requests.fetchPopular} 
      heading="Popular Now" 
    />
    <Movies 
      fetchUrl={requests.fetchTVShows} 
      heading="TV Shows" 
    />
    <Movies 
      fetchUrl={requests.fetchComedy} 
      heading="Comedies" 
    />
    <Movies 
      fetchUrl={requests.fetchAction} 
      heading="Action Movies" 
    />
    <Movies 
      fetchUrl={requests.fetchDocumentaries} 
      heading="Documentaries" 
    />
    <Movies 
      fetchUrl={requests.fetchHorror} 
      heading="Horror Movies" 
    />
      </div>
    </>
  );
}
