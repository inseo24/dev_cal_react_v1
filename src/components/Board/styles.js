import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { v, b } from '../../styles/variables';

export const SBoardPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${v.headerHeight} - ${v.lgSpacing} * 2);
`;

export const STitle = styled.h1`
  color: ${({ theme }) => theme.primary};
  padding-top: 5%;
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

export const SLeft = styled.div``;

export const SCenter = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
  display: none;
  @media ${b.md} {
    display: flex;
  }
`;

export const SRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const SLinkButton = styled(Link)`
  text-decoration: none;
  color: primary;
  background: ${({ theme }) => theme.primary};
  padding: calc(${v.smSpacing} - 2px) ${v.lgSpacing};
  border-radius: ${v.borderRadius};
  margin: 5px 0 5px 0;
  :hover {
    color: white;
  }
`;

export const SBoardTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  margin-top: 3%;
  width: 100%;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
`;

export const STableHead = styled.th`
  font-size: 1.2em;
  font-weight: 400;
  color: primary;
  text-align: center;
  width: 200px;
  border-bottom: 2px solid #ccc;
`;

export const STableNum = styled.td`
  font-size: 16px;
  padding: 0.625em;
  border-top: 1px solid primary;
  text-align: center;
`;

export const STableTitle = styled.td`
  font-size: 16px;
  border-top: 1px solid primary;
  text-align: left;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const STableTime = styled.td`
  font-size: 16px;
  border-top: 1px solid primary;
  text-align: center;
`;

export const SComment = styled.p``;
