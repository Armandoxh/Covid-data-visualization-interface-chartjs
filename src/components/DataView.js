import React, { useState } from "react";
import InputForm from "./InputForm/InputForm";
import DataGraph from "./GraphView/DataGraph";

const Contacts = (props) => {
  const [stateSel, changeUserInput] = useState("");

  function handleUserInput(newInput) {
    let lowerCaseInput = newInput.toLowerCase();
    changeUserInput(lowerCaseInput);
    console.log(stateSel);
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <InputForm handleUserInput={handleUserInput} state={stateSel} />
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <InputTest /> */}
    </div>
  );
};
export default Contacts;
