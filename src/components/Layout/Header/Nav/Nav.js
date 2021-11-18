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
      label: 'About',
      link: null,
      tree: [
        {
          label: 'About Us',
          link: '/about-us',
          branches: null,
        },
        {
          label: 'FAQ',
          link: '/faq',
          branches: null,
        },
      ],
    },
    {
      label: 'Product',
      link: null,
      tree: [
        {
          label: '메뉴1',
          link: null,
          branches: [
            {
              label: '메뉴2',
              link: null,
              branches: [
                {
                  label: '메뉴3',
                  link: '/services/analytics',
                  branches: null,
                },
                {
                  label: '메뉴4',
                  link: '/services/inventory',
                  branches: null,
                },
                {
                  label: '메뉴5',
                  link: '/services/pos',
                  branches: null,
                },
              ],
            },
            {
              label: '메뉴6',
              link: '/services/software',
              branches: null,
            },
          ],
        },
        {
          label: '메슈7',
          link: '/agro',
          branches: null,
        },
        {
          label: '메뉴',
          link: null,
          branches: [
            {
              label: 'Mac',
              link: '/services/enterprise',
              branches: null,
            },
            {
              label: 'Samsung',
              link: '/services/small-business',
              branches: null,
            },
          ],
        },
      ],
    },
    {
      label: 'Contact',
      link: '/contact',
      tree: null,
    },
  ],
};

export default Nav;
