import React, { useState, useEffect } from "react";
import StateView from "../../components/GraphView/StateView";
import axios from "axios";

const CovidDataContainer = ({ state }) => {
  const [covidData, setCovidData] = useState([]);
  const [place, setPlace] = useState("ga");
  const rootCurrentStateTotal = "https://api.covidtracking.com/v1/states/";

  console.log("State", state, "Place ", place);

  useEffect(() => {
    setPlace(state);
    fetchData();
  }, [state]);

  console.log(`${rootCurrentStateTotal}${place}/current.json`);
  const fetchData = () => {
    axios
      .get(`${rootCurrentStateTotal}${place}/current.json`)
      .catch((error) => console.log(`Error: ${error}`)) //promise wasn't kept
      .then((response) => {
        //promise delivered
        setCovidData(response);
      });
  };
  //   console.log(covidData);
  if (!(covidData.data === undefined)) {
    return (
      <div>
        <container>
          <h1> Data Totals</h1>
          <h3>State: {covidData.data.state}</h3>
          <dl class="row">
            <dt class="col-sm-3 pb-4">Positive Cases </dt>
            <dd class="col-sm-9">{covidData.data.positive}</dd>

            <dt class="col-sm-3 pb-4"> Deaths</dt>
            <dd class="col-sm-9">
              <p>{covidData.data.death}</p>
            </dd>

            <dt class="col-sm-3 pb-4">In Hospital </dt>
            <dd class="col-sm-9">{covidData.data.hospitalizedCurrently}</dd>

            <dt class="col-sm-3 pb-4">In ICU </dt>
            <dd class="col-sm-9">{covidData.data.inIcuCurrently}</dd>

            <dt class="col-sm-3 pb-4"> Total Tests</dt>
            <dd class="col-sm-9">{covidData.data.totalTestsViral}</dd>

            <dt class="col-sm-3 pb-4">Recovered</dt>
            <dd class="col-sm-9">{covidData.data.recovered}</dd>
          </dl>
        </container>
      </div>
    );
  } else return <div>hello</div>;
};

export default CovidDataContainer;
