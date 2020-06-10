import React from 'react'
import {
  Container,
  Divider,
  Header,
  Icon,
  Table
} from "semantic-ui-react";

const {
  ipcRenderer
} = window;

function CurrentPrice(props) {
  return(
    <div>
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='money' />
          현재가격
        </Header>
      </Divider>
        <p>content</p>
    </div>
  );
}

function HotCoin(props) {
  return(
    <div>
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='attention' />
          HOT 자산
        </Header>
      </Divider>
        <p>content</p>
    </div>
  )
}
function Detail(props) {
  return(
    <div>
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='bar chart' />
          상세정보
        </Header>
      </Divider>

      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>주문 통화 (코인)</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>결제 통화 (마켓)</Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

function Content (props) {
  var data = props.responseData;
  return (
    <div>
      <CurrentPrice />
      <HotCoin/>
      <Detail/>
    </div>
  )
}
export {Content}