import { useState } from 'react'
import axios from "axios"

const MOVIE_API = "https://api.themoviedb.org/3/";
const MOVIE_REQUEST = "movie/";
const API_KEY = "acfd2849b5932f9fd4a059b4a871f532";

const useMovie = () => {
  const [movie, setMovie] = useState(null);

  const setSelectedMovie = async (movieId) => {
    const requestMovieUrl = `${MOVIE_API}${MOVIE_REQUEST}${movieId}?api_key=${API_KEY}`;
    try {
      const movieResult = await axios.get(requestMovieUrl);
      setMovie(movieResult.data);
    } catch (e) {
      console.log('Error while fetching single movie');
    }
  };

  return [movie, setSelectedMovie];
}

export default useMovie;
