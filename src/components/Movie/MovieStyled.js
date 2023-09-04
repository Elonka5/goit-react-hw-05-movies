import styled from 'styled-components';

export const SectionDetails = styled.section`
  padding: 198px 10px 50px;
`;

export const Wrapper = styled.div`
  display: flex;
  max-width: 1280px;
  justify-content: space-between;
  padding: 0 60px;
  gap: 40px;
  position: relative;
  margin-bottom: 40px;
`;

export const ImageDetail = styled.img`
  height: 500px;
`;

export const TitleDescr = styled.h2`
  font-family: 'Phudu', cursive;
  color: #fff;
  font-size: 28px;
  margin-bottom: 26px;
`;

export const TitleDescrp = styled.h3`
  font-family: 'Phudu', cursive;
  color: #fff;
  font-size: 28px;
  margin-bottom: 26px;
`;

export const ParDescr = styled.p`
  font-family: 'Phudu', cursive;
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
  opacity: 0.5;
`;

export const DescrWrapper = styled.div`
  min-width: 800px;
`;

export const AddInfwrap = styled.div`
  position: absolute;
  top: 74%;
  left: 31%;
`;

export const ListInfo = styled.ul`
  display: flex;
  gap: 20px;

  & li {
    font-family: 'Phudu', cursive;
    font-size: 18px;
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
  }
`;
