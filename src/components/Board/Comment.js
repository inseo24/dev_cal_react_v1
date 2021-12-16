import { TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { React } from 'react';
import { SButtonComment, STComment, STDComment, STDetail, STR } from './styles';

const CommentList = (props) => {
  const { id, comment } = props.comment;
  const user = props.comment.userId.email;
  const name = props.comment.userId.name;
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
          ).then(function (response) {
            if (response.status === 200) {
              alert('댓글을 삭제하였습니다.');
              window.location.href = '/board/' + boardId;
              return;
            }
          });
        }
      } else {
        alert('회원이 아닙니다.');
      }
    }
  };

  const updateComment = () => {
    setIsEdit(true);
  };
  console.log(comment);

  const saveComment = () => {
    setIsEdit(false);

    if (comment === inputRef.current.value) {
      return 0;
    }

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
    }).then(function (response) {
      if (response.status === 200) {
        alert('댓글을 수정하였습니다.');
        window.location.href = '/board/' + boardId;
        return;
      }
    });
  };

  return (
    <>
      {id !== 0 && (
        <>
          <STR>
            <STDComment colSpan={4}></STDComment>
          </STR>
          <STR>
            <STDComment colSpan={1}></STDComment>
            <STComment colSpan={2}>
              {!isEdit && (
                <ol key={id}>
                  <h5>{name}</h5>
                  <br />
                  {comment}
                  <SButtonComment onClick={deleteComment} id={id}>
                    삭제
                  </SButtonComment>
                  <SButtonComment onClick={updateComment}>수정</SButtonComment>
                </ol>
              )}
              {isEdit && (
                <>
                  <TextField
                    type="text"
                    size="small"
                    inputRef={inputRef}
                    defaultValue={comment}
                    style={{ width: '800px', padding: '5px' }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        saveComment();
                      }
                    }}
                  ></TextField>
                  <SButtonComment onClick={saveComment}>저장</SButtonComment>
                </>
              )}
            </STComment>
            <STDComment colSpan={1}></STDComment>
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
