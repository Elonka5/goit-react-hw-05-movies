import styled from 'styled-components';

export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(185, 228, 201, 0.2);
`;

export const LoaderImage = styled.img`
  position: absolute;
  top: 44%;
  left: 47%;
  margin: 0 auto;
  width: 6vw;
  height: auto;
  object-fit: contain;
  object-position: center;
`;
