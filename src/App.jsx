import React, { useEffect, useState } from 'react'
import { TextInput, Spinner, Image } from 'grommet'
import { Debounce } from 'react-throttle';
import InfiniteScroll from 'react-infinite-scroll-component';

import './App.css';
import useMovies from './useMovies';
import Movie from './Movie';
import MovieList from './MovieList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [movies, setSearch, scrollMovies, shouldFetchMore] = useMovies();

  useEffect(() => {
    setSearch(searchTerm);
  }, []);

  useEffect(() => {
    if (!selectedMovieId && searchTerm.length > 0 && document.getElementById("search-input").value !== searchTerm) {
      document.getElementById("search-input").value = searchTerm;
    }
  }, [selectedMovieId]);

  if (selectedMovieId) {
    return <Movie movieId={selectedMovieId} back={() => setSelectedMovieId(null)}/>;
  }

  const renderMovies = () => movies.map((movie, index) => (
    <MovieList index={index} movie={movie} setSelectedMovieId={setSelectedMovieId}/>
  ));

  const handleSearch = term => {
    setSearchTerm(term);
    setSearch(term);
  }

  return (
    <div className="box-app">
        <div className="box-item">
          <Debounce time={500} handler='onChange'>
            <TextInput id="search-input" reverse placeholder="Search..." onChange={text => handleSearch(text.target.value)}/>
          </Debounce>
        </div>
          {movies.length > 0 && (
            <div className="box-item">
            <InfiniteScroll
              dataLength={movies.length}
              next={() => scrollMovies()}
              hasMore={shouldFetchMore()}
              loader={<Spinner />}
              endMessage={
                <p style={{ textAlign: 'center' }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              {renderMovies()}
            </InfiniteScroll>
            </div>
          )}
          {movies.length === 0 && (
            <p style={{ textAlign: 'center' }}>
              <b>There is no movies for that search!</b>
            </p>
          )}
    </div>
  )
}

export default App
