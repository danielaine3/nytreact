import React from "react";
import "./Results.css";

const Results = props => {
	<div class="results">
		<h2>{ props.title }</h2>
		{ props.href }
		<a href={ props.href } target="_blank">{ props.title }</a>
	</div>
};

export default Results;