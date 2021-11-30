import {
  makeStyles,
  TableHead,
  TableRow,
  TableContainer,
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MyPage = () => {
  const useStyles = makeStyles({
    container: {
      maxHeight: 600,
    },
    cell: {
      fontWeight: 'lighter',
      fontSize: '12pt',
    },
  });
  const classes = useStyles();

  const { data } = useSelector((state) => state.MyPage);
  console.log(data);

  return (
    <>
      <TableContainer className={classes.container}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell}>번호</TableCell>
              <TableCell className={classes.cell}>제목</TableCell>
              <TableCell className={classes.cell}>닉네임</TableCell>
              <TableCell className={classes.cell}>작성날짜</TableCell>
              <TableCell className={classes.cell}>진행상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyPage;
