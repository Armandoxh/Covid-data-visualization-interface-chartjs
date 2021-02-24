import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import { Line } from "react-chartjs-2";

const StateView = ({ covidData }) => {
  //   const [thisStateDeaths, setStateDeaths] = useState({
  //     thisStateDeaths: stateDeaths,
  //   });
  //   console.log(thisStateDeaths[2] + thisStateDeaths[3]);
  console.log("Covid Data", covidData);
  const chartData = {
    labels: covidData.map((data) => {
      return data.date;
    }),
    datasets: [
      {
        label: "Total Deaths",
        // data: [25000, 30000, 35000, 39000],
        data: covidData.map((data) => {
          return data.death;
        }),

        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  console.log("Chart Data", chartData.datasets);
  const options = {
    title: {
      display: true,
      text: "Coronavirus Deaths",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 25000,
            suggestedMax: 50000,
          },
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
