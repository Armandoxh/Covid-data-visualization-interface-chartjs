import React, { useState, useEffect } from "react";
import axios from "axios";
import SupplimentalHospitalizations from "./SupplementalViews/SupplimentalHospitalizations";
import SupplimentalDeaths from "./SupplementalViews/SupplimentalDeaths";
import SupplimentalHappy from "./SupplementalViews/SupplimentalHappy";

const SupplementalDataView = ({ state }) => {
  const [covidData, setCovidData] = useState([]);
  const [place, setPlace] = useState("ga");
  const rootCurrentStateTotal = "https://api.covidtracking.com/v1/states/";

  useEffect(() => {
    setPlace(state);
    fetchData();
  }, [state]);

  // Supplemental Data View

  const fetchData = () => {
    axios
      .get(`${rootCurrentStateTotal}${place}/current.json`)
      .catch((error) => console.log(`Error: ${error}`)) //promise wasn't kept
      .then((response) => {
        //promise delivered
        setCovidData(response);
      });
  };

  if (!(covidData.data === undefined)) {
    return (
      <div>
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col-md-4">
              <h5>
                <span className="badge badge-info">
                  Testing and Hospitalizations
                </span>
              </h5>
              <SupplimentalHospitalizations covidData={covidData} />
            </div>

            <div className="col-md-4">
              <h5>
                <span className="badge badge-danger">Death Toll</span>
              </h5>
              <SupplimentalDeaths covidData={covidData} />
            </div>
            <div className="col-md-4">
              <h5>
                <span className="badge badge-success">Good News</span>
              </h5>
              <SupplimentalHappy covidData={covidData} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>no data</div>;
  }
};

export default SupplementalDataView;
