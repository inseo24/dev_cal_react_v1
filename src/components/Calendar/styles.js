import styled from 'styled-components';
import { v } from '../../styles/variables';

export const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 35px;
  height: 30px;
  background: #000;
  color: #fff;
  cursor: pointer;
  border: 0;
`;

export const SSCButton = styled.button`
  background-color: primary;
  outline: 0;
  border: 0;
  border-radius: ${v.borderRadius};
  cursor: pointer;
  text-align: center;
  color: #666;
  padding: 5px 5px;
  font-size: 16px;
`;

export const SModalMain = styled.section`
  width: 380px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  background: white;
`;

export const SText = styled.p`
  text-align: center;
  color: #666;
  padding: 5px 20px;
  font-size: 16px;
`;

export const SDiv = styled.div`
  text-align: center;
  color: #666;
  padding: 5px 20px;
  font-size: 16px;
`;

export const SLink = styled.a`
  text-decoration: none;
`;
