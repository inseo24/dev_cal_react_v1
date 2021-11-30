import styled from 'styled-components';

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

export const SModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;
