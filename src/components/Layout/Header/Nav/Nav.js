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
        {
          label: 'Legal',
          link: null,
          branches: [
            {
              label: 'Terms of Service',
              link: '/terms-of-service',
              branches: null,
            },
            {
              label: 'Privacy Policy',
              link: '/privacy-policy',
              branches: null,
            },
            {
              label: 'Return Policy',
              link: '/return-policy',
              branches: null,
            },
          ],
        },
      ],
    },
    {
      label: 'Services',
      link: null,
      tree: [
        {
          label: 'Financial',
          link: null,
          branches: [
            {
              label: 'Tools',
              link: null,
              branches: [
                {
                  label: 'Analytics',
                  link: '/services/analytics',
                  branches: null,
                },
                {
                  label: 'Inventory',
                  link: '/services/inventory',
                  branches: null,
                },
                {
                  label: 'POS',
                  link: '/services/pos',
                  branches: null,
                },
              ],
            },
            {
              label: 'Software',
              link: '/services/software',
              branches: null,
            },
          ],
        },
        {
          label: 'Agro',
          link: '/agro',
          branches: null,
        },
        {
          label: 'Pricing',
          link: null,
          branches: [
            {
              label: 'Enterprise',
              link: '/services/enterprise',
              branches: null,
            },
            {
              label: 'Small Business',
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
