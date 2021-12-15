import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { v, b } from '../../styles/variables';

export const SBoardPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - ${v.headerHeight} - ${v.lgSpacing} * 2);
`;

export const SBoardDetailPage = styled.div`
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
  :hover {
    color: white;
    background: #bf1650;
  }
`;

export const SButtonDetail = styled.button`
  text-decoration: none;
  color: primary;
  background: ${({ theme }) => theme.primary};
  padding: calc(${v.smSpacing} - 2px) ${v.lgSpacing};
  border-radius: ${v.borderRadius};
  outline: none;
  border: none;
  float: right;

  cursor: pointer;
  :hover {
    color: white;
    background: #bf1650;
  }
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

export const SInputComment = styled.input`
  background-color: primary;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: calc(${v.smSpacing} - 2px) ${v.lgSpacing};
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

export const SComment = styled.p``;

export const STable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-radius: ${v.borderRadius};
  overflow: hidden;
`;

export const STHead = styled.thead`
  position: sticky;
  z-index: 100;
`;

export const STHeadTR = styled.tr`
  background: ${({ theme }) => theme.bg};
`;

export const STH = styled.th`
  font-weight: normal;
  padding: ${v.smSpacing};
  color: ${({ theme }) => theme.text};
  font-weight: 600;
  font-size: 15px;

  :not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.bg2};
  }

  :first-of-type {
    width: 1%;
    white-space: nowrap;
  }
`;

export const STHNB = styled.th`
  font-weight: normal;
  padding: ${v.smSpacing};
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  font-size: 15px;

  :not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.bg2};
  }

  :first-of-type {
    width: 1%;
    white-space: nowrap;
  }
`;

export const STBody = styled.tbody``;

export const STR = styled.tr`
  background: white;
`;

export const STD = styled.td`
  padding: ${v.smSpacing};
  border: 1px solid ${({ theme }) => theme.bg2};
  font-size: 14px;
  color: black;
`;

export const STDetail = styled.td`
  padding: ${v.smSpacing};
  font-size: 14px;
  word-break: break-all;
  width: 500px;
  text-align: left;
  color: black;
`;

export const STDetailButton = styled.td`
  padding: ${v.smSpacing};
  font-size: 14px;
  width: 500px;
  word-break: break-all;
  color: black;
  text-align: right;
`;

export const STDTitle = styled.td`
  padding: ${v.smSpacing};
  width: 60%;
  border: 1px solid ${({ theme }) => theme.bg2};
  font-size: 14px;
  color: black;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;
