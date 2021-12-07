import styled from 'styled-components';

import { v } from '../../styles/variables';

export const SPage = styled.div`
  justify-content: center;
  height: calc(100vh - ${v.headerHeight} - ${v.lgSpacing} * 2);
`;

export const SButton = styled.button`
  text-decoration: none;
  color: primary;
  background: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 13px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 5px;
  letter-spacing: 5px;
  cursor: pointer;
  :hover {
    color: white;
    background: #bf1650;
  }
`;

export const SSpan = styled.span`
  color: ${({ theme }) => theme.primary};

  ::before {
    display: inline;
    content: '⚠ ';
  }
`;

export const SInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const SLabel = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
`;

export const SForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;
