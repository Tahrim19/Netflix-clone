const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTVShows:`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,

    fetchComedy:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchAction:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHorror:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
    fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
}

export default requests;




//https://api.themoviedb.org/3/discover/movie?api_key=9c054a8b4bc0794b4716b90bed16c6fa
// fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,