import { Loader } from 'components/Loader/Loader';
import { MoviesItems } from 'components/MoviesItems/MoviesItems';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Section } from 'pages/Home/HomeStyled';
import { ErrorImg } from 'components/Error/ErrorImg';
import { ShowImageSearchEmpty } from 'components/ShowImageSearchEmpty/ShowImageSearchEmpty';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/MovieApi';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorImg, setShowErrorImg] = useState(false);
  const [showImageSearch, setShowImageSearch] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) return;

    const fetchSearchResult = async () => {
      try {
        setIsLoading(true);
        const moviesData = await getSearchMovie(searchQuery);
        if (!moviesData.results.length) {
          setShowImageSearch(true);
          return;
        }
        setMovies(moviesData.results);
      } catch (error) {
        setShowErrorImg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchResult();
  }, [searchQuery]);

  const handleSubmit = query => {
    setSearchParams({ query });
    setMovies([]);
  };

  return (
    <Section>
      <SearchForm onSubmit={handleSubmit} nameButton={'Find Movie'} />

      {showErrorImg && <ErrorImg text="Oops... Something went wrong..." />}
      {isLoading && <Loader />}
      {showImageSearch && (
        <ShowImageSearchEmpty text="Oops... there are no movies matching your search..." />
      )}
      {movies?.length > 0 && <MoviesItems moviesItems={movies} />}
    </Section>
  );
};

export default Movies;
