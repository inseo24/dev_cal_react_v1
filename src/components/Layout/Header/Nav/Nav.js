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
          label: '여성의류',
          link: null,
          branches: [
            {
              label: '상의',
              link: null,
              branches: [
                {
                  label: '블라우스',
                  link: '/services/analytics',
                  branches: null,
                },
                {
                  label: '티셔츠',
                  link: '/services/inventory',
                  branches: null,
                },
                {
                  label: '니트',
                  link: '/services/pos',
                  branches: null,
                },
              ],
            },
            {
              label: '하의',
              link: '/services/software',
              branches: null,
            },
          ],
        },
        {
          label: '남성의류',
          link: '/agro',
          branches: null,
        },
        {
          label: '전자제품',
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
