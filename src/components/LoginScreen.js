import React, { Component } from 'react';
import { Carousel,Menu, Icon, Card,Col, Modal, Button } from 'antd';
import LoginForm from './LoginForm.js';
import Footer from './Footer.js';
import logo1 from '../images/logo1.png';
import img1 from '../images/health.jpg';
class LoginScreen extends Component {
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

  topMenu =() => {
    return (
      <div style={{ color:'white' }}>
      <Menu
       mode="horizontal"
       className="dark-primary-color primary-text-color"
     >
       <Menu.Item key="mail" className="primary-text-color" style={{ fontStyle:'oblique' }}>
        <img src={logo1} style={{ height:'30px',marginTop:'20px' }}/>
       </Menu.Item>

       <Menu.Item key="app" style={{ float:'right' }} >
       <Button className="accent-color" onClick={this.showModal}>Log In </Button>

         <Modal
           title="LogIn"
           visible={this.state.visible}
           onOk={this.handleOk}
           onCancel={this.handleCancel}
         >
         <LoginForm />
         </Modal>
       </Menu.Item>

     </Menu>
      </div>
    );
  }

  info = () => {
    return (
      <div className="dark-primary-color text-primary-color" style={{ width:'100%',fontSize:'18px',padding:'50px',marginTop:'10px',marginBottom:'10px', marginLeft:'auto',marginRight:'auto' }}>

      <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>
      </div>
    );
  }

  team = () => {
    return (
      <div style={{ width:'70%', marginLeft:'auto',marginRight:'auto',marginTop:'30px',marginBottom:'30px' }}>

      <Col span={12}>
        <div style={{ background: '#ECECEC', padding: '5px',margin:'5px' }}>
      <Card title="Shatakshi" bordered={false} style={{ width: '100%',height:'100%',textAlign:'center'  }}>
      <img src="https://pbs.twimg.com/profile_images/898577929407418368/ImVOlPAh.jpg" style={{ width:'150px', height:'150px',alignItems:'center',borderRadius:'200px',textAlign:'center' }}/>
      <h3>Skills: sd, sad, asd</h3>
      <h3>A Little About her: </h3><p>
      </p>
      </Card>
      </div>
      </Col>

      <Col span={12}>
        <div style={{ background: '#ECECEC', padding: '5px',margin:'5px' }}>
      <Card title="Rahul rana" bordered={false} style={{ width: '100%',height:'100%',textAlign:'center'  }}>
      <img src="https://avatars3.githubusercontent.com/u/10388123?s=400&v=4" style={{ width:'150px', height:'150px',borderRadius:'200px',textAlign:'center' }}/>
      <h3>Skills: sd, sad, asd</h3>
      <h3>A Little About her: </h3><p>
      </p>
      </Card>
      </div>
      </Col>

      </div>
    );
  }

  screen = () => {
    return (<div style={{ margintop:'30px',marginBottom:'30px' }}><Carousel autoplay >
    <div><center><img src="http://bairocorp.com/images/1000x300xMed_Tech.png.pagespeed.ic.Ih3dGGyYLQ.jpg" style={{ width:'100%', height:'300px',textAlign:'center' }} /></center></div>
    <div><center><img src="http://www.gasug.org/wp-content/uploads/2017/08/data.png" style={{ width:'800px', height:'300px'  }} /></center></div>

  </Carousel></div>);
  }
  render() {
    return (
      <div className="LoginScreen primary-text-color">
        {this.topMenu()}
        <br/>
        {this.screen()}
        <center> <img src={logo1}/> </center>
        {this.info()}
        <hr className="divider-color" style={{ width:'100%' }}/>
        <div style={{ height:'350px' }}>{this.team()} </div>
<hr className="divider-color" style={{ width:'100%' }}/>
<Footer/>
      </div>
    );
  }
}

export default LoginScreen;
