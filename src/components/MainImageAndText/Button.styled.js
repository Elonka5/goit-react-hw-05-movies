import styled from 'styled-components';

export const Button = styled.button`
  margin: 1em;
  font-family: arial;
  text-decoration: none;
  position: absolute;
  top: 60%;
  right: 44%;
  display: inline-block;
  padding: 1.1em 5em;
  text-transform: uppercase;
  overflow: hidden;
  color: #fff;
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
