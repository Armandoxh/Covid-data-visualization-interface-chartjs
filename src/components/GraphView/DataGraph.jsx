import React , {useState,useEffect} from 'react'
import apiBuilder from '../Utils/apiBuilder'
import axios from 'axios'
import ApiResponse from './ApiResponse'
import { render } from 'react-dom'
export default function DataGraph(){

    
    const [myData , requestData] = useState('') //default value for the state
 
    useEffect(() => {  //when the page first renders only
        getData();
   }, []);

   
   const getData = ()=>{//promise : asynchronous, im waiting for it to get me something and i have to handle if it messes up
    axios.get(`${apiBuilder}`)
    .catch(error => console.log(`Error: ${error}`)) //promise wasn't kept 
    .then((response)=>{  //promise delivered
        requestData(response)
         console.log( response)
    })
}
    
console.log(myData.data)
if(myData===''){
    return(
        <div>Loading...</div>
    )
 } else 
    return (
    <div>
        
        {myData.data.date}
    </div>// <ApiResponse apiData={myData.data}/>

    )

}