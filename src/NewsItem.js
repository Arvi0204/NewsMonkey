import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let { title, description, newsUrl, imgUrl} = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={imgUrl} className="card-img-top" alt="image URL" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/newsDetail/" className="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
