import React from 'react'

export default function ApiResponse(props){
console.log("PROPS INSIDE APIRESPONSE" ,props)
    return(
        <div>
            <p>
                {props.apiData.date}
            </p>
        </div>
    )

}