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
    console.log("12341234", covidData.data);
    return (
      <div>
        <h1> Data Totals</h1>
        <h3>State: {covidData.data.state}</h3>
        <dl className="row">
          <dt className="col-sm-3 pb-4">Positive Cases </dt>
          <dd className="col-sm-9">
            {covidData.data.positive.toLocaleString()}
          </dd>

          <dt className="col-sm-3 pb-4"> Deaths</dt>
          <dd className="col-sm-9">
            {/* <p>{covidData.data.death.toLocaleString()}</p> */}
          </dd>

          <dt className="col-sm-3 pb-4">In Hospital </dt>
          <dd className="col-sm-9">
            {/* {covidData.data.hospitalizedCurrently.toLocaleString()} */}
          </dd>

          <dt className="col-sm-3 pb-4">In ICU </dt>
          <dd className="col-sm-9">
            {/* {covidData.data.inIcuCurrently.toLocaleString()} */}
          </dd>

          <dt className="col-sm-3 pb-4"> Total Tests</dt>
          <dd className="col-sm-9">
            {/* {covidData.data.totalTestsViral.toLocaleString()} */}
          </dd>

          <dt className="col-sm-3 pb-4">Recovered</dt>
          <dd className="col-sm-9">
            {/* {covidData.data.recovered.toLocaleString()} */}
          </dd>
        </dl>
      </div>
    );
  } else return <div>hello</div>;
};

export default CovidDataContainer;
