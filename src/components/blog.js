import React from 'react';
import Blogpost from './blogpost';
import Layout from '../components/layout';
const axios = require('axios');
export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogpost: []
    };
  }
  async componentDidMount() {
    let response = await axios.post('http://localhost:8080/getposts');
    this.setState({
      blogpost: response.data.posts
    });
  }
  render() {
    return (
      <Layout>
        <div>
          {this.state.blogpost.map(post => {
            return (
              <Blogpost
                authorName={post.authorName}
                publicationTitle={post.publicationTitle}
                body={post.body}
              />
            );
          })}
        </div>
      </Layout>
    );
  }
}
