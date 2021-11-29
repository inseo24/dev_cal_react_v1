import { React, useEffect, useState } from 'react';
import BoardItem from './BoardItem';
import { SBoardTable, STableHead } from './styles';

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE}/board`)
      .then((res) => res.json())
      .then((res) => {
        setBoardList(res.data);
      });
  }, []);

  return (
    <>
      <SBoardTable>
        <thead>
          <tr>
            <STableHead>No.</STableHead>
            <STableHead>제목</STableHead>
            <STableHead>등록일</STableHead>
          </tr>
        </thead>
        <tbody>
          {boardList.map((board) => (
            <BoardItem key={board.boardId} board={board} />
          ))}
        </tbody>
      </SBoardTable>
    </>
  );
};

export default BoardList;
