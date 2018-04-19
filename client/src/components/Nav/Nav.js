import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <h1><a href="/" className="navbar-brand">New York Times Article Scrubber</a></h1>
        <h2> Search for and annotate articles of interest!</h2>
      </div>
    </div>
  </nav>
);

export default Nav;
