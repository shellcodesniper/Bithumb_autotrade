import React from 'react'
import {
  Container,
  Divider,
  Header,
  Icon,
  Table
} from "semantic-ui-react";
import { Redirect } from "react-router-dom";
import Layout from 'components/Layout/Layout';

import { Content } from "./children"
import ApiUtil from "utils/api"

const { ipcRenderer } = window;

class Home extends React.Component {
  render() {
    var {
      connectKey,
      secretKey
    } = ApiUtil.getApiData();
    if(!connectKey || !secretKey) {
      console.log("NOT LOGGED IN!!!")
      return (<Redirect to={"/login"} />)
    }
    else {
      console.log("MAIN")
      return (
        <Layout currentName="home">
        <Container>
          <Content/>
        </Container>
        </Layout>
      )
    }
  }
}


export default Home;