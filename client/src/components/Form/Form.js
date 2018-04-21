// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import API from "../../utils/API"
// import SaveBtn from "../SaveBtn";
// import Input from "./Input";
// import FormBtn from "./FormBtn";
// import Results from "../Results";

// class Form extends Component {

// 	state = {
//     topic:"",
//     startYear:"",
//     endYear:"",
//     qURL:"",
//     result: [],
//   };

//    search = query => {
//     API.search(query)
//       .then(res => this.setState({ result: res.data.response.docs }))
//       . catch(err => console.log('Error: ', err));
//   };

//   handleInputChange = event => {
//     const {name, value } = event.target;
//     this.setState({
//       [name]: value
//     }, () =>{
//       this.setState(
//         {qURL:
//           (this.state.topic)+
//           (this.state.startYear ? `&begin_date=${this.state.startYear}0101` : "")+
//           (this.state.endYear ? `&end_date=${this.state.endYear}0101` : "")
//         }
//       )
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();

//     if (!this.state.topic) {
//       alert("Please enter a topic to search.");
//     } else {
//       console.log(this.state.qURL)
//       this.search(this.state.qURL);
//     }
//   };

//   render() {
//   	return (
//   		<div>
//   		<h2>Search</h2>
// 	  		<form>
// 	            <Input value={this.state.topic} onChange={this.handleInputChange} id="topic" name="topic" placeholder="Topic (required)" />
// 	            <Input value={this.state.startYear} onChange={this.handleInputChange} id ="start-date" name="start" placeholder="Start Date" />
// 	            <Input value={this.state.endYear} onChange={this.handleInputChange} id="end-date" name="end" placeholder="End Date" />
// 	            <FormBtn id="search" onClick= { this.handleFormSubmit }>Search</FormBtn>
// 			</form>
// 		</div>
//   	)
//   }
// }