import React, { Component } from 'react';
import { Input,Col, Card, Button, Modal } from 'antd';
const Search = Input.Search;

class SearchCase extends Component {
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

  searchDo = (searchKey)=> {
      console.log(searchKey);

  }

  render() {
    return (
      <div className="MedicalHisory">
      <Search
  placeholder="Search Medical History"
  style={{ width: '40%',textAlign:'center' }}
  onSearch={value => {this.searchDo(value)}}
/>
<br/>

<Col span={6}>
  <div style={{ background: '#ECECEC', padding: '5px',margin:'5px' }}>
<Card title="Add Medical History" bordered={false} style={{ width: '100%',height:'200px'  }}>
<Button type="danger" onClick={this.showModal}>Add New </Button>
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
<Card title="Doctor 2" bordered={false} style={{ width: '100%',height:'200px'  }}>
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
<Card title="Doctor 3" bordered={false} style={{ width: '100%',height:'200px'  }}>
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


      </div>
    );
  }
}

export default SearchCase;
