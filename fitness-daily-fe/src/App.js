import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import SignInForm from './containers/SignInForm';
import SignUpForm from './containers/SignUpForm';
import RenderCategs from './containers/RenderCategs'
import AppBanner from './components/AppBanner'
import './App.css';
import * as actions from './actions/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function App(props) {
    console.log(props);
    return ( 
      <div className = "App" >
         <AppBanner />
          <Route exact path='/' render={() => (
            <SignInForm 
              userData={props.userData} 
              userSignin={props.userSignin} 
              state={props.state} 
              history={props.history}
            />
          )} />
          <Route path='/fitdaily/signup' render={() => (
            <SignUpForm 
              userSignup={props.userSignup} 
              state={props.state}
              userData={props.userData}
              history={props.history}
            />
          )} />
          <Route path={`/fitdaily/user/:id/categories`} render={ () => (
            <RenderCategs 
              state={props.state} 
              categories={props.categories} 
            />
          )} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));