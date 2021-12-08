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
  padding: 10px 15px;
  font-size: 14px;
  margin: 0;
  outline: 0;
  border: 10px solid #f7f7f7;
  left: -10%;
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

export const STableHead = styled.th`
  font-size: 20px;
  text-align: center;
  width: 200px;
  border-bottom: 2px solid #ccc;
`;

export const STableNum = styled.td`
  padding: 0.625em;
  border-top: 1px solid primary;
  text-align: center;
`;

export const STableTitle = styled.td`
  font-size: 16px;
  border-top: 1px solid primary;
  text-align: left;
  text-align: center;

  cursor: pointer;
  :hover {
    color: #bf1650;
  }
`;

export const STableRow = styled.td`
  font-size: 16px;
  border-top: 1px solid primary;
  text-align: center;
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
