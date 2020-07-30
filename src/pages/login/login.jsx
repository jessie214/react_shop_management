import React from 'react';
import {connect} from 'react-redux';
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { getValue } from './store/loginAction'
import './login.scss';

class Login extends React.Component{
  handleFormSubmit = (values) => {
    this.props.getLoginState();
    if( this.loginState === 200) {
      window.location.href = './index.html';
    }else{
      message.success('用户名密码错误');
    }
  };
  render(){       
    return (
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={(values) => this.handleFormSubmit(values)}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" >
          Log in
        </Button>        
      </Form.Item>      
    </Form>
    )
  }
}
const mapState = (state) => ({
  loginState: state.loginReducer.loginState
});
const mapDispatchToProps = (dispatch) => ({
  getLoginState(values){
    dispatch(getValue(values));    
  }
});
export default connect(mapState,mapDispatchToProps)(Login);