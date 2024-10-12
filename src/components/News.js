import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const capitalizeFirst = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(35);
    let parsedData = await data.json();
    props.setProgress(60);
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  }
  // ComponedDidmount using useEffect
  useEffect(() => {
    // Eslint comment to disable warning in node compiler or console for useEffect dependency
    document.title = `NewsMonkey - ${capitalizeFirst(props.category)}`;
    // eslint-disable-next-line 
    updateNews();
    // eslint-disable-next-line  
  }, [])
  
  // const handleNext = async () => {
    //   setPage(page+1);
    //   updateNews();
    // }
    // const handlePrev = async () => {
      //   setPage(page-1);
      //   updateNews();
      // }
      const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        setPage(page + 1);
        setLoading(true);
        let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false);
  }
  return (
    <>
      <h2 className="text-center" style={{ margin: "35px", marginTop: "90px" }}>Welcome to NewsMonkey - Top {capitalizeFirst(props.category)} Headlines</h2>
      {/* {loading && <Spinner />} */}
      {/* Adding infinite scroll logic */}
      <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={loading && <Spinner />}>
        <div className="container">

          <div className="row">
            {articles && articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index} >
                  <NewsItem title={element.title} desc={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          <button disabled={page <= 1} type="button" className="btn btn-danger" onClick={handlePrev}>&larr; Previous</button>
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-success" onClick={handleNext}>Next &rarr;</button>
        </div> */}
    </>
  )
}
News.defaultProps = {
  country: "us",
  pageSize: 8,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}
export default News
