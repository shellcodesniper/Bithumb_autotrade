import React from 'react'
import {
  Menu
} from "semantic-ui-react";

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

export {
  Menubar
}