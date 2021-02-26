import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

const SupplimentalHospitalizations = ({ covidData }) => {
  console.log("positive", covidData.data.positive, covidData.data.negative);
  const testsData = {
    labels: [
      `Positive Cases ${covidData.data.positive} `,
      `Negative Cases ${covidData.data.negative}`,
    ],
    datasets: [
      {
        data: [covidData.data.positive, covidData.data.negative],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      },
    ],
  };

  return (
    <div>
      <div className="pb-5">
        <h4>
          Total Tests Administered:
          <br></br>
          {/* {covidData.data.totalTestResults.toLocaleString()} */}
        </h4>
        <Doughnut data={testsData} />
      </div>
      <div className="pb-5">
        <h4>
          Total Tests Administered:
          <br></br>
          {/* {covidData.data.totalTestResults.toLocaleString()} */}
        </h4>
        <Doughnut data={testsData} />
      </div>
    </div>
  );
};
export default SupplimentalHospitalizations;
