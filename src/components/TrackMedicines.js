import React, { Component } from 'react';
import {Card, Col, Alert,Modal, Button } from 'antd';
import '../App.css';

class TrackMedicines extends Component {
  constructor(){
    super();
      this.state = { visible: false }
  }
  showModal = () => {
   this.setState({
     visible: true,
   });
 }
 handleOk = (e) => {
   console.log(e);
   this.setState({
     visible: false,
   });
 }
 handleCancel = (e) => {
   console.log(e);
   this.setState({
     visible: false,
   });
 }
  render() {
    return (
      <div className="TrackMedicines">
    <Col span={6}>
      <div style={{ background: '#ECECEC', padding: '5px',margin:'5px' }}>
<Card title="Card title" bordered={false} style={{ width: '100%',height:'200px'  }}>
  <p>Time: 01:09:27</p>
  <p>Name: AuniPoninc</p>
</Card>
</div>
</Col>

<Col span={6}>
<div style={{ background: '#ECECEC', padding: '5px',margin:'5px' }}>
<Card title="Medicines Missed" bordered={false} style={{ width: '100%',height:'200px' }}>
<Alert
      message="Medicines Missed"
      type="error"

    />
    <Button type="danger" onClick={this.showModal}>See..</Button>
            <Modal
              title="Basic Modal"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
</Card>
</div>
</Col>

<Col span={6}>
<div style={{ background: '#ECECEC', padding: '5px',margin:'5px' }}>
<Card title="Last Medicine Taken" bordered={false} style={{ width: '100%',height:'200px' }}>
<p>Time: 01:09:27</p>
<p>Name: AuniPoninc</p>
</Card>
</div>
</Col>

<Col span={6}>
<div style={{ background: '#ECECEC', padding: '5px',margin:'5px' }}>
<Card title="Next Medicine" bordered={false} style={{ width: '100%',height:'200px' }}>
<p>Time: 01:09:27</p>
<p>Name: AuniPoninc</p>
</Card>
</div>
</Col>

<Col span={6}>
<div style={{ background: '#ECECEC', padding: '5px',margin:'5px' }}>
<Card title="See Week Schedule" bordered={false} style={{ width: '100%',height:'200px' }}>
<Button type="primary" onClick={this.showModal}>See Weekly Schedule</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
</Card>
</div>
</Col>

<Col span={6}>
<div style={{ background: '#ECECEC', padding: '5px',margin:'5px' }}>
<Card title="Upload New" bordered={false} style={{ width: '100%',height:'200px' }}>
<h1>Last Medicine</h1>
<Button type="primary" onClick={this.showModal}>See..</Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
</Card>
</div>
</Col>



      </div>
    );
  }
}

export default TrackMedicines;
