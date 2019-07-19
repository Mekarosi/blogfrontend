import React, { Component } from 'react'
import Jobs from '../components/jobs'
const axios = require('axios');

export default class Join extends Component {
   constructor(props){
       super(props)

       this.state = {
           jobsArray: []
       }
       }

       async componentDidMount() {

           try {
               const response = await axios.get('http://localhost:8080/job');
               console.log(response);
               this.setState({
                   jobsArray: response.data.result
               })

             } catch (error) {
               console.error(error);
             }

           // axios.get('http://localhost:8080/job')
           // .then(function(response) {
           //     // handle success
           //     console.log(response);
           //     this.setState({
           //         jobsArray: response.data.result
           //     })
           //   })
           //   .catch(function (error) {
           //       // handle error
           //       console.log(error);
           //     })
         }

   render(){
       return (
           <div>
               {this.state.jobsArray.map(post=> {
                  return (
                  <Jobs ApplicationId={post.ApplicationId}
                  JobSeekId={post.JobSeekId}
                  JobId={post.JobId}
                  Status={post.Status}
                  Description={post.Description}
                  JobSeekerName={post.JobSeekerName}
                  Address={post.Address}
                  City={post.City}
                  Email={post.Email}
                  Mobile={post.Mobile}
                  Qualification={post.Qualification}
                  Gender={post.Gender}
                  BirthDate={post.BirthDate}
                  Resume={post.Resume}
                  UserName={post.UserName}
                  Password={post.Password}
                  Question={post.Question}
                  Answer={post.Answer} />

                  )}
                 )}
           </div>
       )
   }
}