import React from 'react'
import {useState , useEffect} from 'react'
import Image from './Image'
export default function Unsplash(props) {
  // const { search } = props;
  console.log(typeof props);
  console.log(props.search);
   const [res ,setRes] = useState([]);
   // use Effect is like component did mount if its a function based componennt
   useEffect(()=>{
    const fetchRequest = async()=>{
      let url = `https://api.unsplash.com/search/photos?page=1&query=${props.search===""?"life":props.search}&client_id=dkWUNI-6kQKwJsON_p-MKWbH_e1v1LrTskjdfTGshJU`;
      let request = await fetch(url);
      let response = await request.json();
      let images = response.results;     
      setRes(images);
      console.log(images);
   };
    fetchRequest();
   } , [props.search]);
    return (
      <div className='d-flex m-1 p-1 flex-wrap justify-content-center'>
      {res.map((e)=>{
      return (
    <div key = {e.id}>
    <Image img = {e.urls.small} />
    </div>)
      })}
      </div>
   )
}

