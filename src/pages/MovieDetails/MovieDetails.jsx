import { useEffect, useState, useRef } from 'react';
import { Loader } from 'components/Loader/Loader';
import { ErrorImg } from 'components/Error/ErrorImg';
import { Movie } from 'components/Movie/Movie';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getDetailsMovie } from 'services/MovieApi';
import { BtnBack } from './MovieDetailsStyled';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';

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

      <Link to={backLink.current ?? '/'}>
        {' '}
        <BtnBack type="button">Go back</BtnBack>
      </Link>

      {movie && <Movie movie={movie} />}
      {/* <Cast />
      <Reviews /> */}
    </div>
  );
};

export default MovieDetails;
