import React, {
  useState,
  useEffect,
  useRef
} from 'react'
import {
  Accordion,
  Statistic,
  Container,
  Card,
  Divider,
  Header,
  Icon,
  Table,
  Responsive
} from "semantic-ui-react";

import ApiUtil from "utils/api"

import "stylesheets/home.css"

const {
  ipcRenderer
} = window;

function PriceBox(props) {
  const name = props.item.name;
  const priceString = ApiUtil.comma3Seperator(props.item.data.bids[0].price);

  return(
    <Card fluid className="priceBox" color={Math.floor(Math.random() * 3) > 1 ? "blue":"orange"} header={`${name}    ||    ${priceString} WON`} />
  )
  
}

function PriceBoxList(props) {
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
    updateOrderbook();
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
              {
                activeAccodion ? "현재가격 [눌러서 접기]" : "현재가격 [눌러서 펼치기]"
              }
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


class HotCoinBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      realtimeDiff: 0,
      name: props.item.name,
      curPrice: ApiUtil.toFixedFloat(props.item.data.closing_price),
      diffRate24: ApiUtil.toFixedFloat(props.item.data.fluctate_rate_24H, 2)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.item.data.closing_price !== prevProps.item.data.closing_price) {
      this.setState({
        realtimeDiff: ApiUtil.toFixedFloat(prevProps.item.data.closing_price - this.props.item.data.closing_price)
      })
    }
  }
  render() {
    return (
      <div>
        <div className="seperator" />
        <Statistic.Group widths="four">
          <Statistic>
            <Statistic.Value text>{this.state.name}</Statistic.Value>
            <Statistic.Label>Coin Name</Statistic.Label>
          </Statistic>
          <Statistic size="mini">
            <Statistic.Value>
              <p className="tooLarge">{ApiUtil.comma3Seperator(this.state.curPrice)}</p>
            </Statistic.Value>
            <Statistic.Label>현재가격</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon
                color={
                  this.state.realtimeDiff > 0
                    ? "blue"
                    : this.state.realtimeDiff < 0
                    ? "red"
                    : "green"
                }
                name={
                  this.state.realtimeDiff > 0
                    ? "hand point up outline"
                    : this.state.realtimeDiff < 0
                    ? "hand point down outline"
                    : "hand point right outline"
                }
              />
              {ApiUtil.comma3Seperator(this.state.realtimeDiff)}
            </Statistic.Value>
            <Statistic.Label>실시간등락</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon
                color={
                  this.state.diffRate24 > 0
                    ? "blue"
                    : this.state.diffRate24 < 0
                    ? "red"
                    : "green"
                }
                name={
                  this.state.diffRate24 > 0
                    ? "hand point up outline"
                    : this.state.diffRate24 < 0
                    ? "hand point down outline"
                    : "hand point right outline"
                }
              />
              {ApiUtil.toFixedFloat(this.state.diffRate24, 2)} %
            </Statistic.Value>
            <Statistic.Label>24시간 등락</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </div>
    );
  }
  

  
}
function HotCoinBoxList(props) {
  let resultList = props.resultList
  if(!resultList) return (<div></div>)
  return (
    <div>
      {resultList.map(
        (item) => {
          return (<HotCoinBox key={item.name} item={item}/>)
        }
      )} 
    </div>
  )
}

function HotCoin(props) {
  const [resultList, setresultList] = useState('');

  useEffect(() => {
    ipcRenderer.on("response_ticker", (event, data) => {
      let origin = ApiUtil.decodeApiResponse(data)
      let result = [];
      let waitsort = [];
      for (var key in origin) {
        waitsort.push([key, origin[key].acc_trade_value_24H])
      }
      // ! 제일 거래양이 많은 코인을 가져오기 위해 대기열에 추가

      waitsort.sort(function (a, b) {
        return b[1] - a[1];
      });
      // ! 정렬

      for (let i=0;i<10;i++) {
        result.push({
          name: waitsort[i][0],
          data: origin[waitsort[i][0]]
        })
      }
      // ! 정렬된 데이터를 바탕으로 결과 배열에 추가

      if (!(!result)) {
        setresultList(result);
      }
    })
    updateTicker();
  }, []);

  return(
    <div>
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='attention' />
            HOT 자산[거래금액 상위 10 가지]
        </Header>
      </Divider>
        <HotCoinBoxList resultList={resultList}/>
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

function updateOrderbook(){
  ipcRenderer.send("request_orderbook", ApiUtil.prepareApiData({
    order_currency: 'ALL',
    payment_currency: 'KRW'
  }));
}

function updateTicker() {
  ipcRenderer.send("request_ticker", ApiUtil.prepareApiData({
    order_currency: 'ALL',
    payment_currency: 'KRW'
  }));
}

function Content (props) {
  const [time, setTime] = useState(Date.now());
  // ! 주기적으로 새로고침 하기위해

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now())
      updateTicker();
      updateOrderbook();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <div>
      <CurrentPrice />
      <HotCoin/>
    </div>
  )
  // <Detail/>
  // ! 현재 삭제됨
}
export {Content}