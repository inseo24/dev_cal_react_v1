import { React } from 'react';
import { useHistory } from 'react-router';
import { STD, STDTitle, STR } from './styles';

const BoardItem = (props) => {
  const { boardId, title, createdTime, boardNumber, images } = props.board;

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const cdate = new Date(createdTime).toLocaleDateString(undefined, options);
  const history = useHistory();
  return (
    <>
      <STR>
        <STD>{boardNumber}</STD>
        <STDTitle
          onClick={() => {
            history.push(`/board/${boardId}`);
          }}
        >
          {title}
        </STDTitle>
        <STD>{cdate}</STD>
      </STR>
    </>
  );
};

export default BoardItem;
