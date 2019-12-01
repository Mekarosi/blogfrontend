import React from 'react';
export default function Blogpost(props) {
  return (
    <div className='container'>
      <div className='blogstyle'>
        <h4>{props.publicationTitle}</h4> <br />
        <h5>{props.body}</h5>
        <br />
        <h5>
          <strong>{props.authorName}</strong>{' '}
        </h5>
      </div>
    </div>
  );
}
