import React from "react";
import "./FormBtn.css";

export const FormBtn = props => (
  <button {...props} style={{ float: "center", marginBottom: 10 }} className="btn">
    {props.children}
  </button>
);
