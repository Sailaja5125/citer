import React from 'react'

export default function Card(props) {
  const {category , quote , author} = props;
  return (
    <div>
      <div className="container mt-4 p-4 ">
      <div className="card bg-light">
  <div className="card-header text-danger mx-4 p-4">
    {category}
  </div>
  <div className="card-body ">
    <blockquote className="blockquote mb-0">
      <p>{quote}</p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  </div>
</div>
</div>
    </div>
  )
}
