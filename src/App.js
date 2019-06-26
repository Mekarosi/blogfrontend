import React from 'react';
///import logo from './logo.svg';
import './App.css';
import Loginform from './components/auth/loginform'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Signup from './components/auth/signup';

/*function App() {
  return (
    <div className="App-header">

      <Loginform></Loginform>

    <div id='container'>
    <h1>SIGN IN TO YOUR ACCOUNT</h1>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label class='Label'>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label class='Label'>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" class='Label' />
  </Form.Group>
  <Button variant="primary"  type="submit" block>
    Submit
  </Button>
</Form>
</div>
     
   </div>
    
  );
} */


function App() {
  return (
    <div className="App-header">

      <Signup></Signup>

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
    <Form.Label class='Label'>Email address</Form.Label>
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


  <Button variant="primary"  type="submit" block>
    Submit
  </Button>
</Form>
</div>
     
   </div>
    
  );
} 





export default App;
