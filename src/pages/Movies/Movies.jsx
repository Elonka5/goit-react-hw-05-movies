import { Loader } from 'components/Loader/Loader';
import { MoviesItems } from 'components/MoviesItems/MoviesItems';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Section } from 'pages/Home/HomeStyled';
import { ErrorImg } from 'components/Error/ErrorImg';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/MovieApi';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorImg, setShowErrorImg] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (!searchQuery) return;

    const fetchSearchResult = async () => {
      try {
        setIsLoading(true);
        const moviesData = await getSearchMovie(searchQuery);

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
  };

  //   const handlerSubmit = evt => {
  //     evt.preventDefault();
  //     const searchValue = evt.target.children.search.value;
  //     searchValue.trim() !== '' && setSearchParams({ query: searchValue });
  //   };

  return (
    <Section>
      <SearchForm
        onSubmit={handleSubmit}
        nameButton={'Find Movie'}
      ></SearchForm>

      {showErrorImg && <ErrorImg text="Oops... Something went wrong..." />}
      {isLoading && <Loader />}

      {movies?.length > 0 && <MoviesItems moviesItems={movies} />}
    </Section>
  );
};

export default Movies;
