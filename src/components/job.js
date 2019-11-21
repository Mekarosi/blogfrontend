import React from 'react';
export default function Jobs(props) {
  return (
    <div className='jobs'>
      <h4>ApplicationId: {props.ApplicationId}</h4>
      <h4>JobSeekId: {props.JobSeekId}</h4>
      <h4>JobId: {props.JobId}</h4>
      <h4>Status: {props.Status}</h4>
      <h4>Description: {props.Description}</h4>
      <h2>JobSeekerName: {props.JobSeekerName}</h2>
      <h4>Address: {props.Address}</h4>
      <h4>City: {props.City}</h4>
      <h4>Email: {props.Email}</h4>
      <h4>Mobile: {props.Mobile}</h4>
      <h4>Qualification: {props.Qualification}</h4>
      <h4>Gender: {props.Gender}</h4>
      <h4>BirthDate: {props.BirthDate}</h4>
      <h4>Resume: {props.Resume}</h4>
      <h4>UserName: {props.UserName}</h4>
      <h4>Password: {props.Password}</h4>
      <h4>Question: {props.Question}</h4>
      <h4>Answer: {props.Answer}</h4>
    </div>
  );
}
