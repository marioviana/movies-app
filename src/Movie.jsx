import React, { useEffect } from 'react'
import { Button, Image, Card, CardHeader, CardBody, CardFooter } from "grommet";

import './Movie.css';
import useMovie from './useMovie';

const Movie = (props) => {
  const [movie, setSelectedMovie] = useMovie();

  useEffect(() => {
    setSelectedMovie(props.movieId);
  }, []);

  if (!movie) {
    return <div>There was some problem loading the movie</div>
  }

  return (
    <>
    <div className="back-button">
      <Button label="Back" onClick={() => props.back()} />
    </div>
    <div className="box">
      <Card id="card" width="30em" background="light-1">
        <CardHeader>
          <Image
            fit="cover"
            src={`https://image.tmdb.org/t/p/w185/${movie.backdrop_path}`}
            fallback="https://www.fylehq.com/assets/images/feature-page/no-result-found.svg"
          />
        </CardHeader>
        <CardBody pad="small">
          <p className="movie-title">
            {movie.title || movie.original_title || movie.name || movie.original_name}
          </p>
          <span className="movie-field"><span className="movie-field-title">Release date: </span>{movie.release_date}</span>
          <span className="movie-field"><span className="movie-field-title">Score: </span>{movie.vote_average}</span>
          <span className="movie-field"><span className="movie-field-title">Votes: </span>{movie.vote_count}</span>
          <span className="movie-field"><span className="movie-field-title">Overview: </span>{movie.overview}</span>
        </CardBody>
      </Card>
    </div>
    </>
  )
}

export default Movie
