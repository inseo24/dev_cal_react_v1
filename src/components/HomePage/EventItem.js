import { React, useState } from 'react';
import { Modal } from '../MyPage/Modal';
import {
  SALink,
  SModalText,
  SModalTitle,
  STableRow,
  STableTitle,
} from './styles';

const EventItem = (props) => {
  console.log('props : ' + props.data);
  const { event } = props;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const startDate = new Date(event.start).toLocaleDateString(
    undefined,
    options,
  );
  const endDate = new Date(event.end).toLocaleDateString(undefined, options);

  const [show, setShow] = useState(false);

  function showModal() {
    setShow(true);
  }

  function hideModal() {
    setShow(false);
  }

  return (
    <>
      <Modal show={show} handleClose={hideModal}>
        <SModalTitle>{event.title}</SModalTitle>
        <br />
        <SModalText>시작 : {startDate}</SModalText>
        <SModalText>끝 : {endDate} </SModalText>
        <SModalText>주최 : {event.host}</SModalText>
        <SModalText>비용 : {event.cost}원</SModalText>
        <SModalText>인원 제한 : {event.limit_personnel}</SModalText>
        <SModalText>소요 시간 : {event.time_required}</SModalText>
        <div>
          <SALink href={event.related_link} target="_blank">
            관련 링크로 이동👉
          </SALink>
        </div>
      </Modal>
      <tr>
        <STableTitle onClick={showModal}>{event.title}</STableTitle>
        <STableRow>{startDate}</STableRow>
        <STableRow>{event.host}</STableRow>
      </tr>
    </>
  );
};

export default EventItem;
