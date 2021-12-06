import { React } from 'react';
import { STableTitle } from './styles';

const CommentList = (props) => {
  const { id, comment } = props.comment;

  const deleteComment = (e) => {};
  return (
    <>
      <tr>
        <STableTitle onClick={deleteComment}>{comment}</STableTitle>
      </tr>
    </>
  );
};

export default CommentList;
