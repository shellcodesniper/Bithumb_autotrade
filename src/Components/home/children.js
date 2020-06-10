import React, {useState, useEffect} from 'react'
import {
  Accordion,
  Container,
  Card,
  Divider,
  Header,
  Icon,
  Table
} from "semantic-ui-react";

import ApiUtil from "utils/api"

import "stylesheets/home.css"

const {
  ipcRenderer
} = window;

function PriceBox(props) {
  const name = props.item.name;
  const priceString = props.item.data.bids[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return(
    <Card fluid className="priceBox" color='red' header={`${name}    ||    ${priceString} WON`} />
  )
  
}

function PriceBoxList(props) {
  console.log("PRICEBOX")
  var dict = props.resultList;
  var elements = [];
  for (var key in dict) {
    if (!(["timestamp", "payment_currency"].includes(key))){
      elements.push(
        {
          name: key,
          data: dict[key]
        }
      )
    }
  }
  return(
    <div>
      <Container>
        {elements.map(
          (item) => {
            return (<PriceBox key={item.name} item={item}/>)
          }
        )}
      </Container>
    </div>
  )
}

function CurrentPrice(props) {
  const [resultList, setresultList] = useState('');
  const [activeAccodion, setactiveAccodion] = useState(false);
  
  useEffect(() => {
    ipcRenderer.on("response_orderbook", (event, data) => {
      let result = ApiUtil.decodeApiResponse(data)
      if(!(!result)) {
        setresultList(result);
      }
    })
    ipcRenderer.send("request_orderbook", ApiUtil.prepareApiData({
      order_currency: 'ALL',
      payment_currency: 'KRW'
    }));
  }, []);

  function handleClick(e) {
    setactiveAccodion(!activeAccodion);
  }

  return(
    <div>
      <Accordion>
        <Accordion.Title
          active = {
            activeAccodion
          }
          index={0}
          onClick={handleClick}
        >
          <Divider horizontal>
            <Header as='h4'>
              <Icon name='money' />
              현재가격 [눌러서 확인]
            </Header>
          </Divider>
        </Accordion.Title>
        <Accordion.Content active={activeAccodion}>
          <Card.Group>
          <PriceBoxList resultList={resultList}/>
        </Card.Group> 
        <div className="seperator" />
        </Accordion.Content>
      </Accordion>
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