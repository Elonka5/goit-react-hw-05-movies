import image from '../../images/ticket-2974645.jpg';
import { MainHero, MainImage, MainText } from './MainImageAndText.styled';

export const MainImageAndText = () => {
  return (
    <MainHero className="main-image-and-text container">
      <MainImage src={image} alt="Main" />
      <MainText className="fade-in-text">
        Discover Your Movie Universe with Us!
      </MainText>
    </MainHero>
  );
};
