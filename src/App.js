import React, { Component } from 'react';
import Patient from './components/Patient.js';
import Doctor from './components/Doctor.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LoginScreen from './components/LoginScreen.js';
import './App.css';

class App extends Component {


  showUser = () => {

    console.log('show user called');
    return (
      <div>
        <Patient children={this.props.children}/>
      </div>
    );
  }

  showDoctor = () => {
    console.log('Doctor funtion called');
    return (
      <div>
        <Doctor children={this.props.children}/>
      </div>
    );
  }

  showLogin =() => {
    return (
      <div>
      <LoginScreen/>
      </div>
    );
  }

  render() {
    return (
      <div>
      {this.props.LoginReducer.login ? (this.props.LoginReducer.typeOfUser==0 ? this.showDoctor() : this.showUser()) : this.showLogin()}

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

export default connect(mapStateToProps,matchDispatchToProps)(App);
