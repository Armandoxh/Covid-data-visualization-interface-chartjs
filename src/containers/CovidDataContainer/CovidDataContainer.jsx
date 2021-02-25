import React, { useState, useEffect } from "react";
import StateView from "../../components/GraphView/StateView";
import axios from "axios";

const CovidDataContainer = ({ state }) => {
  const [covidData, setCovidData] = useState([]);
  const [place, setPlace] = useState("ga");
  const rootSingleStateHistorical = "https://api.covidtracking.com/v1/states/";

  console.log("State", state, "Place ", place);

  useEffect(() => {
    setPlace(state);
    fetchData();
  }, [state]);

  const fetchData = () => {
    axios
      .get(`${rootSingleStateHistorical}${place}/daily.json`)
      .catch((error) => console.log(`Error: ${error}`)) //promise wasn't kept
      .then((response) => {
        //promise delivered
        setCovidData(response.data);
      });
  };

  console.log(covidData);
  return (
    <div>
      <StateView covidData={covidData} />
    </div>
  );
};

export default CovidDataContainer;
