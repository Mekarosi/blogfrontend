import React, { Component } from 'react';
import Layout from '../Components/Model/layout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const axios = require('axios');
export default class PublishPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: '',
      publicationTitle: '',
      body: '',
      date: new Date()
    };
  }
  handleChange = event => {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = async event => {
    event.preventDefault();
    axios
      .post('http://localhost:8080/publishpost', this.state)
      .then(response => {
        console.log(response);
        alert(`Post saved saved.`);
      })
      .catch(error => {
        console.log(error);
        alert(`Error encountered in post`);
      });
  };
  render() {
    return (
      <Layout>
        <div className='publishPost'>
          {/* <div className="App"> */}
          <form onSubmit={this.handleSubmit}>
            <Form.Group controlId='title'>
              <Form.Control
                size='lg'
                type='text'
                name='publicationTitle'
                value={this.state.publicationTitle}
                onChange={this.handleChange}
                placeholder='Title'
              />
            </Form.Group>
            <Form.Group controlId='body'>
              <Form.Control
                as='textarea'
                rows='5'
                name='body'
                value={this.state.body}
                onChange={this.handleChange}
                placeholder='Story...'
              />
            </Form.Group>
            <Form.Group controlId='author'>
              <Form.Control
                type='text'
                name='authorName'
                value={this.state.authorName}
                onChange={this.handleChange}
                placeholder='Author'
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Publish Post
            </Button>
          </form>
        </div>
        {/* </div> */}
      </Layout>
    );
  }
}
