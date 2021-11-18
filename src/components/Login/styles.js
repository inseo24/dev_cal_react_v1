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
  margin-top: 8%;
  border-radius: ${v.borderRadius};
  outline: none;
  border: none;
`;

export const SInput = styled.input`
  font-size: 18px;
  padding: 10px;
  background: ${({ theme }) => theme.secondary};
  border: none;
  color: primary;
  border-radius: 3px;
`;
