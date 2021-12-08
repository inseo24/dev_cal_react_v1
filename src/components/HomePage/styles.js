import styled from 'styled-components';

import { v } from '../../styles/variables';

export const SHomePage = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - ${v.headerHeight} - ${v.lgSpacing} * 2);
`;

export const STitle = styled.h1`
  color: ${({ theme }) => theme.primary};
  margin-top: 7vh;
`;

export const SSpan = styled.span`
  color: ${({ theme }) => theme.primary};
  margin-top: 30px;
  display: block;
  font-size: large;
  ::before {
    display: inline;
    content: '⚠ ';
  }
`;

export const SInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 120%;
  padding: 10px 20px;
  font-size: 14px;
  margin: 0;
  outline: 0;
  border: 10px solid #f7f7f7;
  left: -6%;
  position: relative;
  top: 10px;
  border-radius: 5px;
  font-size: 30px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
`;

export const SLabel = styled.label``;

export const SForm = styled.form`
  display: flex;
  justify-content: center;
  max-width: 100%;
  margin: 30px;
`;

export const SButton = styled.button`
  margin-top: 20px;
  text-decoration: none;
  color: primary;
  background: ${({ theme }) => theme.primary};
  text-transform: uppercase;
  border: none;
  width: 100px;
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

export const SALink = styled.a`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  padding: 10px 50px;
  margin-bottom: 10px;
  font-size: 15px;

  :hover {
    color: #bf1650;
  }
`;

export const SModalTitle = styled.p`
  font-size: 20px;
  color: black;
  text-align: center;
`;

export const SModalText = styled.p`
  font-size: 15px;

  color: black;
  padding-bottom: 3%;
  padding-top: 2%;
`;

export const SDiv = styled.div`
  margin-top: 50px;
  color: ${({ theme }) => theme.text2};
`;

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
