import { React } from 'react';
import { STableNum, STableTime, STableTitle } from './styles';

const ScrapItem = (props) => {
  const { boardId, title, createdTime } = props.board;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const cdate = new Date(createdTime).toLocaleDateString(undefined, options);
  return (
    <>
      <tr>
        <STableNum>{boardId}</STableNum>
        <STableTitle>{title}</STableTitle>
        <STableTime>{cdate}</STableTime>
      </tr>
    </>
  );
};

export default ScrapItem;
