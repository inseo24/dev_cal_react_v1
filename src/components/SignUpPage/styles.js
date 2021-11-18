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
  padding: calc(${v.smSpacing} - 2px) ${v.lgSpacing};
  border-radius: ${v.borderRadius};
  outline: none;
  border: none;
  margin: 20px 60px 20px 0;
  cursor: pointer;
`;

export const SInput = styled.input`
  background-color: primary;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  display: block;
  width: 100%;
`;
