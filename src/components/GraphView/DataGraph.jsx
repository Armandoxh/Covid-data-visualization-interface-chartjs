import React, { useState, useEffect } from "react";
import apiBuilder from "../Utils/apiBuilder";
import rootStateLookup from "../Utils/apiBuilder";
import axios from "axios";
import ApiResponse from "./ApiResponse";
import { render } from "react-dom";
export default function DataGraph({ state }) {
  const [myData, requestData] = useState(""); //default value for the state

  const rootSingleStateHistorical = "https://api.covidtracking.com/v1/states/";
  const [singleStateData, requestSingleState] = useState(""); //output based onwhat the user enters
  const [historicalContext, requestHistoricalData] = useState(""); //all historical context for every covid case

  const [inputState, changeState] = useState("ny");

  const updateUserInput = () => {
    changeState(state);
  };
  useEffect(() => {
    //when the page first renders onlyx
    changeState(state);
    axios
      .get(`${apiBuilder}`)
      .catch((error) => console.log(`Error: ${error}`)) //promise wasn't kept
      .then((response) => {
        //promise delivered
        requestData(response);
        // console.log(response);
      });

    console.log(
      "State Lookuop",
      `${rootSingleStateHistorical}${inputState}/daily.json`
    );

    axios
      .get(`${rootSingleStateHistorical}${inputState}/daily.json`)
      .catch((error) => console.log(`Error: ${error}`)) //promise wasn't kept
      .then((response) => {
        //promise delivered
        requestSingleState(response);
        console.log(
          "State prop inside of Datagraph.jsx",
          state,
          " InputData prop that useEffect relies on: ",
          inputState
        );
        // console.log("Single state lookup", response);
      });

    axios
      .get(`https://api.covidtracking.com/v1/states/ca/daily.json`)
      .catch((error) => console.log(`Error: ${error}`)) //promise wasn't kept
      .then((res) => {
        //promise delivered
        requestHistoricalData(res);
        // console.log("Historical Data", res);
      });
  }, [state]);

  const getData = () => {
    //promise : asynchronous, im waiting for it to get me something and i have to handle if it messes up
  };

  if (myData === "") {
    return <div>Loading...</div>;
  } else
    return (
      <div>
        <ApiResponse
          resData={myData.data}
          historicalContext={historicalContext.data}
          singleStateData={singleStateData.data}
        />
      </div> // <ApiResponse apiData={myData.data}/>
    );
}
