import React, { useState } from "react";
import InputForm from "../InputForm/InputForm";
import CovidDataContainer from "../CovidDataContainer/CovidDataContainer";
const SelectStateView = (props) => {
  const [stateSel, changeUserInput] = useState("");

  function handleUserInput(newInput) {
    let lowerCaseInput = newInput.toLowerCase();
    changeUserInput(lowerCaseInput);
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
              <div className="col-md-9">
                <CovidDataContainer state={stateSel} />
              </div>
              {/* <div className="col-md-3"></div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <InputTest /> */}
    </div>
  );
};
export default SelectStateView;
