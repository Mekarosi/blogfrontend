import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from '../layout';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';



export default class signup extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: "",
      userName: "",
      email: "",
      password: "",
      passwordNotMatch: false,
      signupSucess: false,
      signupFail: false
    };


    this.baseState = this.state
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const value = event.target.value;
    const id = event.target.id;
    this.setState({ [id]: value });
  }

  handleSubmit() {
    if (this.state.password === this.state.password2) {
      axios.post('http://localhost:8080/signup', {
        fullname: this.state.fullname,
        password: this.state.password,
        email: this.state.email,
        username: this.state.username
      }).then((response) => {
        const data = response.data
        if (data.status) {
          this.setState({ signupSuccess: true })
        } else {
          this.setState({ signupFail: true })
          setTimeout(() => {
            this.setState({
              signupFail: false
            })
          }, 3000)
        }
      }).catch((error) => { console.log(error) })
    } else {
      this.setState({ error: true, message: 'passwords dont match' })
      setTimeout(() => {
        this.setState({
          error: false
        })
      }, 3000)
    }
  }

  render() {
    return (
      <Layout>
        <div className="App-header">


          <div id='container'>
            <h1>SIGN-UP FORM</h1>

            {this.state.signupSuccess && (
              <Alert variant="success">
                <span>Your registration was successful. <a href="/login">Login</a></span>
              </Alert>)}

            {this.state.signupFail && (
              <Alert variant="danger">
                <span>Registration Unsuccesful. Please try again!</span>
              </Alert>)}

            <Form></Form>
          </div>

        </div>
      </Layout>
    ) 
  }
}






