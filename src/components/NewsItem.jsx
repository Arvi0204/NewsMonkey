import React from 'react'

const NewsItem = (props) => {
    let { title, desc, imgUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <span className="position-absolute badge rounded-pill" style={{ zIndex: 1, right: "5px", top: "5px" }}>
                    {source}
                    <span className="visually-hidden">unread messages</span>
                </span>
                <img src={imgUrl ? imgUrl : "https://ichef.bbci.co.uk/news/1024/branded_news/e4ce/live/1205b210-8591-11ef-addc-5556603eb4c1.jpg"} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{desc}</p>
                    <p className="card-text"><small className="text-secondary">By {author ? author : "Unknown"} on {new Date(date).toUTCString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
