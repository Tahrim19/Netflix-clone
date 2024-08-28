const API_KEY = REACT_APP_API_KEY;
const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTVShows:`tv/popular?api_key=${API_KEY}&language=en-US&page=1`,

    fetchComedy:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchAction:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHorror:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    
}

export default requests;




//https://api.themoviedb.org/3/discover/movie?api_key=9c054a8b4bc0794b4716b90bed16c6fa