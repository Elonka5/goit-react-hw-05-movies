import { Link, Outlet } from 'react-router-dom';
import {
  Wrapper,
  ImageDetail,
  TitleDescr,
  TitleDescrp,
  ParDescr,
  DescrWrapper,
  AddInfwrap,
  SectionDetails,
  ListInfo,
} from './MovieStyled';
import { Suspense } from 'react';

export const Movie = ({ movie }) => {
  return (
    <SectionDetails>
      <Wrapper>
        <ImageDetail
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
              : `/images/No_Image_Available.jpg`
          }
          alt={movie.title}
        />
        <DescrWrapper>
          <TitleDescr>
            {movie.title} ({movie.release_date.substring(0, 4)})
          </TitleDescr>
          <ParDescr>
            User Score: {Math.round(movie.vote_average * 10)}%
          </ParDescr>
          <TitleDescrp>OverView:</TitleDescrp>
          <ParDescr>{movie.overview}</ParDescr>
          <TitleDescrp>Genres:</TitleDescrp>
          <ParDescr>{movie.genres.map(({ name }) => name).join(', ')}</ParDescr>
        </DescrWrapper>
        <AddInfwrap>
          <TitleDescrp>Additional information</TitleDescrp>
          <ListInfo>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              {' '}
              <Link to="reviews"> Reviews </Link>
            </li>
          </ListInfo>
        </AddInfwrap>
      </Wrapper>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </SectionDetails>
  );
};
