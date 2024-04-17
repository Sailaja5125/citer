// data fetching 
import React from 'react'
import Card from './Card';
import { useState , useEffect } from 'react'
import Spinner from './Spinner';
export default function Quoteblock(props) {
  const [state , setState] = useState([]);
  const [load , setLoad] = useState(true);
  useEffect(()=>{
    const api = async()=>{
      try {   
        let url = `https://api.api-ninjas.com/v1/quotes?category=${props.search1===""?"life":props.search1}&X-Api-Key=CD21HqBmCNHWmXt2p9SQRQ==P6RvSH2lXO45t9tv`
        let response = await fetch(url);
        let result = await response.json();
        setState(result[0]);
        setLoad(false);
      } catch (error) {
        console.log(error);
      }
    };
    api();
  } , [props.search1])
    return(
      <div>
        {load===false?<Card 
           category = { state.category}
           quote = {state.quote}
           author = {state.author}
          /> : <Spinner />}
          
      
        </div>
      )
  }  

