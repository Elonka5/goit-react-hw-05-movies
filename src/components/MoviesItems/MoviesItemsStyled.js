import styled from 'styled-components';

export const MovieContainer = styled.div`
  max-width: 1380px;
  padding: 0 50px;
  margin: 0;
`;

export const MovieList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const MovieItem = styled.li`
  position: relative;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const MovieDescr = styled.div`
  align-items: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
  gap: 25px;
  display: flex;
  position: absolute;
  bottom: 0px;
  width: 100%;
`;

export const MovieTitle = styled.p`
  font-family: 'Phudu', cursive;
  color: #f0f8ff;
  margin: 0;
  padding: 16px 5px;
  text-align: center;
`;
