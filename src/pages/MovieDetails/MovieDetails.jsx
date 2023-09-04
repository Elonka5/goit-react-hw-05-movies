import { useEffect, useState, useRef } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ErrorImg } from 'components/Error/ErrorImg';
import { Movie } from 'components/Movie/Movie';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getDetailsMovie } from 'services/MovieApi';
import { TextBack } from './MovieDetailsStyled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorImg, setShowErrorImg] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const getmov = await getDetailsMovie(movieId);
        setMovie(getmov);
      } catch (error) {
        setShowErrorImg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    movieId && fetchMovieDetails();
  }, [movieId]);
  return (
    <div>
      {showErrorImg && <ErrorImg text="Oops... Something went wrong..." />}
      {isLoading && <Loader />}

      <Link to={backLink.current}>
        {' '}
        <TextBack>Go back</TextBack>
      </Link>
      {movie && <Movie movie={movie} />}
    </div>
  );
};

export default MovieDetails;
