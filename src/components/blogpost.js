import React from 'react'

export default function Blogpost(props) {
  return (
    <div>
      <h4>{props.authorName}</h4>
      <h3>{props.publicationTitle}</h3>
      <h4>{props.body}</h4>
    </div>
  )
}







