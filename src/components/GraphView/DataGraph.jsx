import React , {useState,useEffect} from 'react'
import apiBuilder from '../Utils/apiBuilder'
import axios from 'axios'
import ApiResponse from './ApiResponse'
export default function DataGraph(){

    const [data , requestData] = useState('')
 
    useEffect(() => {
        getData();
   }, []);

    const getData = ()=>{
        axios.get(`${apiBuilder}`)
        .catch(error => console.log(`Error: ${error}`))
        .then((response)=>{
            requestData(response)
             console.log( response.data)
        })
     
    }

    return (
        <ApiResponse data={data.data}/>
    )

}