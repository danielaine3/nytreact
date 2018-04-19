import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";
import "./Saved.css";

class Saved extends Component {
	state= {
		articles: {}
	};

	ComponentDidMount() {
    this.loadArticles();
	}

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data })
        )
      .catch(err => console.log('Error: ', err));
  };

  render() {
    return (
      <Container>
        <Row>
          <h2>Saved Articles</h2>
          {this.state.articles.length ? (
            <List>
              {this.state.articles.map(article => (
                <ListItem key={article._id}>
                  <a href={"/articles/" + article._id}>
                    <strong>
                      {article.title} {article.date}
                    </strong>
                    <p>{article.date}</p>
                    <p>{article.URL}</p>
                  </a>
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

export default Saved;