import { React } from 'react';
import { useHistory } from 'react-router';
import { STableNum, STableTime, STableTitle } from './styles';

const BoardItem = (props) => {
  const { boardId, title, createdTime } = props.board;
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
      <tr>
        <STableNum>{boardId}</STableNum>
        <STableTitle
          onClick={() => {
            history.push(`/board/${boardId}`);
          }}
        >
          {title}
        </STableTitle>
        <STableTime>{cdate}</STableTime>
      </tr>
    </>
  );
};

export default BoardItem;
