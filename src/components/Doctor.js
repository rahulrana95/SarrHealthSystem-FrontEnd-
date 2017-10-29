import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Menu, Icon, Card } from 'antd';
import {  Button, Layout } from 'antd';
import store from '../Stores/index.js';
import LeftMenuDoctor from './LeftMenuDoctor.js';
import logo from '../images/logo.png';
import ShowTime from './ShowTime';
import '../App.css';
const SubMenu = Menu.SubMenu;
const { Header, Footer, Sider, Content } = Layout;

const MenuItemGroup = Menu.ItemGroup;


class Doctor extends Component {
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
logOut = () => {
  store.dispatch({
    type:'loginOut'
  });
}
getTime = () => {

var curDate='asd';

  return(
    <div>
    {curDate}

    </div>
  );
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
       <Menu.Item key="maila" style={{ fontStyle:'oblique' }}>
         <span><h2>Welcome Doctor</h2> </span>
       </Menu.Item>
       <Menu.Item key="time" style={{ float:'right',width:'auto' }}>
        <ShowTime />
       </Menu.Item>
       <Menu.Item key="app" style={{ float:'right' }}  >
         <Icon type="appstore" /> <Button onClick={this.logOut}>Logout</Button>
       </Menu.Item>

     </Menu>
     </Header>
      <Layout style={{ backgroundColor:'white' }}>
        <Sider style={{ backgroundColor:'white', marginLeft: '10px', marginTop:'10px' }}>
        <div style={{ background: '#ECECEC', padding: '1  px',margin:'5px' }}>
      <Card title="Rahul Rana" bordered={false} style={{ width: '100%',height:'auto'  }}>
      <img src="https://avatars3.githubusercontent.com/u/10388123?s=400&v=4" style={{ width:'150px', height:'150px',borderRadius:'200px' }}/>

      <h3>A Little About her: </h3><p>
      </p>
      </Card>
      </div>
          <LeftMenuDoctor />
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

export default connect(mapStateToProps,matchDispatchToProps)(Doctor);
