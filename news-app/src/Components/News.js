import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  constructor() {
    super();
    this.state = {
        articles:[],
        loading:false
    };
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c29cc0b04c3e49d3978de27f30e02301"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles:parsedData.articles})
}
  render() {
    return (
      <div className="container my-3">
        <h2>NewsReader - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItems
              key={element.url}
              title={element.title?element.title.slice(0,45):""}
              description={element.description?element.description.slice(0,88):""}
              imgurl={element.urlToImage} 
              newsUrl={element.url}/>
          </div>
        })}
        </div>
      </div>
    );
  }
}

export default News;
