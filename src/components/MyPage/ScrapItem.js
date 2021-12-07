import { React, useState } from 'react';
import { Modal } from './Modal';
import {
  SALink,
  SButton,
  SModalText,
  SModalTitle,
  STableNum,
  STableRow,
  STableTitle,
} from './styles';

const ScrapItem = (props) => {
  const { scrapId, event } = props.scrap;
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

  const unScrap = async () => {
    let headers = new Headers({
      'Content-Type': 'application/json',
    });

    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    headers.append('Authorization', 'Bearer ' + accessToken);

    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/scrap/` + event.eventId,
      {
        method: 'DELETE',
        headers: headers,
      },
    );

    if (response.ok) {
      const scrap = await response.json();
      alert('삭제되었습니다.');
      window.location.href = '/mypage';

      return { scrap };
    }
  };
  console.log(event.related_link);

  return (
    <>
      <Modal show={show} handleClose={hideModal}>
        <SModalTitle>{event.title}</SModalTitle>
        <br />
        <SModalText>시작 : {startDate}</SModalText>
        <SModalText>끝 : {endDate} </SModalText>
        <SModalText>주최 : {event.host}</SModalText>
        <SModalText> 비용 : {event.cost}원</SModalText>
        <SModalText>인원 제한 : {event.limit_personnel}</SModalText>
        <SModalText>소요 시간 : {event.time_required}</SModalText>
        <div>
          <SALink href={event.related_link} target="_blank">
            관련 링크로 이동👉
          </SALink>
        </div>
      </Modal>
      <tr>
        <STableNum>{scrapId}</STableNum>
        <STableTitle onClick={showModal}>{event.title}</STableTitle>
        <STableRow>{startDate}</STableRow>
        <STableRow>{event.host}</STableRow>
        <STableTitle>
          <SButton onClick={unScrap}>삭제</SButton>
        </STableTitle>
      </tr>
    </>
  );
};

export default ScrapItem;
