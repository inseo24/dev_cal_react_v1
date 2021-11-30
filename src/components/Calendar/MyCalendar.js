import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';
import { Modal } from './Modal';

class MyCalendar extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_BASE}/event`).then((response) => {
      this.setState({ data: response.data.data });
      console.log(response.data.data);
    });
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleEventClick = ({ event, el }) => {
    this.toggle();
  };

  handleDateClick = (arg) => {
    console.log(arg.dateStr);
  };

  render() {
    return (
      <div style={{ cursor: 'pointer' }}>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal>
        <FullCalendar
          events={this.state.data}
          eventBackgroundColor="rgb(55, 40, 88)"
          eventBorderColor="inherit"
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          dateClick={this.handleDateClick}
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
