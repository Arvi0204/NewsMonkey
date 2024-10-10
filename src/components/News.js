import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Pakistan vs England LIVE: first Test, day three, Multan Cricket Stadium – cricket score, radio commentary and text updates",
      "description": "Pakistan host England in the first Test at Multan Cricket Stadium – follow text & score updates plus radio commentary.",
      "url": "http://www.bbc.co.uk/sport/cricket/live/cpe3ppk717kt",
      "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
      "publishedAt": "2024-10-09T04:52:14.0522922Z",
      "content": "This slow-burning first Test has largely gone the way of the hosts so far. Day three is England's chance to return a few blows.\r\nThey resume on 96-1 in reply to 556. The mathematicians among you will… [+128 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor() {
    super(); // Super constructor must be called to avoid errors
    this.state = {
      articles: this.articles,
      loading: false
    }

  }
  render() {
    return (
      <div className="container my-3">
        <h2>Welcome to NewsMonkey, today's headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key = {element.url} >
                <NewsItem title={element.title.slice(0,40)} desc={element.description.slice(0,90)} imgUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default News
