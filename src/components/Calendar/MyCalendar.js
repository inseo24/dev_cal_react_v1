import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import { Modal } from './Modal';
import { SDiv, SLink, SSCButton, SText } from './styles';

class MyCalendar extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      event: {
        _instance: { range: { start: {}, end: {} } },
        _def: { title: '', extendedProps: {} },
      },
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = (e) => {
    this.setState({ show: true });
    this.setState({ event: e.event });
    console.log(e.event);
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_BASE}/event`).then((response) => {
      this.setState({ data: response.data.data });
    });
  }

  render() {
    const scrap = async () => {
      let headers = new Headers({
        'Content-Type': 'application/json',
      });

      const accessToken = localStorage.getItem('ACCESS_TOKEN');
      headers.append('Authorization', 'Bearer ' + accessToken);
      console.log(headers);

      const response = await fetch(
        `${process.env.REACT_APP_API_BASE}/scrap/` +
          this.state.event._def.extendedProps.eventId,
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
      <div style={{ cursor: 'pointer' }}>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <SText>{this.state.event._def.title}</SText>
          <br />
          <SText>
            시작 :{' '}
            {new Date(this.state.event._instance.range.start).toLocaleString()}
          </SText>
          <SText>
            끝 :
            {new Date(this.state.event._instance.range.end).toLocaleString()}
          </SText>
          <SText> 주최 : {this.state.event._def.extendedProps.host}</SText>
          <SText> 비용 : {this.state.event._def.extendedProps.cost} 원</SText>
          <SText>
            인원 제한 : {this.state.event._def.extendedProps.limit_personnel}
          </SText>
          <SText>
            소요 시간 : {this.state.event._def.extendedProps.time_required}
          </SText>
          <br />
          <SDiv>
            <SLink
              href={this.state.event._def.extendedProps.related_link}
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
          events={this.state.data}
          eventBackgroundColor="rgb(55, 55, 108)"
          eventBorderColor="inherit"
          plugins={[dayGridPlugin, interactionPlugin]}
          eventClick={this.showModal}
          height={800}
          selectable="true"
          views={['month']}
          locale="ko"
        />
      </div>
    );
  }
}

export default MyCalendar;
