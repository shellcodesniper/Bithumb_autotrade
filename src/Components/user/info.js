import React from 'react'
import Layout from 'components/Layout/Layout';
import {
  Container,
  Divider,
  Header,
  Icon,
  Table
} from "semantic-ui-react";


const { ipcRenderer } = window;

function Description (props) {
  var data = props.responseData;
  return (
    <div>
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='tag' />
          회원정보
        </Header>
      </Divider>

      <p>
        회원 아이디 : {data.userInfo.account_id}
      </p>
      <p>
        회원 가입일 : {data.userInfo.created}
      </p>

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
            <Table.Cell>{data.userInfo.order_currency}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>결제 통화 (마켓)</Table.Cell>
            <Table.Cell>{data.userInfo.payment_currency}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>거래 수수료율</Table.Cell>
            <Table.Cell>{data.userInfo.trade_fee}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>주문 가능 수량</Table.Cell>
            <Table.Cell>{data.userInfo.balance}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}

class Info extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      connectKey: !localStorage.getItem("connectKey") ? "" : localStorage.getItem("connectKey"),
      secretKey: !localStorage.getItem("secretKey") ? "" : localStorage.getItem("secretKey"),
      userInfo: {
        created: "",
        account_id: "",
        order_currency: "",
        payment_currency: "",
        trade_fee: "",
        balance : ""
      }
    }

  }
  componentDidMount() {
    ipcRenderer.on("response_account", (event, data) => {
      if(!(!data) && data !== "ERROR") {
        let result = data.data;
        var timestamp = parseInt(result.created);
        var d = new Date(timestamp);
        var createdString = `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
        this.setState({
          userInfo: {
            created: createdString,
            account_id: result.account_id,
            order_currency: result.order_currency,
            payment_currency: result.payment_currency,
            trade_fee: result.trade_fee,
            balance: result.balance
          }
        })
      } else {
        ipcRenderer.send("request_account", this.state);
        // 재요청
      }
    });
    ipcRenderer.send("request_account", this.state);
  }
  render () {
    return (
      <Layout currentName="info">
      <Container>
        <Description responseData={this.state}/>
      </Container>
      </Layout>
    )
  }
}

export default Info;