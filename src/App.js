import React from "react";
import "./styles.css";
import MainFormMaterialUI from "./MainFormMaterialUI";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <MainFormMaterialUI />
      </div>
    );
  }
}
