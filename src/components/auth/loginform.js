import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Loginform() {
    
        return (
          <div className="App-header">
      
      
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
      } 
  
    

