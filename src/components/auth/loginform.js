import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from '../layout';
const axios = require('axios');
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const value = event.target.value;
    const id = event.target.id;
    this.setState({ [id]: value });
    console.log(this.state);
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:8080/login', this.state)
      .then(function(response) {
        if (response.data.status) {
          alert('logged in');
        } else {
          alert('wrong details');
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <Layout>
        <div className='App-header'>
          <div id='container'>
            <h1>SIGN IN TO YOUR ACCOUNT</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId='email'>
                <Form.Label className='Label'>Email address</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type='email'
                  placeholder='Enter email'
                />
              </Form.Group>
              <Form.Group controlId='password'>
                <Form.Label className='Label'>Password</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  type='password'
                  placeholder='Password'
                />
              </Form.Group>
              <Button variant='primary' type='submit' block>
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Layout>
    );
  }
}
