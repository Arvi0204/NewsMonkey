import React, { Component } from 'react'
import NewsItem from '../NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  constructor() {
    super(); // Super constructor must be called to avoid errors
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c22fbad0692842d1971194477d5bf4a0&page=1&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults })
  }

  handleNext = async () => {
    // console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c22fbad0692842d1971194477d5bf4a0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })
  }
  handlePrev = async () => {
    // console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c22fbad0692842d1971194477d5bf4a0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })
  }


  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Welcome to NewsMonkey, today's headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url} >
                <NewsItem title={element.title} desc={element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            )
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrev}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNext}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
