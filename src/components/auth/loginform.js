import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from '../layout';
import Alert from 'react-bootstrap/Alert';
const axios = require('axios');




export default class Login extends Component {
 constructor(props) {
   super(props)

   this.state = {
     email: "",
     password: "",
     error:false,
     signinSuccess:false,
     signinfail:false
   }

   //this.baseState = this.state
   this.handleSubmit=this.handleSubmit.bind(this)
   this.handleChange=this.handleChange.bind(this)

 }
 handleChange(event) {
   const value = event.target.value
   const id = event.target.id
   this.setState({[id]:value});
   console.log(this.state)
   
 }
 handleSubmit(event){
  //  event.preventDefault()
   console.log(this.state)
   axios.post('http://localhost:8080/login',this.state)
   .then(function (response) {
     if (response.data.status) {
       localStorage.setItem('user',response.data.userDetails)
     }
     else{
       alert('wrong details')
     }
   })
   .catch(function (error) {
     console.log(error);
   });
 }



 render() {
   return (

     <Layout>
       <div className="App-header">
       <div id='container'>
         <h1>SIGN IN TO YOUR ACCOUNT</h1>
         {this.state.signinSuccess && (
           <Alert variant = "success">
             <span>Login successful. <a href="/blog">Blog</a></span>
           </Alert> )}

           {this.state.signinfail && (
             <Alert variant = "danger">
               <span>Login Unsuccessful. Please try again</span>
             </Alert>)}

         <Form onSubmit={(e) => {
           e.preventDefault()
           this.handleSubmit()
         }}>
           <Form.Group controlId="email">
             <Form.Label className='Label'>Email address</Form.Label>
             <Form.Control onChange={this.handleChange} type="email" placeholder="Enter email"  />
           </Form.Group>
           <Form.Group controlId="password">
             <Form.Label className='Label'>Password</Form.Label>
             <Form.Control onChange={this.handleChange} type="password" placeholder="Password"  />
           </Form.Group>
           <Button variant="primary" type="submit">Submit</Button>
         </Form>
       </div>
     </div>
     </Layout>
   )
 }
}

