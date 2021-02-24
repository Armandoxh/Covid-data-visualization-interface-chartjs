import React, { useState, useEffect } from "react";
import apiBuilder from "../Utils/apiBuilder";
import rootStateLookup from "../Utils/apiBuilder";
import axios from "axios";
import ApiResponse from "./ApiResponse";
import { render } from "react-dom";
export default function DataGraph({ state }) {
  const rootSingleStateHistorical = "https://api.covidtracking.com/v1/states/";
  const [singleStateData, requestSingleState] = useState(""); //output based onwhat the user enters
  const [historicalContext, requestHistoricalData] = useState(""); //all historical context for every covid case

  const [inputState, changeState] = useState("ny");

  useEffect(() => {
    changeState(state);
    axios

      .get(`${rootSingleStateHistorical}${inputState}/daily.json`)
      .catch((error) => console.log(`Error: ${error}`)) //promise wasn't kept
      .then((response) => {
        //promise delivered
        requestSingleState(response);
      });
  }, [state]);

  const getData = () => {
    //promise : asynchronous, im waiting for it to get me something and i have to handle if it messes up
  };

  if (singleStateData === "") {
    return <div>Loading...</div>;
  } else
    return (
      <div>
        <ApiResponse singleStateData={singleStateData.data} />
      </div> // <ApiResponse apiData={myData.data}/>
    );
}
