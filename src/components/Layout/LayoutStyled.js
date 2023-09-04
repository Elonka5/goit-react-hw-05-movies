import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  gap: 20px;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  background-color: #592e3e;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 40px;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  box-shadow: 0 6px 6px -6px #222;
  z-index: 1000;

  > nav {
    display: flex;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  margin: 1em;
  font-family: 'Phudu', cursive;
  font-size: 18px;
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
`;
