import React from 'react';
import { withRouter } from 'react-router';
import Styled from 'styled-components';
import axios from 'axios';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      type_id: null,
      message: null
    };
  }

  formHandler = e => {
    e.preventDefault();

    // check fields if filled in
    if (this.state.email.length > 0 && this.state.password.length > 0) {
      // sends data to server
      axios
        .post('http://localhost:5000/login', {
          email: this.state.email,
          password: this.state.password
        })
        .then(res => {
          this.clearInputs();

          localStorage.setItem('token', res.data.token);

          // update message for UI          
          this.setState({
            message: res.data.message
          });

          // redirect after successful login
          setTimeout(() => {
            this.props.history.push('/users');
          }, 4000);
        })
        .catch(err => {
          // displays error in UI, not console
          this.setState({
            message: err.message
          });
        });

    } else {
      alert('Please fill out all fields.');
    }

  }

  inputHandler = e => {
    // updates form fields when user interacts
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  clearInputs = () => {
    // clears form fields
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <Form>
        <Message>{this.state.message}</Message>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.inputHandler}
          placeholder="Email"
        ></input>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.inputHandler}
          placeholder="Password"
        ></input>
        <button  type="submit" onClick={this.formHandler}>Submit</button>
      </Form>
    )
  }
}

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  flex-flow: column no-wrap;
  background:black;
  color:white;
  color:#82e61e;
margin-top:5rem;
`;

const Message = Styled.p`
  border: 2px solid #000;
  padding: 10px;
  border-radius: 5px;
`;

export default withRouter(LoginForm);