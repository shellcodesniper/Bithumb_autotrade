import React from 'react';
import 'stylesheets/App.css';
import {Switcher} from './switcher';
import Layout from './Layout';
import {
  Container
} from "semantic-ui-react";

import {
  UserManager
} from 'utils/user'

class App extends React.Component {

  constructor(props) {
    super (props);
    this.state = {

    }
  }

  render() {
    // 로그인 여부 확인 후 Home / Login 페이지로 넘겨주기
    return (
      <Layout>
        <Switcher isloggedIn={UserManager.isLoggedIn()} />
      </Layout>
    );
    
  }

}


export default App;
