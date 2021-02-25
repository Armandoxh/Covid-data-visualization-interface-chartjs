import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import { Line } from "react-chartjs-2";

const StateView = ({ covidData }) => {
  //   const [thisStateDeaths, setStateDeaths] = useState({
  //     thisStateDeaths: stateDeaths,
  //   });
  //   console.log(thisStateDeaths[2] + thisStateDeaths[3]);
  console.log(covidData);
  const chartData = {
    labels: covidData
      .map((data) => {
        return data.date;
      })
      .reverse(),
    datasets: [
      {
        label: "Total Deaths",
        // data: [25000, 30000, 35000, 39000],
        data: covidData
          .map((data) => {
            return data.death;
          })
          .reverse(),

        fill: false,
        backgroundColor: "rgba(150, 40, 27, 1)",
        borderColor: "rgba(150, 40, 27, 1)",
      },
      {
        label: "Positive Cases",
        // data: [25000, 30000, 35000, 39000],
        data: covidData
          .map((data) => {
            return data.positiveIncrease;
          })
          .reverse(),

        fill: false,
        backgroundColor: "rgba(34, 167, 240, 1)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Coronavirus Deaths",
    },
    scales: {
      xAxes: [
        {
          ticks: {
            // stepSize: ,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            // suggestedMin: 25000,
            // suggestedMax: ,
          },
          stacked: false,
        },
      ],
    },
  };

  //   useEffect(() => {
  //     setStateDeaths(stateDeaths);
  //     console.log(thisStateDeaths);
  //   });

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default StateView;
