import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getCreditsMovie } from 'services/MovieApi';
import { ErrorImg } from 'components/Error/ErrorImg';
import { CastWrapper, CharacterWrap } from './CastStyled';
import noavaliableimg from '../../images/No_Image_Available.jpg';

const Cast = () => {
  const [castList, setCastList] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorImg, setShowErrorImg] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const casList = await getCreditsMovie(movieId);
        setCastList(casList.cast);
      } catch (error) {
        setShowErrorImg(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);
  return (
    <div>
      {showErrorImg && <ErrorImg text="Something goes wrong..." />}
      {isLoading && <Loader />}

      {castList?.length > 0 && (
        <CastWrapper>
          {castList.map(cast => {
            return (
              <li key={cast.id}>
                <img
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                      : `${noavaliableimg}`
                  }
                  alt={cast.name}
                  width="200px"
                  height="300px"
                />
                <CharacterWrap>
                  <p>{cast.name}</p>
                  <p>Character: {cast.character}</p>
                </CharacterWrap>
              </li>
            );
          })}
        </CastWrapper>
      )}
    </div>
  );
};

export default Cast;
