import { useState } from 'react'
import axios from "axios"

const MOVIE_API = "https://api.themoviedb.org/3/";
const TRENDING_REQUEST = "trending/all/day";
const SEARCH_REQUEST = "search/movie";
const API_KEY = "acfd2849b5932f9fd4a059b4a871f532";

const useMovies = () => {
  const [requestUrl, setRequestUrl] = useState("");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState(0);

  const setSearch = async (searchTerm) => {
    const requestUrlWithoutPage = searchTerm.length > 0
      ? `${MOVIE_API}${SEARCH_REQUEST}?api_key=${API_KEY}&query=${searchTerm}`
      : `${MOVIE_API}${TRENDING_REQUEST}?api_key=${API_KEY}`;
    setRequestUrl(requestUrlWithoutPage);
    setPage(1);
    try {
      const moviesResult = await axios.get(`${requestUrlWithoutPage}&page=${page}`);
      setMovies(moviesResult.data.results);
      setTotalMovies(moviesResult.data.total_results);
    } catch (e) {
      console.log('Error while fetching data', e);
    }
  };

  const scrollMovies = async () => {
    try {
      const moviesResult = await axios.get(`${requestUrl}&page=${page+1}`);
      setMovies([...movies, ...moviesResult.data.results]);
      setPage(page + 1);
    } catch (e) {
      console.log('Error while fetching more data', e);
    }
  };

  const shouldFetchMore = () => movies.length < totalMovies;

  return [movies, setSearch, scrollMovies, shouldFetchMore];
}

export default useMovies;
