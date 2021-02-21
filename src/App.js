import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/DataView";
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
                  {/* <h1>The General Assembly taught COVID Tracking API</h1>
                  <h3>
                    Brought to you by the lessons of August, Tosin, and Adonis
                  </h3> */}
                  <h5>Built and developed by Armando Xhimanki</h5>
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
                  <p>
                    <h6>Happy Tracking!</h6>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Contacts />
      </div>
    );
  }
}
export default App;
