import { React } from 'react';
import { STDTitle } from './styles';

const CommentList = (props) => {
  const { id, comment } = props.comment;

  const deleteComment = (e) => {};
  return (
    <>
      <tr>
        <STDTitle onClick={deleteComment}>{comment}</STDTitle>
      </tr>
    </>
  );
};

export default CommentList;
