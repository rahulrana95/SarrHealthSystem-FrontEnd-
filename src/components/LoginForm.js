import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import store from '../Stores/index.js';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        if(values.userName == 'patient'){
          console.log('patient called');
          store.dispatch({
            type:'loginInfo',
            typeOfUser:1,
            login:1,
            payload:values
          })
        }
        else {
          console.log('doctor called called');
          store.dispatch({
            type:'loginInfo',
            typeOfUser:0,
            login:1,
            payload:values
          })
        }
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <br/>
          <center><Button type="primary" style={{ marginLeft:'5px',marginRight:'5px'  }} htmlType="submit" className="login-form-button">
            Log in as Patient
          </Button>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in as Doctor
          </Button></center>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}

const LoginForm = Form.create()(NormalLoginForm);

export default LoginForm;
