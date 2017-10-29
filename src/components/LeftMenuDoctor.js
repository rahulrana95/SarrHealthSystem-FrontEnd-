import React from 'react';
import {Link} from 'react-router';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class LeftMenuDoctor extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    openKeys: ['sub1'],
  };
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    console.log('LEft MEnu Doctor called');
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: '100%',height:'30vh',textAlign:'left',border:'1px solid black' }}
      >
        <SubMenu key="sub1" title={
          <Link to='/'>
            <span><Icon type="mail" /><span>Home</span></span>
            </Link>
          }>

        </SubMenu>
        <SubMenu key="sub2" title={
            <Link to='/availableBookings'>
          <span><Icon type="appstore" /><span>Available Bookings</span></span>
        </Link>}>


        </SubMenu>
        <SubMenu key="sub3" title={
          <Link to='/searchCase'>
          <span><Icon type="setting" /><span>Search Case</span></span>
          </Link>
        }>

        </SubMenu>
        <SubMenu key="sub4" title={
          <Link to='/talkToDoctor'>
          <span><Icon type="setting" /><span>Talk to Doctor</span></span>
          </Link>
        }>

        </SubMenu>

      </Menu>
    );
  }
}
