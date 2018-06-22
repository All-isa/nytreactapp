import React, {Component} from "react";
import API from "../../utils/API";
import Jumbotron from "../JumboTron";
import { Link } from "react-router-dom";
import { List, ListItem } from "../List";
import SaveBtn from "../SaveBtn";
import "./Results.css";

class Results extends Component {
  state = {
    results: []
  }

  componentDidMount() {
    this.loadResultArticles("");
  };

  loadResultArticles = (query) => {
    console.log(query);
    API.getNewArticles(query)
      .then(res => {
        console.log(res.data.response.docs);
        const searchResults = res.data.response.docs;
        this.setState({ results: searchResults });
      }
      )
      .catch(err => console.log(err));
  };

  
  
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Results</h1>
        </Jumbotron>
        {console.log ("article array in results: " + this.state.results)}
        {this.props.results.length ? (
          <List>
            {this.props.results.map(article => {
              return (
                <ListItem key={article._id}>
                  <Link to={article.web_url}>
                    <strong>
                      {article.headline.main}
                    </strong>
                  </Link>
                  <p className="articleSnippet">
                    {article.snippet}
                  </p>
                  <SaveBtn 
                    id={"save" + article._id}
                    onClick={() => this.props.saveArticle({
                      id:article._id, 
                      title:article.headline.main,
                      url: article.web_url,
                      date: article.pub_date
                    })} 
                    />
                </ListItem>
              );
            })}
          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
    )
  }
}

export default Results;