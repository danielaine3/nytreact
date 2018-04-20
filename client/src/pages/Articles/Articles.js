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
    queryURL:"",
    result: [],
  };

  // Add code here to get all articles from the database and save them to this.state.articles
  componentDidMount() {
    this.search("");
  };

  search = query => {
    API.search(query)
      .then(res => this.setState({ API: res.data.response.docs })
        )
      . catch(err => console.log('Error: ', err));
  };

// deleteArticle = id => {
//   API.deleteArticle(id)
//   .then(res =>this.loadArticles())
//   .catch(err => console.log(err));
// };

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]:value
  });
};

handleFormSubmit = event => {
  event.preventDefault();
  this.setState({
    topic:"", 
    startYear:"",
    endYear:"",

  });

  //If user provides startYear- include in queryURL
  if (parseInt(this.state.startYear)) {
    this.setState({
      searchURL:`${this.state.queryURL}&begin_date=${this.state.startYear}0101`
    });
  }

  //If user provides endYear-- include in queryURL
  if(parseInt(this.state.endYear)) {
    this.setState({
      searchURL:`${this.state.queryURL}&end_date=${this.state.endYear}0101`
    });
  }
  this.search(this.state.searchURL);
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
            <Input id="topic" name="topic" placeholder="Topic (required)" />
            <Input id ="start-date" name="start" placeholder="Start Date (required)" />
            <Input id="end-date" name="end" placeholder="End Date" />
            <FormBtn id="search" onClick={ this.handleFormSubmit }>Search</FormBtn>
          </form>
          <h2>Results</h2>
          {this.state.result.map(result => {
            return (
              <Results
                key={result.web_url}
                title={result.headline.main}
                href={result.web_url}
              />
            )
          }) 
        }
        </Row>
      </Container>
    );
  }
}

export default Articles;
