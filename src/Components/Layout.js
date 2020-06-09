import React from 'react'
import {
  Container,
  Menu,
  Grid,
  Image,
  Sidebar,
  Icon,
  Segment,
  Header,
  Label,
  Input
} from "semantic-ui-react";
import "stylesheets/global.css"
import SplitPane, { Pane } from "react-split-pane";

function Menubar(props) {
  let items = [
   {
     key: 'editorials',
     active: true,
     name: 'Editorials'
   }, {
     key: 'review',
     name: 'Reviews'
   }, {
     key: 'events',
     name: 'Upcoming Events'
   },
  ];
  return (
    <Menu items={items} />
    );
}

function Leftsidebar(props) {
  console.log(props)
  // const {activeItem} = this.state



  return (
    <Menu vertical>
      <Menu.Item
        name="inbox"
        active={props.activeItem === "inbox"}
        onClick={props.handleItemClick}
      >
        <Label color="teal">1</Label>
        Inbox
      </Menu.Item>

      <Menu.Item
        name="spam"
        active={props.activeItem === "spam"}
        onClick={props.handleItemClick}
      >
        <Label>51</Label>
        Spam
      </Menu.Item>

      <Menu.Item
        name="updates"
        active={props.activeItem === "updates"}
        onClick={props.handleItemClick}
      >
        <Label>1</Label>
        Updates
      </Menu.Item>
      <Menu.Item>
        <Input icon="search" placeholder="Search mail..." />
      </Menu.Item>
    </Menu>
  );
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: ""
    };
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    return (
      <div>
        <Menubar />
        <SplitPane split="vertical" minSize={100} defaultSize={300}>
          <div>
            <Container>
              <Leftsidebar
                activeItem={this.state.activeItem}
                handleItemClick={this.handleItemClick}
              />
            </Container>
          </div>
          <div>
            <Container>{this.props.children}</Container>
          </div>
        </SplitPane>
      </div>
    );
  }
}

export default Layout;