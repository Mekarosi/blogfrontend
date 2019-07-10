import React from 'react';
import Blogpost from './blogpost';
import Layout from './layout';
const axios = require('axios');


export default class blog extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             blogpost: []
        }
    }

    componentDidMount= async ()=>{
         

        const response = await axios.get('http://localhost:8080/getblogs');
        const data = response.data

        this.setState({
            blogpost:data
        })
        
    }
    
    render() {
        
        return (
            
           <Layout>
                <div>
                {this.state.blogpost.map((post)=> {
                    return <Blogpost  author ={post.authorName} title={post.publicationTitle} body ={post.body} />

               }
                   )}
            </div>
           </Layout>
            
        )
    }
}









