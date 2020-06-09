import React from 'react';

import {
  Container,
  Button,
  Input,
  Form
} from 'semantic-ui-react'

import 'stylesheets/login.css'
const { ipcRenderer } = window;

function LoginForm (props) {
  console.log(props);

  return (
      <Container className="marginTop">
        <Form onSubmit={props.handleSubmit}>
          <Form.Field>
            <Input
            label={{ icon: 'asterisk' }}
            labelPosition='right corner'
            placeholder='Access Key'
            name="connectKey"
            value={props.connectKey}
            onChange={props.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              label={{ icon: 'asterisk' }}
              labelPosition='right corner'
              placeholder='Secret Key'
              name="secretKey"
              value={props.secretKey}
              onChange={props.handleChange}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
  );
}

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      connectKey:'',
      secretKey:''
    }

    this.restoreValue = this.restoreValue.bind(this);
    this.LoginForm = LoginForm.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    console.log("MOUNT")
    this.restoreValue();
  }

  restoreValue(event) {
    this.setState ({
      connectKey: !localStorage.getItem("connectKey") ? "" : localStorage.getItem("connectKey"),
      secretKey: !localStorage.getItem("secretKey") ? "" : localStorage.getItem("secretKey")
    })
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);
    if(!(!this.state.connectKey)) localStorage.setItem("connectKey", this.state.connectKey);
    if(!(!this.state.secretKey)) localStorage.setItem("secretKey", this.state.secretKey);
    ipcRenderer.send("test", this.state);
  }

  handleFormChange(event) {
    
    if(event.currentTarget.getAttribute('name') === 'connectKey') {
      this.setState(
        {
          connectKey : event.currentTarget.value
        }
      )
    }
    if(event.currentTarget.getAttribute('name') === 'secretKey') {
      this.setState(
        {
          secretKey: event.currentTarget.value
        }
      )
    }
  }

  render () {
    return (
      <Container>
        <LoginForm connectKey={this.state.connectKey} secretKey={this.state.secretKey} handleChange={this.handleFormChange} handleSubmit={this.handleSubmit}/>
      </Container>
    );
  }
}

export default Login;