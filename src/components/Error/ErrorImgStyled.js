import styled from 'styled-components';

export const ErrorBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

export const ErrorImage = styled.img`
  position: absolute;
  top: 65%;
  left: 42%;
  margin: 0 auto;
  width: 15vw;
  height: auto;
  object-fit: contain;
  object-position: center;
`;

export const ErrorText = styled.p`
  font-size: 28px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Phudu', cursive;
  color: #fff;
`;
