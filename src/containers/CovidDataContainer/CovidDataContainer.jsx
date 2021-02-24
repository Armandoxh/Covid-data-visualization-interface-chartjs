import React, { useState, useEffect } from "react";
import StateView from "../../components/GraphView/StateView";
import axios from "axios";

const CovidDataContainer = ({ state }) => {
  const [covidData, setCovidData] = useState([]);
  const [place, setPlace] = useState("ny");
  const rootSingleStateHistorical = "https://api.covidtracking.com/v1/states/";

  useEffect(() => {
    setPlace(state);
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${rootSingleStateHistorical}${place}/daily.json`)
      .catch((error) => console.log(`Error: ${error}`)) //promise wasn't kept
      .then((response) => {
        //promise delivered
        setCovidData(response.data);
      });
  };

  return (
    <div>
      <StateView covidData={covidData} />
    </div>
  );
};

export default CovidDataContainer;
