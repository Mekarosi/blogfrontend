import React from 'react'

export default function Blogpost(props) {
  return (
    <div>
      <h2>{props.authorName}</h2>
      <h2>{props.publicationTitle}</h2>
      <h2>{props.body}</h2>
    </div>
  )
}







