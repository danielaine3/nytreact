import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import SaveBtn from "../../components/SaveBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Results from "../../components/Results";
import "./Articles.css";

class Articles extends Component {
  // Initialize this.state.articles as an empty array
  state = {
    topic:"",
    startYear:"",
    endYear:"",
    qURL:"",
    result: [],
  };

  // // Add code here to get all articles from the database and save them to this.state.articles
  // componentDidMount() {
  //   this.search("");
  // };

  search = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.response.docs }))
      . catch(err => console.log('Error: ', err));
  };

// deleteArticle = id => {
//   API.deleteArticle(id)
//   .then(res =>this.loadArticles())
//   .catch(err => console.log(err));
// };

  handleInputChange = event => {
    const {name, value } = event.target;
    this.setState({
      [name]: value
    }, () =>{
      this.setState(
        {qURL:
          (this.state.topic)+
          (this.state.startYear ? `&begin_date=${this.state.startYear}0101` : "")+
          (this.state.endYear ? `&end_date=${this.state.endYear}0101` : "")
        }
      )
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (!this.state.topic) {
      alert("Please enter a topic to search.");
    } else {
      console.log(this.state.qURL)
      this.search(this.state.qURL);
    }
  };

  handleSave = event => {
    // $(".save").on("click", function() {
    //   event.preventDefault();
    //   API.saveArticle({
    //     title:this.state.title, 
    //     URL: this.state.URL, 
    //     date: this.state.date
    //   })
    //   .then(res => this.loadArticles())
    //   .catch(err=>console.log(err));
    // })
  };


  render() {
    return (
      <Container>
        <Row>
          <h2>Search</h2>
          <form>
            <Input value={this.state.topic} onChange={this.handleInputChange} id="topic" name="topic" placeholder="Topic (required)" />
            <Input value={this.state.startYear} onChange={this.handleInputChange} id ="start-date" name="start" placeholder="Start Date" />
            <Input value={this.state.endYear} onChange={this.handleInputChange} id="end-date" name="end" placeholder="End Date" />
            <FormBtn id="search" onClick= { this.handleFormSubmit }>Search</FormBtn>
          </form>
          <h2>Results</h2>
          {this.state.result.map(result => {
            return (
              <div>
                <strong key={result.web_url} href={result.web_url}>{result.headline.main}</strong>
                <p>{result.web_url}</p>
                <SaveBtn onClick= { this.handleSave }>Save</SaveBtn>
              </div>
            )
          }) 
        }
        </Row>
      </Container>
    );
  }
}
export default Articles;
