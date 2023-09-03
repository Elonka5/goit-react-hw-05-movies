import styled from 'styled-components';

export const ReviewWrap = styled.div`
  display: flex;
  max-width: 1280px;
  justify-content: space-between;
  padding: 20px 62px;
  gap: 40px;

  & h3 {
    font-family: 'Phudu', cursive;
    color: #fff;
    font-size: 24px;
    margin-bottom: 10px;
  }

  & ul {
    background-color: #592e3e;
    opacity: 0.5;
    padding: 20px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  }

  & p {
    font-family: 'Phudu', cursive;
    color: #fff;
    font-size: 18px;
    margin-bottom: 20px;
    opacity: 0.5;
    line-height: 1.3;
  }
`;
