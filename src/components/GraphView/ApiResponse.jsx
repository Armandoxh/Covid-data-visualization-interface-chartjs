import React, { useEffect, useState } from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import HistoricalView from "./HistoricalGraph";
import StateView from "./StateView";

export default function ApiResponse(props) {
  // console.log(props.resData)
  const calculateDeaths = (res) => {
    let stateDeaths = [];
    if (res === undefined) {
      return [];
    }
    for (let i = 0; i < res.length; i++) {
      if (res[i] === null) {
        return stateDeaths;
      }
      if (res[i].death === undefined) {
        return [1, 2, 3];
      }
      stateDeaths.push(parseInt(res[i].death));
    }
    return stateDeaths;
  };

  const [stateDeaths, setDeaths] = useState({
    stateDeaths: calculateDeaths(props.singleStateData),
  });

  useEffect(() => {
    setDeaths(calculateDeaths(props.singleStateData));
  }, [props.singleStateData]);
  //   console.log(calculateDeaths("Final State Deaths", stateDeaths));

  return (
    <Router>
      <div>
        {/* <ul>
			  <li>
				<Link to="/historicalView">historical View</Link>
			  </li>
			 
			</ul>
	
			<hr /> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav>
                <ul className="pagination">
                  <li className="page-item">
                    <Link to="/historicalView">Historical View | </Link>
                  </li>
                  <li className="page-item">
                    <Link to="/stateView"> &nbsp; State View | </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <Switch>
          <Route
            exact
            path="/historicalView"
            render={() => <HistoricalView historicalData={props} />}
          />

          <Route
            exact
            path="/stateView"
            render={() => (
              <StateView
                historicalData={props.singleStateData}
                stateDeaths={stateDeaths}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}
