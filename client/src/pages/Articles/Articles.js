import React, { Component } from "react";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./Articles.css";

class Articles extends Component {
  // Initialize this.state.articles as an empty array
  state = {
    articles: []
  };

  // Add code here to get all articles from the database and save them to this.state.articles

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      . catch(err => console.log('Error: ', err));
  }


  render() {
    return (
      <Container>
        <Row>
          <h2>Search</h2>
          <form>
            <Input name="title" placeholder="Topic (required)" />
            <Input name="start" placeholder="Start Date (required)" />
            <Input name="end" placeholder="End Date" />
            <FormBtn>Submit Article</FormBtn>
          </form>
          <h2>Results</h2>
          {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => (
                <ListItem key={article._id}>
                  <a href={"/articles/" + article._id}>
                    <strong>
                      {article.title} by {article.date}
                    </strong>
                  </a>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
          <h2>Saved Articles</h2>
          {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => (
                <ListItem key={article._id}>
                  <a href={"/articles/" + article._id}>
                    <strong>
                      {article.title} by {article.date}
                    </strong>
                  </a>
                  <SaveBtn />
                  <DeleteBtn />
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
