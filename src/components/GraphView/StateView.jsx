import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import { Line } from "react-chartjs-2";

const StateView = ({ stateDeaths }) => {
  const [thisStateDeaths, setStateDeaths] = useState({
    thisStateDeaths: stateDeaths,
  });
  //   console.log(thisStateDeaths[2] + thisStateDeaths[3]);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Total Deaths",
        // data: [25000, 30000, 35000, 39000],
        data: [thisStateDeaths],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
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

  useEffect(() => {
    setStateDeaths(stateDeaths);
    console.log(thisStateDeaths);
  });

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default StateView;
