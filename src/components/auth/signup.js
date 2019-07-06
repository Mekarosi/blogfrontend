import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from '../layout';




export default class signup extends React.Component {
  render() {
    return (
    <Layout>
       <div className="App-header">


<div id='container'>
  <h1>SIGN-UP</h1>
  <Form>
    <Form.Group controlId="firstName">
      <Form.Label class='Label'>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group controlId="lastName">
      <Form.Label class='Label'>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter Last Name" />
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
      <Form.Label class='Label'>Email Address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label class='Label'>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label class='Label'>Comfirm Password</Form.Label>
      <Form.Control type="password" placeholder=" Comfirm Password" />
    </Form.Group>


    <Button variant="primary" type="submit" block>
      Submit
  </Button>
  </Form>
</div>

</div>
    </Layout>
    )
  }
}






