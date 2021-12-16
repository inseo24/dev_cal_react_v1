import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { boardDeleteAsync } from '../../app/slices/boardSlice';
import { commentPostAsync } from '../../app/slices/commentSlice';
import CommentList from './Comment';
import {
  SButtonBoard,
  SButtonDetail,
  SInputComment,
  STable,
  STBody,
  STDComment,
  STDetail,
  STDetailButton,
  STH,
  STHead,
  STHeadTR,
  STHNB,
  STR,
} from './styles';

const BoardDetail = () => {
  let state = useSelector((state) => state.ui.menuOpen);

  const [board, setBoard] = useState({
    boardId: '',
    name: '',
    title: '',
    content: '',
    createdTime: '',
  });

  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [imgUrl, setImgUrl] = useState();
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
        if (res.data[0].images[0] === undefined) {
          setImgUrl('');
        } else {
          setImgUrl(res.data[0].images[0].name);
        }
        setUser(res.data[0].userId.email);

        if (
          localStorage.getItem('user') === null ||
          localStorage.getItem('user') === ''
        ) {
          alert('로그인을 해주세요.');
        }
      });
  }, []);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      commentPostAsync({
        comment: comment,
        boardId: window.location.pathname.split('/')[2],
      }),
    );
  };

  const detlteButton = (e) => {
    if (localStorage.getItem('user') === user) {
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
        window.location.href = '/board';
      }
    } else {
      alert('회원이 아닙니다.');
    }
  };

  const submitComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const updateBoard = () => {
    if (localStorage.getItem('user') === user) {
      history.push(`/updateForm/${board.boardId}`);
    } else {
      alert('회원이 아닙니다.');
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
      {!state && (
        <>
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
                <STDetail colSpan={4}></STDetail>
              </STR>
              <STR>
                <STDetail colSpan={1}></STDetail>
                <STDetail colSpan={3}>
                  <img
                    src={`${process.env.PUBLIC_URL}/image/` + imgUrl}
                    alt=" "
                    style={{ width: '300px' }}
                  />
                  <br />
                  <br />
                  {board.content}
                </STDetail>
              </STR>
              <STR>
                <STDetailButton colSpan={3}></STDetailButton>
                <STDetailButton colSpan={1}>
                  <SButtonBoard onClick={updateBoard}>수정</SButtonBoard>
                  <SButtonBoard onClick={detlteButton}>삭제</SButtonBoard>
                  <SButtonBoard onClick={() => history.push(`/board`)}>
                    목록
                  </SButtonBoard>
                </STDetailButton>
              </STR>
            </STBody>
          </STable>
          <br />
          <STable>
            <STBody>
              <STR>
                <STDComment colSpan={1}></STDComment>
                <STDetail colSpan={2}>
                  <form onSubmit={onSubmit}>
                    <SInputComment
                      variant="outlined"
                      fullWidth
                      id="comment"
                      placeholder="댓글을 입력하세요"
                      name="comment"
                      value={comment}
                      type="text"
                      maxLength="250"
                      onChange={submitComment}
                    />
                    <SButtonDetail type="submit">저장</SButtonDetail>
                  </form>
                </STDetail>
                <STDComment colSpan={1}></STDComment>
              </STR>
              {commentList.map((comment) => (
                <CommentList key={comment.id} comment={comment} />
              ))}
            </STBody>
          </STable>{' '}
        </>
      )}
    </>
  );
};

export default BoardDetail;
