import React from 'react';
import BoardList from './BoardList';
import { SLeft, SLinkButton, SRight, STitle } from './styles';

const BoardPage = () => {
  return (
    <>
      <SLeft>
        <STitle>Board</STitle>
      </SLeft>
      <SRight>
        <SLinkButton to="/saveForm">작성</SLinkButton>
      </SRight>
      <BoardList />
    </>
  );
};

export default BoardPage;
