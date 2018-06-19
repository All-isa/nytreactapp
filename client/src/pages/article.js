import React, { Component } from "react";
import API from "../../utils/API";
// import { Container } from "../../components/Grid";
import Search from "../../components/Search";
import Results from "../../components/Results";
import Save from "../../components/Save";

class Articles extends Component {
  state = {
    results: [],
    saved: [],
    title: "",
    date: "",
    url: "", 
    topic: "",
    startyear: "",
    endyear: ""
  };

  componentDidMount() {
    this.loadResultArticles("");
    this.loadSavedArticles();
  };

  loadResultArticles = (query) => {
    console.log(query);
    API.getNewArticles(query)
      .then(res => {
          console.log(res);
          this.setState({ results: res.data });
        }
      )
      .catch(err => console.log(err));
  };

  loadSavedArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ saved: res.data, title: "", date: "", url: "" })
      )
      .catch(err => console.log(err));
  };

  saveArticle = (id) => {
    API.saveArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  deleteArticle = (id) => {
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    //if search was clicked
    if (this.state.topic) {
      //build query from topic, startyear, endyear
      let query = this.state.topic;
      if(this.state.startyear !== "")
        query += "&begin_date=" + this.state.startyear + "0101";
      if (this.state.endyear !== "")
        query += "&end_date=" + this.state.endyear + "0101";

      this.loadResultArticles(query);
    }
  };

  render() {
    return (
      <Container fluid>
        <div className="row">
          <div className="col-md-12">
            <Search 
              topic={this.state.topic}
              endyear={this.state.endyear}
              startyear={this.state.startyear}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
          />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Results
              articles={this.state.results}
              saveArticle={this.saveArticle}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Save
              articles={this.state.saved}
              deleteArticle = {this.deleteArticle}
            />
          </div>
        </div>
      </Container>
    );
  }
}

export default Articles;