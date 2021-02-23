import React from "react";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";
import HistoricalView from "./HistoricalGraph";
export default function ApiResponse(props) {
  // console.log(props.resData)
  console.log(props.singleStateData);
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
                    <Link to="/historicalView"> &nbsp; Some Other View | </Link>
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
            render={() => <HistoricalView historicalData={props.hi} />}
          />
        </Switch>
      </div>
    </Router>
  );
}
