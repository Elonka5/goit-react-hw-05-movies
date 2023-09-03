import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MoviesItems } from 'components/MoviesItems/MoviesItems';
import { getTrendingMovies } from 'services/MovieApi';
import { ErrorImg } from 'components/Error/ErrorImg';
import { Section, TextTrending } from './HomeStyled';

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorImg, setShowErrorImg] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const movieList = await getTrendingMovies();
        setMovieList(movieList.results);
      } catch (error) {
        setShowErrorImg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Section>
      <TextTrending>Trending today</TextTrending>
      {showErrorImg && <ErrorImg text="Oops... Something went wrong..." />}
      {isLoading && <Loader />}
      {movieList?.length > 0 && <MoviesItems moviesItems={movieList} />}
    </Section>
  );
};

export default Home;
