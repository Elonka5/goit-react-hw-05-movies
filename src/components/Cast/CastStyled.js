import styled from 'styled-components';

export const CastWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  justify-content: space-between;
  padding: 0 64px;
  gap: 30px;

  & li {
    max-width: 200px;
    height: 390px;
    background-color: #592e3e;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  }

  & p {
    font-family: 'Phudu', cursive;
    color: #fff;
  }

  & p:not(:last-child) {
    margin-bottom: 8px;
  }

  /* & img {
    max-width: 200px;
    height: auto;
  } */
`;

export const CharacterWrap = styled.div`
  padding: 10px;
`;
