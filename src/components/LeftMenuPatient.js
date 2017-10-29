import React from 'react';
import {Link} from 'react-router';
import { Menu, Icon,Col ,Card} from 'antd';
const SubMenu = Menu.SubMenu;

export default class LeftMenuPatient extends React.Component {
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
    return (
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: '100%',height:'80vh',textAlign:'left',border:'1px solid black' }}
      >

        <SubMenu key="sub1" title={
          <Link to='/'>
            <span><Icon type="mail" /><span>Home</span></span>
            </Link>
          }>

        </SubMenu>
        <SubMenu key="sub2" title={
            <Link to='/trackMedicines'>
          <span><Icon type="appstore" /><span>Track Medicines</span></span>
        </Link>}>


        </SubMenu>
        <SubMenu key="sub3" title={
          <Link to='/bookAppointment'>
          <span><Icon type="setting" /><span>Book Appointment</span></span>
          </Link>
        }>

        </SubMenu>
        <SubMenu key="sub4" title={
          <Link to='/emergency'>
          <span><Icon type="setting" /><span>Emergency</span></span>
          </Link>
        }>

        </SubMenu>
        <SubMenu key="sub5" title={
          <Link to='/medicalHistory'>
          <span><Icon type="setting" /><span>Medical History</span></span>
          </Link>
        }>

        </SubMenu>
      </Menu>
    );
  }
}
