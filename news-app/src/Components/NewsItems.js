import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imgurl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img className="card-img-top" src={imgurl?imgurl:"http://www.pagebd.org/public/imgs/1632460150.png"} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
