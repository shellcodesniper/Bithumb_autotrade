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

const { ipcRenderer } = window;

class Home extends React.Component {
  render() {
    if(!(!localStorage.getItem("connectKey")) || !(!localStorage.getItem("secretKey"))) {
      console.log("MAIN")
      return (
        <Layout currentName="home">
        <Container>
          <Content responseData={this.state}/>
        </Container>
        </Layout>
      )
    }
    else {
      return (<Redirect to={"/login"} />)
    }
  }
}


export default Home;