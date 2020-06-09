import React from 'react'
import {
  Menu,
  Label,
  Input
} from "semantic-ui-react";

function Leftsidebar(props) {
  return (
    <Menu vertical>
      <Menu.Item
        name="info"
        active={props.activeItem === "info"}
        onClick={props.handleItemClick}
      >
        회원정보
      </Menu.Item>

      <Menu.Item
        name="spam"
        active={props.activeItem === "spam"}
        onClick={props.handleItemClick}
      >
        자산관리
      </Menu.Item>

      <Menu.Item
        name="updates"
        active={props.activeItem === "updates"}
        onClick={props.handleItemClick}
      >
        잔고현황
      </Menu.Item>
      <Menu.Item>
        <Input icon="search" placeholder="Search mail..." />
      </Menu.Item>
    </Menu>
  );
}

export {
  Leftsidebar
}