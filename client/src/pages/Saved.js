import React, { Component } from "react";
import {DeleteBtn} from "../components/Buttons";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Nav from '../components/Nav';
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

class Search extends Component {

  state = {
    saved: []
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getSaved()
      .then(res => this.setState({ saved: res.data }))
      .catch(err => console.log(err));
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render () {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> Saved NYT Articles</strong></h1>
          </Jumbotron>
          <Row>
            <Col size="md-12">
              <Nav />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <br />
              <List>
                {this.state.saved.map(article => (
                  <ListItem key={article._id}>
                    <a href={article.url}>{article.title}</a>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;