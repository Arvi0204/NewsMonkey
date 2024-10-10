import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export class News extends Component {
  constructor() {
    super(); // Super constructor must be called to avoid errors
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c22fbad0692842d1971194477d5bf4a0"
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Welcome to NewsMonkey, today's headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key = {element.url} >
                <NewsItem title={element.title} desc={element.description} imgUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News
