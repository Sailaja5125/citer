import React, { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Quoteblock from './components/Quoteblock';
import Unsplash from './components/Unsplash';
export default function App() {
  const [searchQuery , setState] = useState("");
  let handleSearch = (query) =>{
    setState(query);
  }
  return (
    <div>
      <Navbar onSearch = {handleSearch}/>
      <h1 className='text-center'>Quote of the day</h1>
    <Quoteblock  search1 = {searchQuery}/>
    <Unsplash search = {searchQuery}/>
    </div>
  );
}
// errors to be solved tommorrow...