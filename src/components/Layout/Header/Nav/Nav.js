import React, { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';
import { SNav } from './styles';
import {
  SNavLinkContainer,
  SNavLink,
  SNavLabelContainer,
  SNavLabel,
  SArrowContainer,
  SArrowIcon,
} from './styles';

const Nav = ({ navLinks, menuToggleHandler }) => {
  const [openDropDown, setOpenDropDown] = useState(null);

  const openDropDownHandler = (label) => {
    if (label === openDropDown) return setOpenDropDown(null);
    setOpenDropDown(label);
  };

  const onSelectCallback = () => {
    if (menuToggleHandler) menuToggleHandler();
    setOpenDropDown(null);
  };

  return (
    <SNav>
      {navLinks.map(({ label, link, tree }, index) => {
        const isOpen = openDropDown === label;

        return (
          <SNavLinkContainer key={index}>
            {link && <SNavLink to={link}>{label}</SNavLink>}
            {!link && (
              <SNavLabelContainer onClick={() => openDropDownHandler(label)}>
                <SNavLabel isOpen={isOpen}>{label}</SNavLabel>
                <SArrowContainer isOpen={isOpen}>
                  <SArrowIcon />
                </SArrowContainer>
              </SNavLabelContainer>
            )}
            {isOpen && (
              <Dropdown tree={tree} onSelectCallback={onSelectCallback} />
            )}
          </SNavLinkContainer>
        );
      })}
    </SNav>
  );
};

Nav.defaultProps = {
  navLinks: [
    {
      label: 'Calendar',
      link: '/event',
      tree: null,
    },
    {
      label: 'Board',
      link: '/board',
      tree: null,
    },
    {
      label: 'MyPage',
      link: '/mypage',
      tree: null,
    },
  ],
};

export default Nav;
