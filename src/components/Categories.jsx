import React from 'react';
import requests from '../Requests';
import Movies from './Movies';

const Categories = () => (
  <div>
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
);

export default Categories;
