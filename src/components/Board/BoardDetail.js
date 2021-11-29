import { React, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const BoardDetail = () => {
  const [board, setBoard] = useState([]);

  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE}/board/` + id)
      .then((res) => res.json())
      .then((res) => {
        setBoard(res.data);
        console.log(board);
      });
  }, []);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  //   const cdate = new Date(createdTime).toLocaleDateString(undefined, options);

  return <></>;
};

export default BoardDetail;
