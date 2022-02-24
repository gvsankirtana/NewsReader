import React, { Component } from "react";

export class NewsItems extends Component {
  render() {
    let { title, description, imgurl, newsUrl, author, date, source } =
      this.props;
    return (
        <div className="card">
          <span class="position-absolute top-0 start-100 translate-middle badge bg-primary">
            {source}
          </span>
          <img
            className="card-img-top"
            src={
              imgurl
                ? imgurl
                : "http://www.pagebd.org/public/imgs/1632460150.png"
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
    );
  }
}

export default NewsItems;
