import { Link, useLocation } from 'react-router-dom';
import {
  MovieList,
  MovieDescr,
  MovieTitle,
  MovieItem,
  MovieContainer,
} from './MoviesItemsStyled';

export const MoviesItems = ({ moviesItems }) => {
  const location = useLocation();

  return (
    <MovieContainer>
      <MovieList>
        {moviesItems.map(({ poster_path, id, title }) => {
          return (
            <MovieItem key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : `../../images/No-Image-Placeholder.svg`
                  }
                  alt=""
                  width="300"
                />
                <MovieDescr>
                  <MovieTitle>{title}</MovieTitle>
                </MovieDescr>
              </Link>
            </MovieItem>
          );
        })}
      </MovieList>
    </MovieContainer>
  );
};
