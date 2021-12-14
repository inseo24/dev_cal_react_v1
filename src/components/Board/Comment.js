import { TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { React } from 'react';
import { STDetail, STDTitle, STR } from './styles';

const CommentList = (props) => {
  const { id, comment } = props.comment;
  const [isEdit, setIsEdit] = useState(false);
  const inputRef = useRef();

  const deleteComment = (e) => {
    if (id !== null) {
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

      if (response.ok) {
        const comment = response.json();

        return { comment };
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

    if (response.ok) {
      const comment = response.json();

      return { comment };
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
