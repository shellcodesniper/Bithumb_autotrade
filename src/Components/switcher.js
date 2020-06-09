import React from 'react';

import Home from './home/home';
import Login from './user/login';
import Layout from './Layout/Layout';

import {
  UserManager
} from 'utils/user'

class Switcher extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      sidebarActiveItem: ''
    }

    this.masterController = this.masterController.bind(this);
    this.sidebarHandler = this.sidebarHandler.bind(this);
  }

   masterController(execCommand, params=null) {
     console.log(`### DEBUG : masterController Executed command:${execCommand}`);
     if (execCommand === "checkLogIn") {
       this.setState({
         isLoggedIn: UserManager.isLoggedIn(params)
       })
     }
   }

   sidebarHandler(e, {name}) {
     console.log(name);
    this.setState(
    { sidebarActiveItem: name }
    )
   }
   
  render () {
    console.log("!!!!!!!RENDER!!!!!!!" + this.state.isLoggedIn)
    if(this.state.isLoggedIn) {
      return (
        <Layout includeLayout={true} masterController={this.masterController} sidebarActiveItem={this.state.sidebarActiveItem} sidebarhandler={this.sidebarHandler}>
          <Home masterController={this.masterController}/>
        </Layout>
      )
    }
    else {
      return (
        <Layout masterController={this.masterController}>
          <Login masterController={this.masterController}/>
        </Layout>
        )
    }
  }
  
}


export {
  Switcher
}