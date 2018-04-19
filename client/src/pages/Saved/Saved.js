import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { List, ListItem } from "../../components/List";
import "./Saved.css";

class Saved extends Component {
	state= {
		article: {}
	};

	// Component.DidMount() {
	// 	API.getArticle(this.props.match.params.id)
	// 	.then(res=>this.setState({ article: res.data }))
	// 	.catch(err => console.log(err));
	// 	API.getSaved()?????????????????
	// }

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
                      {article.title} by {article.date}
                    </strong>
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