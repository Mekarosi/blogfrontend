import React, { component } from 'react'
import Layout from './layout';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



export default class Publishpost extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             authorName: "",
             publicationTitle: "",
             body: "",
             date: new Date()

        };
    }
    

        handleChange= event => {
        let target = event.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]: value
        });
      }


      handleSubmit = async event => {
        event.preventDefault();

        axios.post("http://localhost:8080/publishpost", this.state)
            .then(response => {
                console.log(response);
                alert(`Post saved saved.`)
            })
            .catch(error => {
                console.log(error);
                alert(`Error encountered in post`)
            })
    }

     

    render() {
        return (
            <Layout>

                <div className="publishpost">
                    <Form onSubmit ={this.handleSubmit}>
                    <Form.Group controlId="authorName">
                    <Form.Control className="authorName" size="lg" type="text" name="authorName" value={this.state.authorName} onChange={this.handleChange}  placeholder="Enter Author's Name" />
                    </Form.Group>

                    <Form.Group controlId="publicationTitle">
                     <Form.Control className="publicationTitle" size= "lg" type="text" name="publicationTitle" value={this.state.publicationTitle} onChange={this.handleChange}  placeholder="Publication Title" />
                    </Form.Group> 
                     
                     <Form.Control className="textarea" as="textarea"  name="body" value={this.state.body} onChange={this.handleChange} placeholder="Story...."/>
                     
                     <br/>
                     <Button onClick={this.handleSubmit} className="Pbutton" variant="primary" type="submit" >Publish Post</Button>
                     </Form>
                </div>

            </Layout>
        )
    }
}






