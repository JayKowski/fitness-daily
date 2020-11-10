// import logo from './logo.svg';
import React from 'react';
import SignUpForm from './components/SignUpForm'
import './App.css';
import * as actions from './actions/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function App(props) {
    console.log(props.state);
    return ( 
        <div className = "App" >
            <h1>Fitness Daily</h1>
            <SignUpForm />
        </div>
    );
}

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);