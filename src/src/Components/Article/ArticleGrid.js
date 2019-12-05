import React, { Component } from "react";
import ParametroAplicacionComponent from "./ParametroAplicacionComponent";
import API from "../../API/API";
import CircularProgressComponent from "../Common/CircularProgressComponent";
import { Redirect } from "react-router-dom";
import LinearProgressComponent from "../Common/LinearProgressComponent";

class ArticleGrid extends Component {
  state = {
    articles: [],
    cirlularLoading: true,
    linearLoading: false,
    serverError: false
  };

  componentDidMount() {
    this.getAllArticles();
  }

  getAllArticles() {
    API.ArticleAPI.getAll()
      .then(result => {
        this.setState({
          articles: result.data,
          cirlularLoading: false,
          linearLoading: false
        });
      })
      .catch(() => {
        this.setState({
          serverError: true
        });
      });
  }

  editArticle(newArticle) {
    this.setState({
      linearLoading: true
    });

    API.ArticleAPI.edit(newArticle)
      .then(() => {
        this.getAllArticles();
      })
      .catch(() => {
        this.setState({
          serverError: true
        });
      });
  }

  componentWillUnmount() {
    API.cancelAll();
  }

  onChange = (newArticle, oldArticle) => {
    this.editArticle(newArticle);

    const articles = [...this.state.articles];
    articles[articles.indexOf(oldArticle)] = newArticle;
    this.setState({ ...this.state, articles });
  };

  render() {
    return (
      <div>
        {this.state.serverError ? <Redirect to="/500" /> : null}
        {this.state.linearLoading ? <LinearProgressComponent /> : null}
        {this.state.cirlularLoading ? (
          <CircularProgressComponent />
        ) : (
          <div style={styles.article}>
            <Article articles={this.state.articles} onChange={this.onChange} />
          </div>
        )}
      </div>
    );
  }
}

const styles = {
  article: {
    margin: "10px"
  }
};

export default ArticleGrid;
