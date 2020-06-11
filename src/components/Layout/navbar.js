import React from 'react'
import {
  Menu
} from "semantic-ui-react";

class Menubar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        key: 'contact',
        active: true,
        content: <b>기능 추가 / 문의 사항</b>
      }, {
        key: 'info',
        active: false,
        content: '개발 : shellcodesniper / KuuWangE'
      }, ]
    }
  }

  render () {
    return (
      <Menu items = {this.state.items}/>
    );
  }
}

export {
  Menubar
}