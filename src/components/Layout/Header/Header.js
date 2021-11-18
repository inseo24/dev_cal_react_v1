import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../../app/slices/uiSlice';
import Switch from './Switch';
import {
  SCenter,
  SCloseIcon,
  SCTAButton,
  SHeader,
  SHeaderFixed,
  SHeaderHeight,
  SLeft,
  SLogo,
  SLogoLink,
  SMenu,
  SMenuIcon,
  SMenuToggleButton,
  SRight,
  Sbutton,
} from './styles';
import Nav from './Nav/Nav';

const Header = () => {
  const dispatch = useDispatch();
  const { menuOpen } = useSelector((state) => state.ui);

  const menuToggleHandler = () => {
    dispatch(uiActions.menuToggle());
  };
  const menuCloseHandler = () => {
    if (menuOpen) dispatch(uiActions.menuClose());
  };

  const toggleThemeHandler = () => {
    dispatch(uiActions.toggleTheme());
  };

  return (
    <>
      <SHeaderHeight />
      <SHeaderFixed>
        <SHeader>
          <SLeft>
            <SLogoLink to="/" onClick={menuCloseHandler}>
              <SLogo />
            </SLogoLink>
          </SLeft>
          <SCenter>
            <Nav />
          </SCenter>
          <SRight>
            <SCTAButton to="/login">Login</SCTAButton>
            <Sbutton onClick={toggleThemeHandler}>
              <Switch />
            </Sbutton>
            <SMenuToggleButton onClick={menuToggleHandler}>
              {!menuOpen ? <SMenuIcon /> : <SCloseIcon />}
            </SMenuToggleButton>
          </SRight>
        </SHeader>
      </SHeaderFixed>
      <SMenu style={menuOpen ? { left: 0 } : {}}>
        <Nav menuToggleHandler={menuToggleHandler} />
      </SMenu>
    </>
  );
};

export default Header;
