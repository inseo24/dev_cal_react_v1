import { React, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BoardItem from './BoardItem';
import { STable, STBody, STH, STHead, STHeadTR } from './styles';

const BoardList = () => {
  const [boardList, setBoardList] = useState([]);
  let state = useSelector((state) => state.ui.menuOpen);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE}/board`)
      .then((res) => res.json())
      .then((res) => {
        setBoardList(res.data);
      });
  }, []);

  return (
    <>
      {!state && (
        <STable>
          <STHead>
            <STHeadTR>
              <STH>No.</STH>
              <STH>제목</STH>
              <STH>등록일</STH>
            </STHeadTR>
          </STHead>
          <STBody>
            {boardList.map((board) => (
              <BoardItem key={board.boardId} board={board} />
            ))}
          </STBody>
        </STable>
      )}
    </>
  );
};

export default BoardList;
