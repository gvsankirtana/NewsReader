import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="black" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              key="general"
              element={
                <News
                  pageSize={this.pageSize}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              key="business"
              element={
                <News
                  pageSize={this.pageSize}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              key="entertainment"
              element={
                <News
                  pageSize={this.pageSize}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              key="health"
              element={
                <News
                  pageSize={this.pageSize}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              key="science"
              element={
                <News
                  pageSize={this.pageSize}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              key="sports"
              element={
                <News
                  pageSize={this.pageSize}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              key="technology"
              element={
                <News
                  pageSize={this.pageSize}
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
