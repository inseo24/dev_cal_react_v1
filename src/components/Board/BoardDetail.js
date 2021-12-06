import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { boardDeleteAsync } from '../../app/slices/boardSlice';
import { commentPostAsync } from '../../app/slices/commentSlice';
import CommentList from './Comment';
import { SButton, SInput } from './styles';

const BoardDetail = () => {
  const [board, setBoard] = useState({
    boardId: '',
    title: '',
    content: '',
    createdTime: '',
    imgUrl: '',
  });

  const history = useHistory();

  const [comment, setComment] = useState('');
  let headers = new Headers({
    'Content-Type': 'application/json',
  });

  const [commentList, setCommentList] = useState([]);

  const accessToken = localStorage.getItem('ACCESS_TOKEN');
  headers.append('Authorization', 'Bearer ' + accessToken);
  console.log(commentList);

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
      <div>boardId : {board.boardId}</div>
      <div>Title : {board.title}</div>
      <div>content : {board.content}</div>
      <div>cratedTime : {cdate}</div>
      <img src={board.imgUrl} alt="img" />
      <Grid item xs={12}>
        <form onSubmit={onSubmit}>
          <SInput
            variant="outlined"
            required
            fullWidth
            color="secondary"
            id="comment"
            placeholder="댓글을 입력하세요"
            name="comment"
            value={comment}
            type="text"
            maxLength="25"
            onChange={(e) => setComment(e.target.value)}
            style={{ background: 'white', width: '420px' }}
          />
          <Grid item xs={12}>
            <SButton type="submit">저장</SButton>
          </Grid>

          {commentList.map((comment) => (
            <CommentList key={comment.id} comment={comment} />
          ))}
        </form>
        <Grid item xs={12}>
          <SButton onClick={() => history.push(`/updateForm/${board.boardId}`)}>
            수정
          </SButton>
        </Grid>
        <Grid item xs={12}>
          <SButton onClick={detlteButton}>삭제</SButton>
        </Grid>
      </Grid>
    </>
  );
};

export default BoardDetail;
