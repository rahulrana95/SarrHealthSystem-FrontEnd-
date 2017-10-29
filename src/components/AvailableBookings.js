import React, { Component } from 'react';
import { Card, Button,Col } from 'antd';

class AvailableBookings extends Component {
  render() {
    return (
      <div className="Emergency">
      <Col span={6} style={{ margin:'5px' }}>
      <Card title="Alka Singh" bordered={false} style={{ width: '100%',height:'200px',border:'1px solid black',margin:'5px'  }}>
      <h3>9.30 PM Today</h3>
      <h3>Medicine dont work for me.</h3>
            <Button type="primary">Confirm</Button>
            <Button type="primary">Cancel</Button>

      </Card>
      </Col>
      <Col span={6} style={{ margin:'5px' }}>
      <Card title="Alka Singh" bordered={false} style={{ width: '100%',height:'200px',border:'1px solid black',margin:'5px'  }}>
      <h3>10.30 PM Today</h3>
      <h3>Medicine dont work for me.</h3>
            <Button type="primary">Confirm</Button>
            <Button type="primary">Cancel</Button>

      </Card>
      </Col>
      <Col span={6} style={{ margin:'5px' }}>
      <Card title="Alka Singh" bordered={false} style={{ width: '100%',height:'200px',border:'1px solid black',margin:'5px'  }}>
      <h3>1.30 PM Today</h3>
      <h3>Medicine dont work for me.</h3>
            <Button type="primary">Confirm</Button>
            <Button type="primary">Cancel</Button>

      </Card>
      </Col>
      </div>
    );
  }
}

export default AvailableBookings;
