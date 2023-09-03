import React, { useState } from 'react';
import { Layout } from 'components/Header/Layout';
import { MainImageAndText } from 'components/MainImageAndText/MainImageAndText';
import { Button } from 'components/MainImageAndText/Button.styled';

const MainImage = () => {
  const [showLayout, setShowLayout] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(true);

  const startAnimation = () => {
    setShowLayout(true);
    setIsButtonActive(false);
  };

  return (
    <div className="app">
      <div className={`content ${showLayout ? 'slide-left' : ''}`}>
        <MainImageAndText />
      </div>
      {showLayout && <Layout />}
      {isButtonActive && !showLayout && (
        <Button onClick={startAnimation}>Start</Button>
      )}
    </div>
  );
};

export default MainImage;
// {
//   isButtonActive && !showLayout && (
//     <Button onClick={startAnimation}>Start</Button>
//   );
// }

// const App = () => {
//   const [showHeader, setShowHeader] = useState(false); // Стан для показу header
//   const [startClicked, setStartClicked] = useState(false); // Стан для відображення кнопки і тексту

//   const startAnimation = () => {
//     setStartClicked(true); // Зміна стану після натискання кнопки Start
//     setTimeout(() => {
//       setShowHeader(true); // Зміна стану для показу header після анімації
//     }, 500); // Час анімації в мілісекундах
//   };

//   return (
//     <div className="app">
//       <div className={`content ${startClicked ? 'slide-left' : ''}`}>
//         {startClicked ? null : <MainImageAndText />}
//       </div>
//       {showHeader && <HeaderWithMain />}
//       {!showHeader && !startClicked && (
//         <button onClick={startAnimation}>Start</button>
//       )}
//     </div>
//   );
// };

// const MainImageAndText = () => {
//   return (
//     <div className="main-image-and-text">
//       <img src="your-image-url.jpg" alt="Main" />
//       <p>Your text goes here</p>
//     </div>
//   );
// };

// const HeaderWithMain = () => {
//   return (
//     <div className="header">
//       <main>{/* Вміст header з main */}</main>
//     </div>
//   );
// };

// export const HeaderWithMain = () => {
//   return (
//     <div className="header">
//       <main>{/* Вміст header з main */}</main>
//     </div>
//   );
// };

// export const ImageDefault = ({ text }) => {
//   return (
//     <Wrapper>
//       <Text>{text}</Text>
//       <Hero src={minions} alt="Minions" />
//     </Wrapper>
//   );
// };
