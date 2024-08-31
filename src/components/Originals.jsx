// import React, { useEffect } from 'react'
// import requests from '../Requests'
// import axios from 'axios'

// export default function MoviesList() {
//   const fetchOrignials =async () => {
//     try{
//       const response = await axios.get(requests.fetchNetflixOriginals)
//       console.log(response)
//     }
//     catch(error){
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     fetchOrignials()
//   },[])

//   return (
//     <div className='originals'>
//         hello
//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';  
import '../css/home.css';
import requests from '../Requests';
import '../css/originals.css'

export default function Originals() {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className='originals'>
      <h2>Netflix Originals</h2>
      <div className='originals-row'>
        {movies.map(movie => (
          <div key={movie.id} className='originals-item'>
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
