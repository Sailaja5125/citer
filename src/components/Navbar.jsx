import React from 'react'
import { useState } from 'react'
export default function Navbar(props) {
const [searchInput , setState] = useState("");
let handleChange = (e)=>{
  setState(e.target.value);  // takes the target value from the search bar which is being updated
}
let handleClick =(e)=>{
 e.preventDefault();
 props.onSearch(searchInput); // set the value of teh search bar pass it to teh prop function .
 console.log(searchInput); // hence we get the value 
}
  return (
    <div>
    <ul className="nav justify-content-between bg-secondary h-80 align-items-center">
  <li className="nav-item">
    <h1 className="nav-link active fs-4 text-light">Citer</h1>
  </li>
  <form className="d-flex" role="search" onSubmit={handleClick}>
        <input className="form-control me-2" type="search" placeholder="Search" id='search' aria-label="Search"  style={{
          height : "35px",
          width : "200px",
        }} value = {searchInput} onChange={handleChange}/>
        <button className="btn btn-bg-light" type="submit" style={{
          height : "35px",
        }} onSubmit={handleClick}><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
</ul>   
</div>
  )
}
