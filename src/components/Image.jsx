import React from 'react'

export default function Image(props) {
    const {img} = props;
  return (
    <div>
<div className="card m-2 p-2 cover box-shadow-1">
  <img src= {img} className="card-img-top" alt="/" />
</div>

    </div>
  )
}
