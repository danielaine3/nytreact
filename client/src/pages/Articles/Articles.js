import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import SaveBtn from "../../components/SaveBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Articles.css";

class Articles extends Component {
  // Initialize this.state.articles as an empty array
  state = {
    articles: [], 
    title: "",
    URL: "",
    Date: ""
  };

  // Add code here to get all articles from the database and save them to this.state.articles
  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data, title: "", URL: "", Date: "" })
        )
      . catch(err => console.log('Error: ', err));
  };

deleteArticle = id => {
  API.deleteArticle(id)
  .then(res =>this.loadArticles())
  .catch(err => console.log(err));
};

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]:value
  });
};

handleFormSubmit = event => {
  event.preventDefault();
  if (this.state.title) {
    //AJAX CALL??????????
    //====================
    //====================
    //====================
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
            <Input name="title" placeholder="Topic (required)" />
            <Input name="start" placeholder="Start Date (required)" />
            <Input name="end" placeholder="End Date" />
            <FormBtn>Search</FormBtn>
          </form>
          <h2>Results</h2>
          {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => (
                <ListItem key={article._id}>
                  <a href={"/articles/" + article._id}>
                    <strong>
                      {article.title}
                    </strong>
                    <p>{article.date}</p>
                    <p>{article.URL}</p>
                  </a>
                  <SaveBtn />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Row>
      </Container>
    );
  }
}

export default Articles;
