import React, { Component } from 'react';
import { Input,Col, Card, Button, Modal } from 'antd';
const Search = Input.Search;

class BookAppointment extends Component {
  comingAppointments = () => {

    return (
      <div>
      </div>
    );
  }
  render() {
    console.log('Calleddddddddddd');
    return (
      <div className="BookAppointment">
      <Search
  placeholder="Search Doctor"
  style={{ width: '40%',textAlign:'center' }}
  onSearch={value => {this.searchDo(value)}}
/>
<br/>

  {this.comingAppointments()}
      </div>
    );
  }
}

export default BookAppointment;
