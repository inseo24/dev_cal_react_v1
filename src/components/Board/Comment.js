import { TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { React } from 'react';
import { STDetail, STR } from './styles';

const CommentList = (props) => {
  const { id, comment } = props.comment;
  const user = props.comment.userId.email;
  const boardId = window.location.pathname.split('/')[2];

  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef();

  const deleteComment = (e) => {
    if (id !== null) {
      if (localStorage.getItem('user') === user) {
        const answer = window.confirm('댓글을 삭제하시겠습니까?');

        if (answer) {
          e.preventDefault();
          let headers = new Headers({
            'Content-Type': 'application/json',
          });

          const accessToken = localStorage.getItem('ACCESS_TOKEN');

          if (accessToken && accessToken != null) {
            headers.append('Authorization', 'Bearer ' + accessToken);
          }

          const response = fetch(
            `${process.env.REACT_APP_API_BASE}/comment/` + id,
            {
              method: 'DELETE',
              headers: headers,
            },
          );

          if (response.status === 200) {
            alert('댓글을 삭제하였습니다.');
            window.location.href = '/board/' + boardId;
            return;
          }
        }
      } else {
        alert('회원이 아닙니다.');
      }
    }
  };

  const updateComment = () => {
    setIsEdit(true);
  };

  const saveComment = async (e) => {
    e.preventDefault();
    setIsEdit(false);
    let headers = new Headers({
      'Content-Type': 'application/json',
    });

    const accessToken = localStorage.getItem('ACCESS_TOKEN');

    if (accessToken && accessToken != null) {
      headers.append('Authorization', 'Bearer ' + accessToken);
    }
    const response = fetch(`${process.env.REACT_APP_API_BASE}/comment/` + id, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        comment: inputRef.current.value,
      }),
    });

    console.log(response);

    if (response.status === 200) {
      alert('댓글을 수정하였습니다.');
      window.location.href = '/board/' + boardId;
      return;
    }
  };

  return (
    <>
      {id !== 0 && (
        <>
          <STR>
            <STDetail colSpan={4}>
              {!isEdit && (
                <ol key={id}>
                  {comment}
                  <button onClick={updateComment}>수정</button>
                  <button onClick={deleteComment} id={id}>
                    삭제
                  </button>
                </ol>
              )}
              {isEdit && (
                <TextField
                  type="text"
                  size="small"
                  inputRef={inputRef}
                  defaultValue={comment}
                ></TextField>
              )}
              {isEdit && <button onClick={saveComment}>저장</button>}
            </STDetail>
          </STR>
          <STR>
            <STDetail colSpan={4}></STDetail>
          </STR>
          <STR>
            <STDetail colSpan={4}></STDetail>
          </STR>
        </>
      )}
    </>
  );
};

export default CommentList;
