import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Modal } from './Modal';
import { SDiv, SLink, SSCButton, SText } from './styles';
import { useSelector } from 'react-redux';

const MyCalendar = () => {
  let state = useSelector((state) => state.ui.menuOpen);

  const [data, setData] = useState({
    data: [],
    event: {
      _instance: { range: { start: {}, end: {} } },
      _def: { title: '', extendedProps: {} },
    },
    show: false,
  });
  const [show, setShow] = useState(false);

  const [event, setEvent] = useState({
    _instance: { range: { start: {}, end: {} } },
    _def: { title: '', extendedProps: {} },
  });

  function showModal(e) {
    setEvent(e.event);
    setShow(true);
  }

  function hideModal() {
    setShow(false);
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE}/event`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const scrap = async () => {
    let headers = new Headers({
      'Content-Type': 'application/json',
    });

    const accessToken = localStorage.getItem('ACCESS_TOKEN');
    headers.append('Authorization', 'Bearer ' + accessToken);

    const response = await fetch(
      `${process.env.REACT_APP_API_BASE}/scrap/` +
        event._def.extendedProps.eventId,
      {
        method: 'POST',
        headers: headers,
      },
    );
    if (response.ok) {
      const scrap = await response.json();
      alert('스크랩 되었습니다.');
      return { scrap };
    }

    if (response.status === 403) {
      alert('로그인이 필요합니다.');
      window.location.href = '/login';
    }

    if (response.status === 500) {
      alert('이미 스크랩된 이벤트 입니다.');
    }
  };

  return (
    <>
      {!state && (
        <div style={{ cursor: 'pointer' }}>
          <Modal show={show} handleClose={hideModal}>
            <SText>{event._def.title}</SText>
            <br />
            <SText>
              시작 : {new Date(event._instance.range.start).toLocaleString()}
            </SText>
            <SText>
              끝 :{new Date(event._instance.range.end).toLocaleString()}
            </SText>
            <SText> 주최 : {event._def.extendedProps.host}</SText>
            <SText> 비용 : {event._def.extendedProps.cost} 원</SText>
            <SText>
              인원 제한 : {event._def.extendedProps.limit_personnel}
            </SText>
            <SText>소요 시간 : {event._def.extendedProps.time_required}</SText>
            <br />
            <SDiv>
              <SLink
                href={event._def.extendedProps.related_link}
                target="_blank"
              >
                관련 링크로 이동👉
              </SLink>
            </SDiv>
            <SDiv>
              <SSCButton onClick={scrap}>스크랩</SSCButton>
            </SDiv>
          </Modal>

          <FullCalendar
            events={data}
            eventBackgroundColor="rgb(55, 55, 108)"
            eventBorderColor="inherit"
            plugins={[dayGridPlugin, interactionPlugin]}
            eventClick={showModal}
            height={800}
            selectable="true"
            views={['month']}
            locale="ko"
          />
        </div>
      )}
    </>
  );
};

export default MyCalendar;
