import React from 'react'
import { Image } from 'grommet'

import './App.css';

const POSTER_URL = "https://image.tmdb.org/t/p/w185/"

const App = (props) => {
  const { movie, index, setSelectedMovieId } = props;
  return (
    <div key={index} className="movies" onClick={() => setSelectedMovieId(movie.id)}>
      <div className="movies-image">
        <Image
          fit="cover"
          src={`${POSTER_URL}${movie.poster_path}`}
          fallback="https://www.fylehq.com/assets/images/feature-page/no-result-found.svg"
          className="image"
        />
      </div>
      <div className="movies movies-description">
        <p className="movies-title">
          {movie.title || movie.original_title || movie.name || movie.original_name}
        </p>
        <p className="movies-overview">
        {movie.overview}
        </p>
      </div>
    </div>
  )
}

export default App
