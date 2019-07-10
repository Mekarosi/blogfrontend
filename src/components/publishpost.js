import React from 'react'
import Layout from './layout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



export default class publishpost extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             authorName: "",
             publicationTitle: "",
             body: ""

        }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    

        handleChange(event){
        const value = event.target.id
        const id = event.target.id
        this.setState[id] = value
      }


      handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:8080/publishpost',this.state)
        .then(function (response) {
          if (response.data.status) {
            alert('posted')
          }
          else{
            alert('failed')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    render() {
        return (
            <Layout>

                <div>
                    <Form.Group controlId="authorName">
                     <Form.Control type="text"   onChange={this.handleChange}  placeholder="Enter Author's Name" />
                    </Form.Group>

                    <Form.Group controlId="publicationTitle">
                     <Form.Control type="text"   onChange={this.handleChange}  placeholder="Publication Title" />
                    </Form.Group> 

                     <textarea className='textarea' name="body" form="userform">Add your comment...</textarea>
                     <br/>
                     <Button variant="primary" type="submit" >PublishPost</Button>
                </div>

            </Layout>
        )
    }
}






