import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/DataView";
import CovidDataContainer from "./containers/CovidDataContainer/CovidDataContainer";
import SelectStateView from "./containers/SelectStateView/SelectStateView";
class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="jumbotron">
                  <p>
                    Coronavirus data lookup. Data is obtained from{" "}
                    <a href="https://covidtracking.com/data/api">
                      The Covid Tracking API,
                    </a>
                    sponsored by the Atlantic Monthly Group. Note: API will stop
                    updating March 7th 2021. Historical contexts can be only
                    displayed after this date.
                    <br></br>
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <Contacts /> */}
        <SelectStateView />
      </div>
    );
  }
}
export default App;
