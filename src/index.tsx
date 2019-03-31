import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from "antd";

const App = () => (
  <>
    <DatePicker />
    <h1>Hello world!</h1>
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
