import React from 'react';
export default function Blogpost(props) {
  return (
    <div className='divstyle'>
      <h1>{props.publicationTitle}</h1> <br />
      <h3>{props.body}</h3>
      <br />
      <h4>{props.authorName} </h4>
    </div>
  );
}
