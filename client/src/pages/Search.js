import React, { Component } from "react";
import {SaveBtn} from "../components/Buttons";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Nav from '../components/Nav';
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {

  state = {
    searchTerm: '',
    startDate: '',
    endDate: '',
    results: []
  }

  handleFormSubmit = event => {
    event.preventDefault();
    API.callNYT(this.state.searchTerm)
    .then(res => this.setState({ results: res.data }))
    .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  saveArticle = article => {
    API.saveArticle({title: article.headline.main, url: article.web_url})
    .then(alert('Article saved!'))
    .catch(err => console.log(err));
  }

  render () {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
          </Jumbotron>
          <Row>
            <Col size="md-12">
              <Nav />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <br />
              <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>   Search Parameters</strong></h3>
              <form>
                <Input
                  value={this.state.searchTerm}
                  onChange={this.handleInputChange}
                  name="searchTerm"
                  placeholder="Search Term (required)"
                />

                <Input
                  value={this.state.startDate}
                  onChange={this.handleInputChange}
                  name="startDate"
                  placeholder="Start Date [YYYYMMDD] (optional)"
                />

                <Input
                  value={this.state.endDate}
                  onChange={this.handleInputChange}
                  name="endDate"
                  placeholder="End Year [YYYYMMDD] (optional)"
                />

                <FormBtn
                  disabled={!(this.state.searchTerm)}
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </FormBtn>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size='md-12'>
              <br />
                <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
                <List>
                  {this.state.results.map(article => (
                    <ListItem key={article._id}>
                      <a href={article.web_url}>{article.headline.main}</a>
                      <SaveBtn onClick={() => this.saveArticle(article)} />
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