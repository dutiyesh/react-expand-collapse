import React from "react";
import { render } from "react-dom";
import "./styles.css";
import "./expand-collapse.css";

import BasicExample from "./BasicExample";
import CustomText from "./CustomText";

function Examples() {
  return (
    <div className="container">
      <h1 className="content__header">react-expand-collapse</h1>
      <BasicExample />
      <CustomText />
    </div>
  );
}

render(
  <Examples />,
  document.getElementById("root")
);
