import styled from 'styled-components';

export const BtnBack = styled.button`
  position: absolute;
  top: 17%;
  left: 5%;
  font-family: 'Phudu', cursive;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  padding: 1.1em 1em;
  overflow: hidden;
  color: white;
  border: 3px solid white;
  border-left: none;
  border-right: none;
  background: linear-gradient(
        to left,
        white 3px,
        transparent 3px,
        transparent calc(100% - 3px),
        white calc(100% - 3px)
      )
      top left no-repeat,
    linear-gradient(
        to left,
        white 3px,
        transparent 3px,
        transparent calc(100% - 3px),
        white calc(100% - 3px)
      )
      bottom left no-repeat;
  background-size: 100% 1.45em;
  cursor: pointer;
`;
