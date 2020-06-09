import React from 'react'
import {
  Container, Divider
} from "semantic-ui-react";
import "stylesheets/global.css"
import SplitPane, { Pane } from "react-split-pane";
import {Menubar} from "./navbar.js";
import {Leftsidebar} from "./sidebar.js";
import {
  Redirect
} from "react-router-dom";


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: props.currentName,
      redirect: ''
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.activeItem !== prevState.activeItem && this.state.activeItem !== this.props.currentName) {
      var redirectUrl = ''
      if(this.state.activeItem === "info") 
        redirectUrl = '/info'
      else 
        redirectUrl = '/'

      this.setState({
        redirect: redirectUrl
      })
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  }

  render() {
    if(this.state.redirect) return <Redirect to={this.state.redirect} />
    return (
      <div>
        <Menubar />
        <SplitPane split="vertical" minSize={100} defaultSize={212}>
          <div className="dividerLeft">
            <Leftsidebar
              activeItem={this.state.activeItem}
              handleItemClick={this.handleItemClick}
            />
          </div>
          <div className="dividerRight">
            {this.props.children}
          </div>
        </SplitPane>
      </div>
    )
  }
}

export default Layout;