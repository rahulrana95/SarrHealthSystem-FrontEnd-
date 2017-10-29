import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Menu, Icon, Card,Col } from 'antd';
import {  Button, Layout } from 'antd';
import LeftMenuPatient from './LeftMenuPatient.js';
import store from '../Stores/index.js';
import logo from '../images/logo.png';
import ShowTime from './ShowTime';
import '../App.css';
const SubMenu = Menu.SubMenu;
const { Header, Footer, Sider, Content } = Layout;

const MenuItemGroup = Menu.ItemGroup;


class Patient extends Component {
  constructor (props){
    super(props);
    this.state = {
      curTime:'',
      collapsed: false,
    }
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }




contentArea = () => {
  return (
    <div>
    {this.props.children}
    </div>
  );
}

getTime = () => {

var curDate='asd';

  return(
    <div>
    {curDate}
    asd
    </div>
  );
}

logOut = () => {
  store.dispatch({
    type:'loginOut'
  });
}



  showLogin = () => {
    return (
      <div>

      <Layout style={{ backgroundColor:'white' }}>
      <Header style={{ backgroundColor:'white' }}><Menu
       mode="horizontal"
     >
       <Menu.Item key="mail" style={{ fontStyle:'oblique' }}>
         <span><h2>Sarr Health System</h2> </span>
       </Menu.Item>
       <Menu.Item key="time" style={{ float:'right',width:'auto' }}>
        <ShowTime />
       </Menu.Item>
       <Menu.Item key="app" style={{ float:'right' }}  >
         <Icon type="appstore" /> <Button className="accent-color" onClick={this.logOut}>Logout</Button>
       </Menu.Item>

     </Menu>
     </Header>
      <Layout style={{ backgroundColor:'white' }}>
        <Sider className="accent-color text-primary-color" style={{ marginLeft: '10px', marginTop:'10px' }}>
        <Col span={24}>
          <div style={{ background: '#ECECEC', padding: '1  px',margin:'5px' }}>
        <Card title="Shatakshi" bordered={false} style={{ width: '100%',height:'auto'  }}>
        <img src="https://pbs.twimg.com/profile_images/898577929407418368/ImVOlPAh.jpg" style={{ width:'150px', height:'150px',borderRadius:'200px' }}/>

        <h3>A Little About her: </h3><p>
        </p>
        </Card>
        </div>
        </Col>
          <LeftMenuPatient />
        </Sider>
        <Content style={{ marginLeft:'10px',marginTop:'10px',backgroundColor:'white' }}>

          {this.contentArea()}
        </Content>
      </Layout>
      <Footer style={{ backgroundColor:'white' }}>Footer</Footer>
    </Layout>






      </div>
    );
  }

  render() {
    console.log('renderign');
    return (
      <div className="App">
        {this.showLogin()}
      </div>
    );
  }
}

function mapStateToProps(state){
	return {
    LoginReducer:state.LoginReducer
	};


	}

function matchDispatchToProps(dispatch){
	return bindActionCreators({},dispatch);


}

export default connect(mapStateToProps,matchDispatchToProps)(Patient);
