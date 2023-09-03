import { useEffect, useState } from 'react';
import { getRequestReviews } from 'services/MovieApi';
import { Loader } from 'components/Loader/Loader';
import { ErrorImg } from 'components/Error/ErrorImg';
import { useParams } from 'react-router-dom';
import { ReviewWrap } from './ReviewsStyled';

const Reviews = () => {
  const [reviewList, setReviewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showErrorImg, setShowErrorImg] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const revList = await getRequestReviews(movieId);
        setReviewsList(revList.results);
      } catch (error) {
        setShowErrorImg(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    movieId && fetchReviews();
  }, [movieId]);

  return (
    <ReviewWrap>
      {showErrorImg && <ErrorImg text="Something goes wrong..." />}
      {isLoading && <Loader />}

      {reviewList?.length > 0 ? (
        <ul>
          {reviewList.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ReviewWrap>
  );
};

export default Reviews;
