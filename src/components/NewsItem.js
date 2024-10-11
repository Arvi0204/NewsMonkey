import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, desc, imgUrl, newsUrl } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imgUrl?imgUrl:"https://ichef.bbci.co.uk/news/1024/branded_news/e4ce/live/1205b210-8591-11ef-addc-5556603eb4c1.jpg"} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
