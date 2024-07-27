import React, { useEffect, useRef, useState } from 'react'
import Items from "../componenets/Items"
import Mealcards from './Mealcards';
import Loader from '../componenets/Loader';
import Welcome from './Welcome';
import Searching from './Searching';
import Error from './Error';

const Querybox = () => {

  const [data,setData]=useState([]);
  const [search,setSearch]=useState();
  const[hasError,setHasError]=useState(false);
  const[fetching,setFetching]=useState(false);


 let handleSearch=(event)=>{
   let userInputValue=event.target.value;
  setSearch(userInputValue)
 }

 

  let recieveData=async()=>{
    setFetching(true);
    setHasError(false);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const jsonData = await response.json();

      if (jsonData.meals) {
        setData(jsonData.meals);
      } else {
        setData([]); // Set to an empty array if no meals found
        setHasError(true); // Set error state if fetch fails
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setFetching(false);
    }
    }
    console.log(data);


  return (
    <>


    {fetching && <Loader/>}
   {hasError && <Error/>}
    
   {!fetching &&  <Searching onRecieveData={recieveData} onHandleSearch={handleSearch}/>}
   {data.length !== 0 && !fetching? <Mealcards mealData={data}/> : <Welcome/>}
    </>
  
  )
}

export default Querybox