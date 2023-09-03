import { Outlet, Link } from 'react-router-dom';
import { Navigation, Header, NavLinkStyled } from './LayoutStyled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <Navigation>
          <Link to="/" end="true">
            <span className="span-image"></span>
          </Link>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </Navigation>
      </Header>

      <Outlet />
    </div>
  );
};
