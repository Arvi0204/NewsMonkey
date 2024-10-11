import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  capitalizeFirst = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  constructor(props) {
    super(props); // Super constructor must be called to avoid errors
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `NewsMonkey - ${this.capitalizeFirst(props.category)}`;
  }
  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c22fbad0692842d1971194477d5bf4a0&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false, totalResults: parsedData.totalResults })
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.updateNews();
  }

  handleNext = async () => {
    await this.setState({
      page: this.state.page + 1
    })
    this.updateNews();
  }
  handlePrev = async () => {
    await this.setState({
      page: this.state.page - 1
    })
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c22fbad0692842d1971194477d5bf4a0&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    })
  }


  render() {
    return (
      <>
        <h2 className="text-center" style={{ margin: "35px" }}>Welcome to NewsMonkey - Top {this.capitalizeFirst(this.props.category)} Headlines</h2>
        {/* {this.state.loading && <Spinner />} */}
        {/* Adding infinite scroll logic */}
        <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loader={this.state.loading && <Spinner />}>
          <div className="container">

            <div className="row">
              {this.state.articles && this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title} desc={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
                )
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrev}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-success" onClick={this.handleNext}>Next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News
