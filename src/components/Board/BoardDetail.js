import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { boardDeleteAsync } from '../../app/slices/boardSlice';
import { commentPostAsync } from '../../app/slices/commentSlice';
import CommentList from './Comment';
import {
  SBoardDetailPage,
  SBoardPage,
  SButton,
  SButtonDetail,
  SInput,
  SInputComment,
  SLeft,
  STable,
  STBody,
  STD,
  STDetail,
  STDetailButton,
  STH,
  STHead,
  STHeadTR,
  STHNB,
  STitle,
  STR,
} from './styles';

const BoardDetail = () => {
  const [board, setBoard] = useState({
    boardId: '',
    name: '',
    title: '',
    content: '',
    createdTime: '',
    imgUrl: '',
  });

  const [name, setName] = useState('');

  const history = useHistory();

  const [comment, setComment] = useState('');
  let headers = new Headers({
    'Content-Type': 'application/json',
  });

  const [commentList, setCommentList] = useState([]);

  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  headers.append('Authorization', 'Bearer ' + accessToken);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_BASE}/comment/` +
        window.location.pathname.split('/')[2],
      {
        method: 'GET',
        headers: headers,
      },
    )
      .then((res) => res.json())
      .then((res) => {
        setCommentList(res.data);
        if (
          localStorage.getItem('user') === null ||
          localStorage.getItem('user') === ''
        ) {
          alert('로그인을 해주세요.');
        }
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE}` + window.location.pathname, {
      method: 'GET',
      headers: headers,
    })
      .then((res) => res.json())
      .then((res) => {
        setBoard(res.data[0]);
        setName(res.data[0].userId.name);

        if (
          localStorage.getItem('user') === null ||
          localStorage.getItem('user') === ''
        ) {
          alert('로그인을 해주세요.');
        }
      });
  }, []);

  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      commentPostAsync({
        comment: comment,
        boardId: window.location.pathname.split('/')[2],
      }),
    );
  };

  const detlteButton = async (e) => {
    const answer = window.confirm('글을 삭제하시겠습니까?');

    if (answer) {
      e.preventDefault();
      dispatch(
        boardDeleteAsync({
          comment: comment,
          boardId: window.location.pathname.split('/')[2],
        }),
      );

      alert('글을 삭제하였습니다.');
    }
  };

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const cdate = new Date(board.createdTime).toLocaleDateString(
    undefined,
    options,
  );

  return (
    <>
      <SLeft>
        <STitle>Board</STitle>
      </SLeft>
      <SBoardDetailPage>
        <div>
          <STable>
            <STHead>
              <STHeadTR>
                <STH>제목</STH>
                <STHNB colSpan={3}>{board.title}</STHNB>
              </STHeadTR>
              <STHeadTR>
                <STH>글쓴이</STH>
                <STHNB>{name}</STHNB>
                <STH>작성일자</STH>
                <STHNB>{cdate}</STHNB>
              </STHeadTR>
            </STHead>
            <STBody>
              <STR>
                <STDetail colSpan={4}>{board.content}</STDetail>
              </STR>
              <STR>
                <STDetailButton colSpan={3}></STDetailButton>
                <STDetailButton colSpan={1}>
                  <SButton
                    onClick={() => history.push(`/updateForm/${board.boardId}`)}
                  >
                    수정
                  </SButton>
                  <SButton onClick={detlteButton}>삭제</SButton>
                </STDetailButton>
              </STR>
            </STBody>
          </STable>
          <br />
          <STable>
            <STBody>
              <STR>
                <STDetail colSpan={4}>
                  <form onSubmit={onSubmit}>
                    <SInputComment
                      variant="outlined"
                      fullWidth
                      id="comment"
                      placeholder="댓글을 입력하세요"
                      name="comment"
                      value={comment}
                      type="text"
                      maxLength="100"
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <SButtonDetail type="submit">저장</SButtonDetail>
                  </form>
                </STDetail>
              </STR>
              {commentList.map((comment) => (
                <CommentList key={comment.id} comment={comment} />
              ))}
            </STBody>
          </STable>
        </div>
      </SBoardDetailPage>
    </>
  );
};

export default BoardDetail;
