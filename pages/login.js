import React, { Component } from 'react';
import { Page, Header } from '../components/atoms';
import loginApi from '../utils/api/loginApi';

class Scouts extends Component {
  state = {
    email: '',
    password: '',
  };

  bindValue = field => (e) => {
    this.setState({ [field]: e.event.target });
  };

  handleSubmit = () => {
    loginApi.post('authentication', {
      payload: { ...this.state, serviceId: 4728 },
    }).then(res => console.log(res));
  };

  render() {
    const { login, password } = this.state;

    return (
      <Page>
        <Header>Login</Header>

        <div>
          <input onChange={this.bindValue('email')} placeholder="Login (email)" value={login} />
          <input onChange={this.bindValue('password')} placeholder="Senha" value={password} />
        </div>

        <button onClick={this.handleSubmit}>Logar</button>
      </Page>
    );
  }
}

export default Scouts;
