import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Header/Layout';
// import { MainImage } from 'pages/MainImage/MainImage';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import(`components/Cast/Cast`));
const Reviews = lazy(() => import(`components/Reviews/Reviews`));
// const MainImage = lazy(() => import('pages/MainImage/MainImage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};

// const Home = easyLazy('Home/Home');
// const Movies = easyLazy('Movies/Movies');
// const MovieDetails = easyLazy('MovieDetails/MovieDetails');
// const Cast = easyLazy('Cast/Cast');
// const Reviews = easyLazy('Reviews/Reviews');
