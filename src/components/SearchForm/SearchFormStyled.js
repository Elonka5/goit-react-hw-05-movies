import styled from 'styled-components';

export const FormSearch = styled.form`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;

  & input {
    background-color: #eee;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    width: 13em;
    border-radius: 1rem;
    color: lightcoral;
    box-shadow: 0 0.4rem #dfd9d9;
    cursor: pointer;
  }

  & input:focus {
    outline-color: lightcoral;
  }

  & button {
    font-family: 'Phudu', cursive;
    font-size: 14px;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    display: inline-block;
    padding: 1.1em 2em;
    text-transform: uppercase;
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
  }
`;
